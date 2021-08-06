const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { UserInputError } = require('apollo-server');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators')
const User = require('../../models/User');

function generateToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
    }, process.env.SECRET_KEY, { expiresIn: '2d' });
};

module.exports = {
    Mutation: {
        // USER LOGIN
        async login(_, { email, password }) {
            const {errors, valid} = validateLoginInput(email, password)

            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            const user = await User.findOne({ email });

            if (!user) {
                errors.general = 'User not found';
                throw new UserInputError('User not found', { errors })
            }
            
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = 'Invalid Credentials';
                throw new UserInputError('Invalid Credentials', { errors })
            }

            const token = generateToken(user)

            return {
                ...user._doc,
                id: user._id,
                token
            };

        },
        // USER REGISTER
        async register(
            _, 
            { 
                registerInput : { name, email, password, confirmPassword, pantSize, pantFit, spend, shirtSize }
            }, 
            ) {

           const { valid, errors } = validateRegisterInput(
               name, 
               email, 
               password, 
               confirmPassword
            );

           if (!valid) {
               throw new UserInputError('Errors', { errors })
           }

           const user = await User.findOne({ email });

           if (user) {
                throw new UserInputError('Email in use', {
                    errors: {
                        email: 'Email in use'
                    }
                })
           }

           password = await bcrypt.hash(password, 12);

           const newUser = new User({
               email,
               name,
               password,
               pantSize,
               shirtSize,
               pantFit,
               spend
           });

           const res = await newUser.save();

           const token = generateToken(res)

           return {
               ...res._doc,
               id: res._id,
               token
           }
        }
    }
}