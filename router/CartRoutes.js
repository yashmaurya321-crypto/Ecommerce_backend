const express = require("express");
const {addToCart, removeFromCart, getCart} = require("../controller/CartController")
const Auth = require('../controller/AuthController')
const router = express.Router();

router.post("/add-to-cart",Auth, addToCart);
router.post("/remove-from-cart",Auth, removeFromCart);
router.get("/:userId",Auth, getCart);
module.exports = router;
