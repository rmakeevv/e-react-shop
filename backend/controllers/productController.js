const { db } = require("../db");
const { ObjectId } = require("mongodb");
const myColl = db.collection("products");

async function addProduct(req, res) {
  try {
    const data = await req.body;
    const result = await myColl.insertOne(data);
    res.send("added");
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (e) {
    console.warn(e.message);
  }
}

async function getProducts(req, res) {
  const result = await myColl.find();
  const data = await result.toArray();
  res.send(data).status(200);
}

async function deleteProducts(req, res) {
  await myColl.deleteMany();
  res.sendStatus(200);
}

async function getOneProduct(req, res) {
  try {
    const { _id } = await req.params;
    const query = { _id: new ObjectId(_id) };
    const product = await myColl.findOne(query);
    if (!product) res.status(404).send("Product not found");
    else res.send(product);
  } catch (e) {
    console.warn(e.message);
  }
}

module.exports = { addProduct, getProducts, deleteProducts, getOneProduct };
