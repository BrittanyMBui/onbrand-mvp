const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    name: String,
    brand: String,
    price: Number,
    like: Boolean,
})

module.exports = model('Product', productSchema);