require("dotenv").config();

const productsRouter = require("./routes/routes/products");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Products API
app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Flipkart Pro Backend is running!"
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(⁠ Server running on port ${PORT} ⁠);
});
