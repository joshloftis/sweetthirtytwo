const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authRouter = require('express').Router;

const dotenv = require('dotenv').config();

authRouter.get('/sign-up', (req, res) => {
  res.render('sign-up', { status: 'Create a username and password' });
});

authRouter.post('/sign-up', (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      res.render('sign-up', {
        status: 'Unable to create username with password provided',
        error: err,
      });
    } else {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        db.User.create({
          username: req.body.username,
          password: hash,
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
    if (!user) {
      res.render('sign-in', { status: 'Username or password is incorrect' });
    } else {
      bcrypt.compare(req.body.password, user.password, (err, valid) => {
        if (err || !valid) {
          res.render('sign-in', { status: 'Username or password is incorrect' });
        } else {
          const jwtAuthToken = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
              userId: user.id,
              username: user.username,
            },
          }, process.env.JWT_SECRET);
          res.cookie('jwtAuthToken', jwtAuthToken, {
            secure: process.env.NODE_ENV === 'production',
            signed: true,
          });
          res.redirect('/');
        }
      });
    }
  }).catch(next);
});

module.exports = authRouter;
