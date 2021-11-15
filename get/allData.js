const express = require("express");
const companysModel = require("../model/companys");
const router = express.Router();
router.get("/", (req, res) => {
  companysModel
    .aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "company_id",
          as: "products",
        }
      },{
        $lookup: {
          from: "producttypes",
          localField: "_id",
          foreignField: "company_id",
          as: "products_type",
        }
      }
    ])
    .exec((err, result) => {
      if (err) {
        res.json({ success: false, message: err });
      }
      if (result) {
        res.json({ success: true, docs: result });
      }
    });
});

module.exports = router;
