const express = require("express");
const app = express();

const getData = require("./routes/customerDetails");
const data = require("./models/Post");

app.use("/data", data);
app.use("/custdata", getData);
//Testing the server
app.get("/", (req, res) => {
  res.send("Hello!!");
});

app.listen(3000);
