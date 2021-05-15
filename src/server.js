import express from "express";

const PORT = 5000;

const app = express();

const handleListening = () =>
  console.log(`Server listening on port ${PORT} 🚀`);

app.listen(PORT, handleListening);

// app.listen(port, handler)
