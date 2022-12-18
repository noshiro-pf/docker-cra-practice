const express = require("express");
const app = express();

app.get("/api/users", function (req, res) {
  res.set({ "Access-Control-Allow-Origin": "http://localhost:3000" });

  res.json([
    {
      id: 1,
      name: "maeda",
    },
    {
      id: 2,
      name: "takada",
    },
    {
      id: 3,
      name: "noshiro",
    },
  ]);
});

app.listen(9999);
