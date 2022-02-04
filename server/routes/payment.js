const express = require('express');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const calculateTotal = require('../helpers/helper');

const router = express.Router();

router.post('/secret', async (req, res) => {
  const { products, email } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      // Always decide how much to charge on the server side, a trusted environment, as opposed to the client. This prevents malicious customers from being able to choose their own prices.
      amount: calculateTotal(products) * 100 + 3900, 
      currency: 'sek',
      payment_method_types: ['card'],
      receipt_email: email, 
      metadata: {
       
        integration_check: 'accept_a_payment',
        order_id: '6735'
      }
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  }
});

router.post('/webhook', (req, res) => {
  let event;

  const signature = req.headers['stripe-signature'];

  try {
   
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      signature,
      
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`);
    return res.status(400);
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      console.log('PaymentIntent was successful!');
      break;
    case 'payment_intent.created':
      console.log('PaymentIntent was created!');
      break;
    case 'payment_method.attached':
      console.log('PaymentMethod was attached to a Customer!');
      break;
    case 'payment_method.created':
      console.log('PaymentMethod was created!');
      break;
    case 'charge.succeeded':
      console.log('Charge succeeded!');
      break;
    case 'payment_intent.payment_failed':
      console.log('Payment failed!');
      return res.status(400).end();
    default:
      return res.status(400).end();
  }
  return res.status(200).json({ received: true });
});

module.exports = router;
