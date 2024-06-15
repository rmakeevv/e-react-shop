const express = require('express')
const orderRouter = require('./orderRouter')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const router = express.Router()

router.use('/orders', orderRouter)
router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/categories', categoryRouter)

module.exports = router