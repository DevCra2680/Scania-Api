const CryptoJS = require("crypto-js");

function CreateChallengeResponse(secretKey, challenge) {
  var secretKeyArr = base64url_decode(secretKey);
  var challengeArr = base64url_decode(challenge);

  var challengeResponse = CryptoJS.HmacSHA256(challengeArr, secretKeyArr);
  return base64url_encode(challengeResponse);
}

function base64url_encode(arg) {
  var s = CryptoJS.enc.Base64.stringify(arg);
  s = s.split("=")[0];
  s = s.replace(/\+/g, "-");
  s = s.replace(/\//g, "_");
  return s;
}

function base64url_decode(arg) {
  var s = arg;
  s = s.replace(/-/g, "+");
  s = s.replace(/_/g, "/");
  switch (s.length % 4) {
    case 0:
      break;
    case 2:
      s += "==";
      break;
    case 3:
      s += "=";
      break;
    default:
      console.log("Illegal base64url string!");
  }
  return CryptoJS.enc.Base64.parse(s);
}

module.exports = {
  CreateChallengeResponse: CreateChallengeResponse,
};
