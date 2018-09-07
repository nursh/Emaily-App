const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
require('dotenv').config();


const User = mongoose.model('users'); 
// Don't require models/User.js because it will be loaded in multiple times: best practise

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
})

const googleCredentials = {
  clientID: process.env.googleClientID,
  clientSecret: process.env.googleClientSecret,
  callbackURL: '/auth/google/callback',
};

const googleCallback = (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then(user => {
      if (user) {
        done(null, user);
      } else {
        new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user))
          .catch(err => console.error(err));
      }
    }).catch(err => console.error(err))

};

passport.use(new GoogleStrategy(googleCredentials, googleCallback));