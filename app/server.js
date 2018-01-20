const express = require('express');
const mongoose = require('mongoose');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./graphql/schema');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(morgan('dev'));

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
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
