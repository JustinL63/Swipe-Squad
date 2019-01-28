const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");

const mysql = require ("mysql")
// import "./Login.css";
const connection = mysql.createConnection({
  host     : "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user     : 'j4lrk3z16kqfyyn2',
  password : 'e00m1gzuqamy4d1a',
  database : 'skdxdpj8cpvcoe26'
});

connection.connect(function(err){
  (err)? console.log(err): console.log(connection)
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});