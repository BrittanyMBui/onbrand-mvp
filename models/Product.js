const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    productName: String,
    brand: String,
    category: String,
    brandType: String,
    url: String,
    img: String,
    price: Number,
    like: Boolean,
    description: String,
})

module.exports = model('Product', productSchema);