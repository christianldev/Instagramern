const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Get users
function getUser() {
  const users = new User();
  console.log(users);
  return users;
}

// Regster user
async function register(input) {
  const newUser = input;

  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();

  const { email, username, password } = newUser;

  // Revisar si el email ya existe
  const foundEmail = await User.findOne({ email });
  // Revisar si el username ya existe
  const foundUsername = await User.findOne({ username });
  if (foundEmail) {
    throw new Error('El email ya existe');
  }

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
}

module.exports = {
  register,
  getUser,
};
