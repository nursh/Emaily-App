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
const googleCallback = (accessToken) => {
  console.log(accessToken)
}
passport.use(new GoogleStrategy(googleCredentials, googleCallback));



app.listen(PORT);

