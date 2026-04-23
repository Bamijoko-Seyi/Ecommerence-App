import { placeOrder, placeOrderPaypal, placeOrderPaypal, allOrders, useOrders, updateStatus, placeOrderStripe } from "../controllers/orderController"
import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import authUser from "../middleware/auth"

const orderRouter = express.Router()

// All routs for admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

// All routes for payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/paypal',authUser,placeOrderPaypal)

// Routes for user features
orderRouter.post('/userorders',authUser,useOrders)

export default orderRouter