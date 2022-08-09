const express = require("express");

const dataRouter = express.Router();
const { MongoClient, ObjectId } = require("mongodb");
const custData = require("../models/data.json");

//Fetching a single record
dataRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  const url =
    "mongodb+srv://custDetails:1MsSQnTEEbigzaaY@cluster0.noskj3r.mongodb.net/?retryWrites=true&w=majority";
  const dbName = "customerDetails";
  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      console.log("connected to mongoDB");
      const db = client.db(dbName);
      const response = await db
        .collection("custData")
        .findOne({ _id: new ObjectId(id) });
      res.send(` Congratulations ${response.Name} has received a gift`);
    } catch (error) {
      console.log(error.stack);
    }
    client.close();
  })();
});

module.exports = dataRouter;
