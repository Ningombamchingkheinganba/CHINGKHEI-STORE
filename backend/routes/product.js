const express = require("express");
const router = express.Router();
const {addProduct, updateProduct, deleteProduct, getProducts, getProductById} = require("../handlers/product-handler");

router.post("", async(req, res)=>{
    const product = req.body;
    await addProduct(product);
    res.send({message: "Add Successfully"});
})

router.put("/:id", async(req, res)=> {
    const product = req.body;
    const id = req.params.id;
    await updateProduct(id, product);
    res.send({message: "Update Successfullyu"});
})

router.delete("/:id", async(req, res)=> {
    const id = req.params.id;
    await deleteProduct(id);
    res.send({message: "Delete Successfully"});
})

router.get("/:id", async(req,res)=> {
    const id = req.params.id;
    const product = await getProductById(id);
    res.send(product);
})

router.get("", async(req,res)=> {
    const products = await getProducts();
    res.send(products);
})

module.exports = router;