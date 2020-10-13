const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const fs = require("fs");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let books = [];
let boks = [];
app.get("/home", function (req, res) {
  console.log("Inside Home Login");
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  console.log("Books : ", JSON.stringify(books));
  res.end(JSON.stringify(books));
});

app.post("/create", function (req, res) {
  const newBook = {
    Amount: req.body.Amount,
    Name: req.body.Name,
    City: req.body.City,
    Country: req.body.Country,
    Address: req.body.Address,
    Postnumber: req.body.Postnumber,
    Brand: req.body.Brand,
    Source_Country: req.body.Country,
  };
  const oldBook = {
    quantity: req.body.quantity,
    price: req.body.price,
    name: req.body.name,
  };
  books.push(newBook);
  boks.push(oldBook);
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw "";
  console.log("Server running on port " + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      const order = {
        tokenId: req.body.token.id,
      };
      boks.push(order);
      fs.writeFileSync("message.json", JSON.stringify(boks), (error) => {
        if (error) {
          throw error;
        }
      });
      res.status(200).send({ success: stripeRes });
    }
  });
});
