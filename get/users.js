const express = require("express");
const usersModel = require("../model/users");
const router = express.Router();

router.get("/", (req, res) => {
  usersModel.find({}, (err, docs) => {
    if (err) res.status(404).send();
    res.json(docs);
  });
});

module.exports = router;
