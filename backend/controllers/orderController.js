import userModel from "../models/userModel";

//Function for orders that use the default Method
const placeOrder = async (req,res) => {
    try {

        const { userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed Successfully"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
    
}

//Function for orders that use the Paypal Method
const placeOrderPaypal = async (req,res) => {
    
}

//Function for orders that use the Stripe Method
const placeOrderStripe = async (req,res) => {
    
}

//All orders for the admin panel
const allOrders = async (req,res) => {
    
}

// Update order status for the Admin Panel
const updateStatus = async (req,res) => {

}

// All user orders for the frontend
const userOrders = async (req,res) => {
    try 
}

export {placeOrder, placeOrderPaypal, placeOrderStripe, allOrders, updateStatus, userOrders};