const express = require('express');
require('./services/passport'); // we are not exporting anything, just need execution

const PORT = process.env.PORT || 5000;  
const app = express();
require('.routes/authRoutes')(app); // getting function export that requires app as argument




app.listen(PORT);
