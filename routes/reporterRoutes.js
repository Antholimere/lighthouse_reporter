const mongoose = require("mongoose");

module.exports = app => {
  app.post("/api/lighthouse_report", async (req, res) => {
    let url

    url = req.query.url;

    console.log(url)
  })
}
