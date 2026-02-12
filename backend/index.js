const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 5001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
