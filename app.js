const express = require("express");
const cors = require("cors");
const getUsers = require("./get/users");
const getAllData = require("./get/allData");
const postUsers = require("./post/users");
const postProducts = require("./post/products");
const postCompanys = require("./post/companys");
const authenticateToken = require("./authenticateToken");
const app = express();
require("dotenv/config");

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use("/get/users", authenticateToken, getUsers);
app.use("/get/allData", authenticateToken, getAllData);
app.use("/post/products", authenticateToken, postProducts);
app.use("/post/companys", authenticateToken, postCompanys);
app.use("/post/users", postUsers);

app.listen(process.env.PORT, () =>
  console.log(process.env.PORT + " dinleniyor...")
);
