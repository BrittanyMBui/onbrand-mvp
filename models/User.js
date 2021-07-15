const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    createdAt: String,
    pantSize: String,
    pantFit: String,
    shirtSize: String,
    spend: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'products'
        }
    ]
})

module.exports = model('User', userSchema);