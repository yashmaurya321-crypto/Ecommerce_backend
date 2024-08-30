const WishList = require("../model/WishList")
const User = require("../model/User")
const Product = require("../model/Products")

const addWishList = async (req, res) => {
    try{
 const {userId, productId} = req.body
 const user = await WishList.findOne({user : userId})
if(!user){
    return res.status(404).json({message:"User not found"})
}
  user.products.push(productId)
  await user.save()
  res.status(200).json({message:"Product added to wish list"})
    }catch(err){
res.status(500).json({message:err.message})
    }
}

const getWishList = async (req, res) => {
    try{
        const {userId} = req.params
        const user = await WishList.findOne({user : userId}).populate("products")
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
       
        res.status(200).json({user})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

const removeItem = async (req, res) => {
    try{
        const {userId, productId} = req.body
        const user = await WishList.findOne({user : userId})
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        user.products.pull(productId)
        await user.save()
        res.status(200).json({message:"Product removed from wish list"})
}catch(err){
    res.status(500).json({message:err.message})
}
}

module.exports = {
    addWishList,
    getWishList,
    removeItem
}