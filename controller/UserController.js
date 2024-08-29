const User = require('../model/User')

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        const user = await User.create({ name, email, password })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Find the user by email and password
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Respond with success if credentials are valid
        res.status(200).json({ message: "User logged in successfully", data: user });
    } catch (error) {
        // Handle any unexpected errors
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports = {
    createUser,
    loginUser
}