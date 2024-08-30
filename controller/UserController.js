const User = require('../model/User')
const Cart = require('../model/Cart')
const WishList = require('../model/WishList')
const jwt = require('jsonwebtoken')
const secreatKey = "yash"
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

       
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

      
        const user = await User.create({ name, email, password });

       
        const cart = new Cart({ userId: user._id, products: [] });

        const Wishlist = new WishList({ user: user._id, products: [] });

        await Wishlist.save();
        await cart.save();

       user.wishList = Wishlist._id;
        user.cart = cart._id;
        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

      
        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

       
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
         const token = jwt.sign({ userId: user._id }, secreatKey);
       
        res.status(200).json({ message: "User logged in successfully", data: user, token  });
    } catch (error) {
        // Handle any unexpected errors
        res.status(500).json({ error: 'Server error' });
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);  
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    loginUser,
    getUser
}