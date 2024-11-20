// npx nodemon \.script.js

// Steps to configure ejs
// 1 : npm i ejs
// 2: app.set("view engine", "ejs");
// 3 : Ek views folder bnao ans usme ejs files bnao
// send ki jgh render kro

const express = require('express');
const port=3000;

const app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res) {
  res.render("index")
});

app.listen(port, function() {
  console.log('Server is running on http://localhost:3000');
});