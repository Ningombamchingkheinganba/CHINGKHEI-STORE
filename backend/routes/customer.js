const express = require("express");
const router = express.Router();
const {getNewProducts, getFeatureProducts}= require("../handlers/product-handler");

router.get("/new-products", async(req, res)=> {
    const products = await getNewProducts();
    res.send(products);
});

router.get("/feature-products", async(req, res)=> {
    const products = await getFeatureProducts();
    res.send(products);
});

module.exports = router;
