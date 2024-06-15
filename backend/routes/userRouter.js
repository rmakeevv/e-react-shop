const express = require("express");
const {getUsers, createUser, userAuthorize} = require("../controllers/userController");
const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.get('/auth', userAuthorize)

module.exports = userRouter