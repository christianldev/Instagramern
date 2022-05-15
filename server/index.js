//conect mysql database
const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolver');
const { graphqlUploadExpress } = require('graphql-upload');
const cors = require('cors');
const { issueToken } = require('./controllers/UserController');
const User = require('./models/user');

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
      console.log('Error de conexion');
    } else {
      console.log('Conectado a la base de datos');
      startServer();
    }
  },
);

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const token = req.headers.authorization;

      if (token) {
        try {
          let user = jwt.verify(
            token.replace('Bearer ', ''),
            process.env.SECRET_KEY,
          );
          if (user.exp < Date.now() / 1000) {
            user = User.findById(user.id);
            if (!user) {
              throw new Error('Usuario no encontrado');
            }
            let tokens = await issueToken(user);

            return { ...tokens, user };
          }
          return { user };
        } catch (error) {
          console.log(error);
        }
      }
    },
  });
  await server.start();

  const isDevelopment = process.env.APP_ENV === 'development';
  const app = express();

  app.use(
    helmet({
      crossOriginEmbedderPolicy: !isDevelopment,
      contentSecurityPolicy: !isDevelopment,
    }),
    cors(),
  );

  app.use(graphqlUploadExpress());

  server.applyMiddleware({
    app,
    path: '/graphql',
  });

  await new Promise((r) => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
