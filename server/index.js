//conect mysql database
let mysql = require('mysql');

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolver');

//import dotenv
require('dotenv').config();

let connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWD,
  database: process.env.DBNAME,
});

try {
  connection.connect(() => server());
} catch (error) {
  console.log(error);
}

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  serverApollo.listen().then(({ url }) => {
    console.log('##########################');
    console.log(`Servidor listo en: ${url}`);
    console.log('##########################');
    console.log('Servidor ON');
  });
}
