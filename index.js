const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

// middleware

// middleware is used because we are not allowed to pass json form nodejs by default. if middleware not used it shows are values to be posted as undefined.
app.use(express.json());
// middleware to add form data
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from Node api");
});

mongoose
  .connect(
    "mongodb+srv://pranalinage20:rjsSKpzwI9t027xT@cluster0.u7eng.mongodb.net/NodeApi?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database!");
    try {
      app.listen(3000, () => {
        console.log("server isss running on port 3000");
      });
    } catch {
      console.log(error);
    }
  })
  .catch(() => {
    console.log("connection failed!");
  });
