const express  = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('../controllers/product.controller.js')

router.get('/', getProducts);
router.post('/', createProduct);
router.delete('/:id',deleteProduct)
router.put('/:id',updateProduct)
router.get('/:id',getProductById)


module.exports = router;