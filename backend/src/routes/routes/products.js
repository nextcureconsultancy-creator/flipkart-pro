const express = require("express");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "Sample Product",
    price: 999,
    category: "Electronics",
    image: "https://via.placeholder.com/300"
  }
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
});

