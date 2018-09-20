const stripe = require('stripe')(process.env.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', (req, res) => {
    
  });
}