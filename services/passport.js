const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const googleCredentials = {
  clientID: process.env.googleClientID,
  clientSecret: process.env.googleClientSecret,
  callbackURL: '/auth/google/callback',
};

const googleCallback = (accessToken, refreshToken, profile, done) => {
  console.log("accessToken: ", accessToken);
  console.log("refreshToken: ", refreshToken);
  console.log("profile: ", profile);
};

passport.use(new GoogleStrategy(googleCredentials, googleCallback));