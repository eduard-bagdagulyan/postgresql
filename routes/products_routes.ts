import express from 'express';
import {getProducts, newProduct, getProductById, deleteProduct, updateProduct} from '../controllers/products_controllers';

const router = express.Router();

router.get('/products', getProducts)

router.get('/products/:id', getProductById)

router.post('/products', newProduct)

router.delete('/products/:id', deleteProduct)

router.patch('/products/:id', updateProduct)

export default router;