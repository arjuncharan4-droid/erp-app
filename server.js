const express = require("express");
const app = express();

// ✅ Home route
app.get("/", (req, res) => {
  res.send("ERP Backend Running ✅");
});

// ✅ Dashboard API (this is what you added)
app.get("/dashboard", (req, res) => {
  res.json({
    totalPurchase: 320000,
    totalSales: 445000
  });
});

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
