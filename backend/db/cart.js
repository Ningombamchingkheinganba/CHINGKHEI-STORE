const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    userId: [{type: Schema.Types.ObjectId, ref: "carts"}],
    productsId: Array(string)
});
const Cart = mongoose.model("wishlists", cartSchema);
module.exports = Cart;