const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTEaMEMyPm478s0x331ijIxjul4RYqsQlu5Mpj2tEI8S0pn7m6ZD0PQIFDINmAzj98W7PzwLIdXP3KFd5lC0iml00fmc4v96g"
);

//API

//App config

const app = express();

//-middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: "Test description"
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});
// Listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-6d9cd/us-central1/api
