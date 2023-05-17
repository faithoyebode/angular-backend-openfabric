const express = require('express');
const {
    getAllProducts,
    createProduct,
    updateProduct
} = require("../controllers/productsController.js");


const router = express.Router();

router.route('/')
    .get(getAllProducts)
    .post(createProduct);


router.route('/:id')
    .put(updateProduct);

module.exports = router;