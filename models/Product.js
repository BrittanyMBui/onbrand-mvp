const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    productName: String,
    brand: String,
    category: String,
    brandType: String,
    color: String,
    url: String,
    img: String,
    price: Number,
    salePrice: Number,
    likeScore: Number,
    liked: Boolean,
    disliked: Boolean,
    description: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('Product', productSchema);