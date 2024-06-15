const express = require("express");
const {getProducts, addProduct, deleteProducts, getOneProduct} = require("../controllers/productController");
const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.get('/:_id', getOneProduct)
productRouter.post('/', addProduct)
productRouter.delete('/', deleteProducts)

module.exports = productRouter