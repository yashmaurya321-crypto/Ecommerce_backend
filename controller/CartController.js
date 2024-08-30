const User = require('../model/User')
const Cart = require('../model/Cart')
const Product = require('../model/Products')
const addToCart = async (req, res) => {
    const { productId, quantity, userId } = req.body;

    try {
        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find or create a cart
        let cart = await Cart.findOne({ userId: userId });
        if (!cart) {
            cart = new Cart({ userId: userId, products: [] });
        }

        // Find the product
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if the product already exists in the cart
        const existingProductIndex = cart.products.findIndex(item => item.productId.equals(productId));

        if (existingProductIndex > -1) {
            // Update quantity if the product already exists
            cart.products[existingProductIndex].quantity += quantity;
        } else {
            // Add new product to the cart
            cart.products.push({ productId: productId, quantity: quantity });
        }

        // Save the cart
        await cart.save();

        // Update the user's cart reference
        
        await user.save();

        res.status(200).json({ message: 'Product added to cart', cart: cart });
    } catch (err) {
        res.status(500).json({ message: 'Error adding to cart', error: err.message });
    }
};


const removeFromCart = async (req, res) => {
    const { productId, userId } = req.body;

    try {
       
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const initialLength = cart.products.length;
        cart.products = cart.products.filter(item => item.productId.toString() !== productId);

        if (cart.products.length === initialLength) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

       
        await cart.save();

       
        res.status(200).json({ message: 'Product removed from cart', cart: cart });
    } catch (err) {
        res.status(500).json({ message: 'Error removing from cart', error: err.message });
    }
};


const getCart = async (req, res) => {
    const {userId} = req.params;
    try{
const cart = await Cart.findOne({userId});
if(!cart){
    return res.status(404).json({message: 'Cart not found'});
}
res.status(200).json({message: 'Cart retrieved successfully', Data: cart});
    }catch (err) {
        res.status(500).json({ message: 'Error getting cart', error: err.message });
    }
}
module.exports = {
    addToCart,
    removeFromCart,
    getCart
}