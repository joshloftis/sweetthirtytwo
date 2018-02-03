const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');

const authRouter = express.Router();
const dotenv = require('dotenv').config();

authRouter.post('/sign-up', (req, res, next) => User.findOne({ username: req.body.username })
  .then((user) => {
    if (!user) {
      return bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          res.send('Unable to create username with password');
        }
        return bcrypt.hash(req.body.password, salt, (err, hash) => {
          const {
            firstName, lastName, username, email, role,
          } = req.body;
          return User.create({
            firstName,
            lastName,
            username,
            password: hash,
            email,
            role,
          }).then(((newUser) => {
            const jwtAuthToken = jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60),
              data: {
                userId: newUser._id,
                username: newUser.username,
              },
            }, process.env.JWT_SECRET);
            res.cookie('jwtAuthToken', jwtAuthToken, {
              secure: process.env.NODE_ENV === 'production',
              signed: true,
            });
            res.json({ status: 'success', jwt: jwtAuthToken });
          })).catch(err => res.send(err));
        });
      });
    }
    res.send('User already exists!');
  }).catch(next));

authRouter.post('/sign-in', (req, res, next) => User.findOne({ username: req.body.username })
  .then((user) => {
    if (user) {
      return bcrypt.compare(req.body.password, user.password, (err, valid) => {
        if (err || !valid) {
          res.send('Password is not correct.');
        }
        const jwtAuthToken = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          data: {
            userId: user._id,
            username: user.username,
          },
        }, process.env.JWT_SECRET);
        res.cookie('jwtAuthToken', jwtAuthToken, {
          secure: process.env.NODE_ENV === 'production',
          signed: true,
        });
        res.send({ status: 'success ' });
      });
    }
    res.send({ error: 'Not a user. ' });
  }));

module.exports = authRouter;
