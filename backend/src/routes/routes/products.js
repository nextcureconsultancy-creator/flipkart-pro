const express = require("express");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S25",
    price: 79999,
    category: "Mobiles",
    image: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    name: "Apple iPhone 16",
    price: 69999,
    category: "Mobiles",
    image: "https://via.placeholder.com/300"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 29999,
    category: "Electronics",
    image: "https://via.placeholder.com/300"
  }
];

// Get all products
router.get("/", (req, res) => {
  res.json(products);
});

// Get product by ID
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

module.exports = router;
