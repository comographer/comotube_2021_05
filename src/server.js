import express from "express";

const PORT = 5000;

const app = express();

const handleHome = () => console.log("Somebody is trying to go home.");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

// app.listen(port, handler)

// GET is an HTTP method GET me the web page

// HTTP is how servers communicate with each other
