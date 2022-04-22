const User = require('../models/user');
const bcrypt = require('bcryptjs');

const resolvers = {
  Query: {
    //User
    getUser: () => {
      console.log('Obteniendo usuario');
      return null;
    },
  },
  Mutation: {
    //User
    register: async (_, { input }) => {
      const newUser = input;

      newUser.email = newUser.email.toLowerCase();
      newUser.username = newUser.username.toLowerCase();

      const { email, username, password } = newUser;

      // Revisar si el email ya existe
      const foundEmail = await User.findOne({ email });
      if (foundEmail) {
        throw new Error('El email ya existe');
      }
      // Revisar si el username ya existe
      const foundUsername = await User.findOne({ username });
      if (foundUsername) {
        throw new Error('El usuario ya existe');
      }

      //Encriptar password
      const salt = await bcrypt.genSaltSync(10);
      newUser.password = await bcrypt.hashSync(password, salt);

      try {
        const user = new User(newUser);
        await user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

//exportar resolver
module.exports = resolvers;
