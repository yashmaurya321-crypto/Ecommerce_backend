const express = require("express");
const router = express.Router();
const Auth = require('../controller/AuthController')
const {createUser, loginUser, getUser} = require("../controller/UserController")

router.post("/",createUser)
router.post("/login",loginUser)
router.get("/:id",Auth,getUser)
module.exports = router;