// Mongodb (Database)
// Client Sdk

// --- Mongoose -- (Link)
// Helper functions provide krda hor easy krn lyi.
// models create krn ch help krda validaions

// Nodejs
const mongoose = require("mongoose");
const express = require("express");
const ProductModel = require("./models/product_model.js");

const app = express();

app.use(express.json());

app.post("/products", async function (req, res) {
  const data = req.body;

  if (data.price <= 0) {
    res.status(400).json({ msg: "zero da koi product hunda?" });
  } else {
    await ProductModel.create({
      name: data.name,
      description: data.description,
      price: data.price,
    });

    res.json({ msg: "hello world" });
  }
});

async function init() {
  await mongoose.connect("TEMP_PATH");

  app.listen(6000);
}

init();
