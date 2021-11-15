const express = require("express");
const jwt = require("jsonwebtoken");
var md5 = require("md5");
const productsModel = require("../model/products");
const productTypeModel = require("../model/productsType");
const router = express.Router();
require("dotenv/config");

router.post("/product_names", (req, res) => {
  const product_name = req.body.product_name;
  const company_id = req.body.company_id;
  console.log(req.body)
  // if (product_name)
  //   if (company_id) {
  //     const products = new productsModel({
  //       product_name: product_name,
  //       company_id: company_id,
  //     });
  //     products
  //       .save()
  //       .then((response) => {
  //         res.json({ success: true, message: response });
  //       })
  //       .catch((err) => {
  //         res.json({ success: false, message: err });
  //       });
  //   } else res.json({ success: false, message: "company_id is required." });
  // else res.json({ success: false, message: "product_name is required." });
});

router.post("/product_type", (req, res) => {
  const product_type_name = req.body.product_type_name;
  const company_id = req.body.company_id;
  if (product_type_name)
    if (company_id) {
      const products = new productTypeModel({
        product_type_name: product_type_name,
        company_id: company_id,
      });
      products
        .save()
        .then((response) => {
          res.json({ success: true, message: response });
        })
        .catch((err) => {
          res.json({ success: false, message: err });
        });
    } else res.json({ success: false, message: "company_id is required." });
  else res.json({ success: false, message: "product_type_name is required." });
});
module.exports = router;
