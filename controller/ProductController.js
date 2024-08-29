const express = require('express');
const Product = require('../model/Products');
const TopProduct = require('../model/TopSold')
const PopularProduct = require('../model/Popular')

const getproducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductByCategory = async (req, res) => {
    const {category} = req.params;
    try {
        const products = await Product.find({category: category});
        res.status(200).json(products);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getTopProducts = async (req, res) => {
    try {
        const topProducts = await TopProduct.find();
        res.status(200).json(topProducts);
    }catch(error) {
        res.status(500).json({ message: error.message });
    }
}


const getPopularProducts = async (req, res) => {
    try {
        const popularProducts = await PopularProduct.find();
        res.status(200).json(popularProducts);
    }catch(error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    getproducts,
    getProductByCategory,
    getTopProducts,
    getPopularProducts
}

