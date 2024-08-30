const express = require("express");
const router = express.Router();
const {addWishList, getWishList, removeItem} = require("../controller/WishListController");
const Auth = require('../controller/AuthController')
router.get("/:userId",Auth, getWishList)
router.post("/",Auth, addWishList)
router.put('/',Auth, removeItem)
module.exports = router;