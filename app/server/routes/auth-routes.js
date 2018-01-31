const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');

const authRouter = express.Router();
const dotenv = require('dotenv').config();


authRouter.get('/sign-up', (req, res) => {
  res.render('sign-up', { status: 'Create a username and password' });
});

// POST route for creating a new user
authRouter.post('/sign-up', (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.log(err);
      res.render('sign-up', {
        status: 'Unable to create username with password provided',
        error: err,
      });
    } else {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.email,
          password: hash,
          email: req.body.email,
          role: 'owner',
        }).then(() => {
          res.redirect('/auth/sign-in');
        }).catch((err) => {
          res.render('sign-up', {
            status: 'Unable to create username with password provided',
            error: err,
          });
        });
      });
    }
  });
});

authRouter.get('/sign-in', (req, res, next) => {
  if (req.user) {
    res.redirect('/');
  } else {
    res.render('sign-in', { status: 'Enter your username and password' });
  }
});

authRouter.post('/sign-in', (req, res, next) => {
  db.User.findOne({
    username: req.body.username,
  }).then((user) => {
    console.log(user);
    if (!user) {
      console.log('no user found');
      res.render('sign-in', { status: 'Username or password is incorrect' });
    } else {
      bcrypt.compare(req.body.password, user.password, (err, valid) => {
        if (err || !valid) {
          res.render('sign-in', { status: 'Username or password is incorrect' });
        } else {
          // create JWT token
          const jwtAuthToken = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
              userId: user._id,
              username: user.username,
            },
          }, process.env.JWT_SECRET);
            // Create a cookie embedding JWT token
          console.log(jwtAuthToken);
          res.cookie('jwtAuthToken', jwtAuthToken, {
            secure: process.env.NODE_ENV === 'production',
            signed: true,
          });
          // redirect user to secure app
          res.redirect('/auth/profile');
        }
      });
    }
  }).catch(next);
});

authRouter.get('/profile', (req, res, next) => {
  res.render('profile');
});

// Routes
// =============================================================
module.exports = authRouter;
