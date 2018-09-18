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
  proxy: true,
};

const googleCallback = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id })
  if (existingUser) {
    return done(null, existingUser);
  } 
  const user = await new User({ googleId: profile.id }).save()
  done(null, user);
};

passport.use(new GoogleStrategy(googleCredentials, googleCallback));