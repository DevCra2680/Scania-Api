
const CryptoJS = require("crypto-js");
var fs = require('fs');
const path = require("path");
var sprLib = require("sprestlib");



let  secretKey = 'n6UCf9T_fw9WM5qmfjcxUP_fDiLqhYFM3lAwj2T_4aC15-GcJ1Q_rKLJQ9PXAPqg1rWw8-ZuJKPo7MnVsTY7cA'
let challenge = 'x48LvS8Xsjyh0xG_ljXwJWHk-pVXXWRMrekwLQQXJ9k'

var challengeResponse = CreateChallengeResponse(secretKey, challenge);
console.log(challengeResponse)

fs.writeFile("C:\Users\dev\Constructora Rizek & Asoc, srl\DevSharePoint - Documents\ScaniaAPI\challengeResponse.txt", challengeResponse, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("C:\Users\dev\Constructora Rizek & Asoc, srl\DevSharePoint - Documents\ScaniaAPI\challengeResponse.txt", "utf8"));
    }
})



function CreateChallengeResponse(secretKey, challenge) 
{
 var secretKeyArr = base64url_decode(secretKey);
 var challengeArr = base64url_decode(challenge);
 
 var challengeResponse = CryptoJS.HmacSHA256(challengeArr, secretKeyArr);
 return base64url_encode(challengeResponse);
}

function base64url_encode(arg)
{
 var s = CryptoJS.enc.Base64.stringify(arg);
 s = s.split('=')[0];
 s = s.replace(/\+/g, '-');
 s = s.replace(/\//g, '_');
 return s;
}

function base64url_decode(arg)
{
 var s = arg;
 s = s.replace(/-/g, '+');
 s = s.replace(/_/g, '/');
 switch (s.length % 4) 
  {
   case 0: break;
   case 2: s += "=="; break;
   case 3: s += "="; break;
   default: console.log("Illegal base64url string!");
  }
 return CryptoJS.enc.Base64.parse(s);
}
