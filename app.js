const express = require('express');
const graphqlHTTP = require('express-graphql');

const graphqlSchema = require('./graphql/schema')
const graphqlRootResolver = require('./graphql/root-resolver')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlRootResolver,
  graphiql: true,
  customFormatErrorFn: (error) => {
    if (!error.originalError) {
      return error;
    }

    return error;
  }
}));
app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));