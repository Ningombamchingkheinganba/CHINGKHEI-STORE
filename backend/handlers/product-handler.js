const Product = require("./../db/product");

async function addProduct(product) {
    const productData = product.product;
    let newProduct = new Product({
        ...productData
    })
    await newProduct.save();
    return;
}

async function getProducts() {
    const products = await Product.find();
    return products;
}

async function getProductById(id) {
    const product = await Product.findOne({_id: id});
    return product;
}

async function updateProduct(id, product) {
    await Product.findOneAndUpdate({_id: id}, product.product);
    return;
}

async function deleteProduct(id) {
    await Product.findByIdAndDelete({_id: id});
    return;
}

async function getNewProducts() {
    const products = await Product.find({isNewProduct: true});
    return products;
}

async function getFeatureProducts() {
    const product = await Product.find({isFeature: true});
    return product;
}

module.exports = {addProduct, updateProduct, deleteProduct, getProducts, getProductById, getNewProducts,getFeatureProducts};