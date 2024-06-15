const express = require("express");
const {getCategory} = require("../controllers/categoryController");
const categoryRouter = express.Router()

categoryRouter.get('/:category/:order', getCategory)

module.exports = categoryRouter