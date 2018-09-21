const stripe = require('stripe')(process.env.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: '$5 for 5 credits',
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
}