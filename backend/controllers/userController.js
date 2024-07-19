const { db } = require("../db");
const myColl = db.collection("users");
const jwt = require("jsonwebtoken");

async function userAuthorize(req, res) {
  try {
    const { authorization } = await req.headers;
    const decoded = jwt.verify(authorization.split(" ")[1], "my_token_key");

    res.status(200).send(decoded.user_id);
  } catch (e) {
    console.log(e);
    res.status(401).send("Unauthorized");
  }
}

async function createUser(req, res) {
  try {
    const { phone } = await req.body;
    const isUser = await myColl.findOne({ phone });
    const user = isUser || (await myColl.insertOne({ phone }));
    user.token = jwt.sign({ user_id: user._id }, "my_token_key", {
      expiresIn: "2h",
    });
    res.send(user);
  } catch (e) {
    console.log(e);
  }
}

async function getUsers(req, res) {
  const userList = await myColl.find().toArray();
  res.send(userList);
}

module.exports = {
  createUser,
  getUsers,
  userAuthorize,
};
