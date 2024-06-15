const express = require("express");
const {showUserOrders, deleteAllOrders, createOrder, getAllOrders} = require("../controllers/orderController");
const orderRouter = express.Router()

orderRouter.get('/:userid', showUserOrders)
orderRouter.delete('/', deleteAllOrders)
orderRouter.post('/', createOrder)
orderRouter.get('/', getAllOrders)

module.exports = orderRouter