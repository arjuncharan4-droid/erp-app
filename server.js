const express = require("express");
const app = express();

// Home route (important)
app.get("/", (req, res) => {
  res.send("ERP Backend Running ✅");
});

// Dashboard API
app.get("/dashboard", (req, res) => {
  res.json({
    totalPurchase: 320000,
    totalSales: 445000
  });
});

// Server start (VERY IMPORTANT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
