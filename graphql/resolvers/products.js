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
    },
    Query: {
        async getProducts() {
            try {
                const products = await Product.find();
                return products;
            } catch(err) {
                throw new Error(err);
            }
        },
        async getProduct(_, { productId }) {
            try {
                const product = await Product.findById(productId);
                if (product) {
                    return product;
                } else {
                    throw new Error('Product not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}