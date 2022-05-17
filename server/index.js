//conect mysql database
const mongoose = require('mongoose');
const express = require('express');

// web socket from apollo server
const { createServer } = require('http');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');

// apollo server
const { ApolloServer } = require('apollo-server-express');

const helmet = require('helmet');
const jwt = require('jsonwebtoken');

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
  const app = express();
  const httpServer = createServer(app);
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

  const serverCleanup = useServer(
    {
      schema,
    },
    wsServer,
  );

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,

    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),

      // Proper shutdown for the WebSocket server.
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
    context: async ({ req }) => {
      const auth = req ? req.headers.authorization : null;

      if (auth) {
        try {
          const decodeToken = jwt.verify(
            auth.replace('Bearer ', ''),
            process.env.SECRET_KEY,
          );

          const user = await User.findById(decodeToken.id);

          return { user };
        } catch (err) {
          console.log(err);
        }
      }
    },
  });

  await server.start();

  const isDevelopment = process.env.APP_ENV === 'development';

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

  httpServer.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
}
