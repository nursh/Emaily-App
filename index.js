const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const ms = require('ms');
const passport = require('passport');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;  
const app = express();


require('./models/User');
require('./models/Survey');
require('./services/passport'); // we are not exporting anything, just need execution

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: ms('2 days'),
  keys: [process.env.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(process.env.mongoURI, {useNewUrlParser: true});
require('./routes/authRoutes')(app); // getting function export that requires app as argument
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
app.listen(PORT);
