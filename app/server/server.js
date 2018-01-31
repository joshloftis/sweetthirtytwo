const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwtExp = require('express-jwt');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const exphbs = require('express-handlebars');

const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();

// Requiring our models for syncing
const db = require('./models');
const schema = require('./graphql/schema');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(morgan('dev'));

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.set('views', 'app/server/views');
app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

// I don't care about your HTTP Method
app.use(cookieParser(process.env.JWT_SECRET));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/auth', require('./routes/auth-routes.js'));

app.get('/', jwtExp({
  secret: process.env.JWT_SECRET,
  getToken: function fromCookie(req) {
    if (req.signedCookies) {
      return req.signedCookies.jwtAuthToken;
    }
    return null;
  },
  credentialsRequired: false,
}), (req, res, next) => {
  // if user is signed-in, next()
  if (req.user) {
    next();
  } else {
    res.redirect('/auth/sign-in');
  }
});

app.use(
  '/graphql',
  bodyParser.json(),
  jwtExp({
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
  jwtExp({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
  }),
);

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

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
