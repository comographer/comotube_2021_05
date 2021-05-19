import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const login = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", login);

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

// app.use lets you create global middlewares
// app.use should be placed before app.get

// morgan is request logger middleware for Node.js
// morgan("dev") get METHOD / PATH / STATUS CODE / RESPONSE TIME

// router = mini application ex) /videos/watch/275938
