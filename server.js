const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require ("mysql")
// import "./Login.css";
const connection = mysql.createConnection({
  host     : 'd6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'ltlcsxmg1zv8g265',
  password : 'a6wzvqyxjh28sz6d',
  database : 'eulxzrhehibx9fxj'
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