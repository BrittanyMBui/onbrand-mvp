const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    productName: String,
    brand: String,
    category: String,
    brandType: String,
    url: String,
    img: String,
    price: Number,
    liked: Boolean,
    disliked: Boolean,
    description: String,
})

module.exports = model('Product', productSchema);