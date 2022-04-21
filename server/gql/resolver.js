const resolvers = {
  Query: {
    //User by id
    getUser: () => {
      console.log('Obteniendo usuario');
      return null;
    },
  },
};

//exportar resolver
module.exports = resolvers;
