import express from 'express';
const router = express.Router();
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import Order from '../models/orderModel.js';

app.get('/', async (req, res) => {
    const products = await Product.find({})
  res.json(products);
});
app.get('/:id', (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

export default router;