const mongoose = require("mongoose");


const { Schema } = mongoose;

const productSchema = new Schema({
    id: Number, // String is shorthand for {type: String}
    image: String,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isSoldOut: Boolean,
    isActive: Boolean,
    createdAt: String,
    brand: String,
    isNew: Boolean,
    priceUnformatted: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;