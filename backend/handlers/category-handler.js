const Category = require("./../db/category");

async function addCategory(category) {
    const newCategory = new Category({
        name : category.name
    })
    newCategory.save();
    return;
}

async function getCategories() {
    const categories = await Category.find();
    return categories;
}

async function getCategoryById(id) {
    const category = await Category.findOne({_id: id});
    return category;
}

async function updateCategory(id, categoryName) {
    await Category.findOneAndUpdate({_id: id}, categoryName);
    return;
}

async function deleteCategory(id) {
    await Category.findByIdAndDelete({_id: id});
    return;
}

module.exports = {addCategory, updateCategory, deleteCategory, getCategories, getCategoryById};