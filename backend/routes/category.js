const express = require("express");
const router = express.Router();
const {addCategory, updateCategory, deleteCategory, getCategories, getCategoryById} = require("../handlers/category-handler");

router.post("", async (req, res)=> {
    const category = req.body;
    await addCategory(category);
    res.send({message: "Add Successfully"});
});

router.get("", async (req, res)=> {
    const result = await getCategories();
    res.send(result);
});

router.get("/:id", async (req, res)=> {
    const id = req.params.id;
    const result = await getCategoryById(id);
    res.send(result);
});

router.put("/:id", async (req, res)=> {
    const categoryName = req.body;
    const id = req.params.id;
    await updateCategory(id, categoryName);
    res.send({message: "Update Successfully"});
});

router.delete("/:id", async (req, res)=> {
    const id = req.params.id;
    await deleteCategory(id);
    res.send({message: "Delete Successfully"});
});

module.exports = router;