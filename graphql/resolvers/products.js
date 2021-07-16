const Product = require('../../models/Product');

module.exports = {
    Mutation: {
        async addProduct(
            _,
            {
                productInput: { productName, brand, category, brandType, url, img, price }
            },
        ) {
            const newProduct = new Product({
                productName,
                brand,
                category,
                brandType,
                url,
                img,
                price
            });

            const res = await newProduct.save();

            return {
                ...res._doc,
                id: res._id
            }
        }
    }
}