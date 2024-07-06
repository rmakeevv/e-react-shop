const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://root:example@127.0.0.1:27017");
const db = client.db("online-store");

module.exports = { db, client };
