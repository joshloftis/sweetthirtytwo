const { graphql } = require('graphql');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Schema = require('./graphql/schema');
const graphQLHTTP = require('express-graphql');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(morgan('dev'));

const query = 'query { todos { id, title, completed } }';
graphql(Schema, query).then((result) => {
  console.log(JSON.stringify(result, null, ' '));
});

app.use('/', graphQLHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/suite_thirty_two';

// Setting up mongoose
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
