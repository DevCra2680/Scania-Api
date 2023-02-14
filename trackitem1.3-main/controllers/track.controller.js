const express = require("express");
const Post = require("../models/track.model");
const fetch = require("node-fetch");

const router = express.Router();

async function insertAsignmentForm(req, res) {
  const userData = req.body.id;

  const parse = JSON.parse(JSON.stringify(userData));

  let secretKey =
    "n6UCf9T_fw9WM5qmfjcxUP_fDiLqhYFM3lAwj2T_4aC15-GcJ1Q_rKLJQ9PXAPqg1rWw8-ZuJKPo7MnVsTY7cA";
  let challenge = parse;
  var challengeResponse = Post.CreateChallengeResponse(secretKey, challenge);
  console.log(challengeResponse);

  res.json(challengeResponse);
}

module.exports = {
  insertAsignmentForm: insertAsignmentForm,
};
