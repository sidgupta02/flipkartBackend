const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.post('/add', productController.addProduct);
router.get('/:id', productController.getProductById);
router.patch('/:id', productController.partialUpdateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
