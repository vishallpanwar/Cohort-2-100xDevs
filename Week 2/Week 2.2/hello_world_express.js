// Ye template hai to print hello world in express

// const express = require('express');
// const port=3000;

// const app = express();

// app.get('/', function(req, res) {
//   res.send('Hello, World!')
// });

// app.listen(port, function() {
//   console.log('Server is running on http://localhost:3000');
// });





// Importing Express.js
const express = require('express');
const port=3000;

// Creating an instance of Express
const app = express();

// Middleware eke aisa function hai jo hr route se phle chlta hai and. Saare routes me se koisa bhi route chle pr usse phle middleware hi chlta hai
// iske sath dikkt ye hai ki control ek baar bhi kisi middleware pr gya to agle route pr jane ke liye usko push krna pdega "we used next()"
// We can have more than one middleware
app.use(function(req, res, next){
  console.log("Middleware working");
  next();
})

// Defining a route for the root URL, ab ye rout hai, hm multiple routes bhi bna skte hai like routes for every pages
app.get('/', function(req, res) {
  res.send('Hello, World!')
});

app.get('/profile', function(req, res) {
  res.send('Hello from profile!')
});

app.get('/home', function(req, res) {
  res.send('Hello from home!')
});




// Dynamic routing : if we want ki hm alg alg persons ki profiles ke liye routes bnye to esa single single krke nhi bnyenge, it will make code complex and readability
// bhi kam hogi, instead we will take help of dynamic routing and ek route ki helps se hi we can navigate through different routes
app.get("/profile/:username", function(req, res) {
  res.send(`Hello from ${req.params.username}`); 
});



// Starting the server on port 3000
app.listen(port, function() {
  console.log('Server is running on http://localhost:3000');
});
