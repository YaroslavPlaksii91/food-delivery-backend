const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const productsRouter = require("./routes/api/products");
const shopsRouter = require("./routes/api/shops");
const ordersRouter = require("./routes/api/orders");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/shops", shopsRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;