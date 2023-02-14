const express = require("express");
const trackItem = require("./routes/track.routes");

const app = express();

app.use(express.static("public")); // (3)
app.use(express.json({}));
app.use(
  express.urlencoded({ extends: false, limit: "50mb", parameterLimit: 50000 })
);
app.use(trackItem);

app.listen(3000);

/* db.connectToDatabase()
  .then(function () {
  })
  .catch(function (err) {
    console.log("Error connecting to database");
    console.log(err);
  });


 */
