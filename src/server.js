import express from "express";

const PORT = 5000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to : ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
  return res.send("Login here:");
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

// app.listen(port, handler)

// GET is an HTTP method GET me the web page

// HTTP is how servers communicate with each other

// req and res object are given to us by express

// res.end() kills the request

// res.send() shows message

// all controllers are middewares and they have three arguments : req, res, next
