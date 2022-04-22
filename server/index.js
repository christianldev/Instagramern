//conect mysql database
const mongoose = require('mongoose');

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolver');

//import dotenv
require('dotenv').config({ path: '.env' });

mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, _) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Conectado a la base de datos');
    }
  },
  server(),
);

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  serverApollo.listen().then(({ url }) => {
    console.log('##########################');
    console.log(`Servidor listo en: ${url}`);
    console.log('##########################');
  });
}
