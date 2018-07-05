const express    = require("express");
const puppeteer  = require('puppeteer');
const mongoose   = require("mongoose");
const bodyParser = require("body-parser");
require("./models/Repo");

mongoose.connect("mongodb://username:password@ds247499.mlab.com:47499/repo_checker")

const app = express();

require("./routes/reporterRoutes")(app);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
