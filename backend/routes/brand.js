const express = require("express");
const router = express.Router();
const {addBrand, updateBrand, deleteBrand, getBrandById, getBrands} = require("../handlers/brand-handler");

router.post("", async(req, res)=>{
    const brand = req.body;
    await addBrand(brand);
    res.send({message: "Add Successfully"});
})

router.put("/:id", async(req, res)=> {
    const brand = req.body;
    const id = req.params.id;
    await updateBrand(id, brand);
    res.send({message: "Update Successfullyu"});
})

router.delete("/:id", async(req, res)=> {
    const id = req.params.id;
    await deleteBrand(id);
    res.send({message: "Delete Successfully"});
})

router.get("/:id", async(req,res)=> {
    const id = req.params.id;
    const brand = await getBrandById(id);
    res.send(brand);
})

router.get("", async(req,res)=> {
    const brands = await getBrands();
    res.send(brands);
})

module.exports = router;