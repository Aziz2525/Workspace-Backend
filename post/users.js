const express = require("express");
const jwt = require("jsonwebtoken");
var md5 = require("md5");
const usersModel = require("../model/users");
const router = express.Router();
require('dotenv/config')

router.post("/add", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const authorty = req.body.authorty;
  if (username)
    if (password)
      if (authorty) {
        const data = new usersModel({
          username,
          password: md5(password),
          authorty,
        });
        usersModel.find({ username }, (err, docs) => {
          if (docs.length > 0) {
            res.json({ success: false, message: "Kullanıcı mevcut." });
          } else {
            data
              .save()
              .then((response) => {
                res.json({ success: true, message: response });
              })
              .catch((err) => {
                res.json({ success: false, message: err });
              });
          }
        });
      } else res.json({ success: false, message: "authorty is required" });
    else res.json({ success: false, message: "password is required" });
  else res.json({ success: false, message: "username is required" });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = md5(req.body.password);
  if (username)
    if (password)
      usersModel.find(
        { $and: [{ username: username }, { password: password }] },
        (err, docs) => {
          if (err) res.json({ success: false, message: err });
          if (docs.length > 0) {
            const user = { name: username };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ success: true, message: docs, accessToken });
          } else
            res.json({
              success: false,
              message: "Kullanıcı adı veya şifre hatalı",
            });
        }
      );
    else res.json({ success: false, message: "password is required." });
  else res.json({ success: false, message: "username is required." });
});

module.exports = router;
