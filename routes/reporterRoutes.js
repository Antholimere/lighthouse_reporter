const mongoose = require("mongoose");
const puppeteer  = require('puppeteer');
const Repo = mongoose.model("RepoSchema");

module.exports = app => {
  app.post("/api/lighthouse_report", async (req, res) => {
    let url

    url = req.query.url;

    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto(repo_url);
    // content_index = await page.content();
    // content_array = content_index.split(" ");
    // await browser.close();

    // for(const line in content_array) {
    //   console.log(content_array[line])
    // }

    // repo.validated = true;
    // repo.save();

    // res.send(repo);
  })
}
