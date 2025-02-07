const express = require("express");
const app = express();
const cors = require("cors");
const corsOptoins = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptoins));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "banana", "orange"] });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
