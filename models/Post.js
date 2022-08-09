const express = require("express");

const adminRouter = express.Router();
const { MongoClient } = require("mongodb");
const custData = require("./data.json");

//connecting to momgoDB and inseting data into mongoDB

adminRouter.route("/").get((req, res) => {
  const url =
    "mongodb+srv://custDetails:1MsSQnTEEbigzaaY@cluster0.noskj3r.mongodb.net/?retryWrites=true&w=majority";
  const dbName = "customerDetails";
  (async function mongo() {
    let client;
    try {
      //connting to mongoDB
      client = await MongoClient.connect(url);
      console.log("connected to mongoDB");
      const db = client.db(dbName);
      //Inseting Data
      const response = await db.collection("custData").insertMany(custData);
      res.json(response);
    } catch (error) {
      console.log(error.stack);
    }
    client.close();
  })();
});

module.exports = adminRouter;
