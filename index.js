const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const PORT = process.env.PORT || 5000;


const app = express();

const googleCredentials = {
  clientID: process.env.googleClientID,
  clientSecret: process.env.googleClientSecret,
  callbackURL: '/auth/google/callback',
}
const googleCallback = (accessToken, refreshToken, profile, done) => {
  console.log("accessToken: ", accessToken);
  console.log("refreshToken: ", refreshToken);
  console.log("profile: ", profile);
}
passport.use(new GoogleStrategy(googleCredentials, googleCallback));

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT);
