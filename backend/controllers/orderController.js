const { db } = require("../db");
const myColl = db.collection("orders");
const jwt = require("jsonwebtoken");

async function createOrder(req, res) {
    try {
        const data = await req.body;
        const result = await myColl.insertOne(data);
        res.send(result.insertedId);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch (e) {
        console.warn(e.message);
    }
}

async function showUserOrders(req, res) {
    try {
        const { userid } = await req.params;
        const { authorization } = await req.headers;
        await jwt.verify(authorization.split(" ")[1], "my_token_key");
        const result = await myColl.find({ userId: userid });
        const data = await result.toArray();
        res.send(data);
    } catch (e) {
        console.warn(e.message);
        res.status(401).send("Invalid token");
    }
}

async function getAllOrders(req, res) {
    try {
        const result = await myColl.find();
        const data = await result.toArray();
        res.send(data);
    } catch (e) {
        console.warn(e.message);
    }
}

async function deleteAllOrders(req, res) {
    try {
        await myColl.deleteMany();
        res.sendStatus(200);
    } catch (e) {
        console.warn(e.message);
    }
}

module.exports = {
    createOrder,
    showUserOrders,
    getAllOrders,
    deleteAllOrders,
};
