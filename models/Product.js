const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    name: String,
    brand: String,
    price: Number,
    like: Boolean,
    description: String,
})

module.exports = model('Product', productSchema);