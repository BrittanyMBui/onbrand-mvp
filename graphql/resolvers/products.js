const Product = require('../../models/Product');
const checkAuth = require('../../util/check-auth');

module.exports = {
    Mutation: {
        async addProduct(
            _, 
            // context,
            {
                productInput: { productName, brand, category, brandType, url, img, price }
            },
        ) {
            // const user = checkAuth(context);

            const newProduct = new Product({
                // user: user.id,
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