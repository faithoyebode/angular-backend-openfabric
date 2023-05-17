const Product = require("../models/Product");

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getAllProducts = async (req, res) => {

    const products = await Product.find({});
    if(products){
        res.json({
            message: "All the products",
            data: products
        });
    }else{
        res.status(404);
        throw new Error ('Products not found');
    }
}


//@desc Create a product
//@route POST /api/products`
//@access Private/Admin
const createProduct = async (req, res) => {
    const {
        name,
        price,
        image,
    } = req.body;

    const product = new Product({
        name,
        price,
        image
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

//@desc Update a product
//@route PUT /api/products/:id
//@access Private/Admin
const updateProduct = async (req, res) => {
    const {
        name,
        price,
        image,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if(product){
        product.name = name;
        product.price = price;
        product.image = image;

        const updatedProduct = await product.save();
        res.status(201).json(updatedProduct);
    }else{
        res.status(404);
        throw new Error('Product not found');
    }

};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct
}