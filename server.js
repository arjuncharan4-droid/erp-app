app.get("/dashboard", (req, res) => {
  res.json({
    totalPurchase: 320000,
    totalSales: 445000
  });
});
