const express = require('express');
const mongoose = require('mongoose');
require('./services/passport'); // we are not exporting anything, just need execution
require('./models/User');


const PORT = process.env.PORT || 5000;  
const app = express();

mongoose.connect(process.env.mongoURI);

require('./routes/authRoutes')(app); // getting function export that requires app as argument




app.listen(PORT);
