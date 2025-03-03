const Brand = require("./../db/brand");

async function addBrand(brand) {
    const result = new Brand({
        name : brand.name
    })
    result.save();
    return;
}

async function getBrands() {
    const brands = await Brand.find();
    return brands;
}

async function getBrandById(id) {
    const brand = await Brand.findOne({_id: id});
    return brand;
}

async function updateBrand(id, brandName) {
    await Brand.findOneAndUpdate({_id: id}, brandName);
    return;
}

async function deleteBrand(id) {
    await Brand.findByIdAndDelete({_id: id});
    return;
}

module.exports = {addBrand, updateBrand, deleteBrand, getBrands, getBrandById};