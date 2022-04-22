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
    register: (_, { input }) => {
      console.log('Registrando usuario');
      return null;
    },
  },
};

//exportar resolver
module.exports = resolvers;
