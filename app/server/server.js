const express = require('express');
const mongoose = require('mongoose');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const dotenv = require('dotenv').config();

const schema = require('./graphql/schema');
const db = require('./models');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(morgan('dev'));

app.use('*', cors({ origin: 'http://localhost:3000' }));


app.use(
  '/graphql',
  bodyParser.json(),
  jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
  }),
  graphqlExpress(req => ({
    schema,
    context: {
      user: req.user ?
        db.User.findOne({ _id: req.user.id }) : Promise.resolve(null),
    },
  })),
  jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
  }),
);

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));


//
//
const databaseUri = 'mongodb://localhost/suite_thirty_two';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}
const db = mongoose.connection;

db.on('error', function(err) {
  console.log('mongo error: ', err);
});

db.once('open', function() {
  console.log('Mongo connection successful');
});
//
//

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/suite_thirty_two';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
