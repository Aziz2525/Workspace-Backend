const express = require("express");
const companyModel = require("../model/companys");
const router = express.Router();
require("dotenv/config");

router.post("/add", (req, res) => {
  const company_name = req.body.company_name;
  if (company_name) {
    const companys = new companyModel({
      company_name: company_name,
    });
    companys
      .save()
      .then((response) => {
        res.json({ success: true, message: response });
      })
      .catch((err) => {
        res.json({ success: false, message: err });
      });
  } else res.json({ success: false, message: "company_name is required." });
});

module.exports = router;
