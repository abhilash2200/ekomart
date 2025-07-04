const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, admin } = require('../middleware/authMiddleware'); // yeh import sahi hona chahiye

// GET /api/products - public
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// POST /api/products - admin only
router.post('/', protect, admin, async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
});

// PUT /api/products/:id - admin only
router.put('/:id', protect, admin, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE /api/products/:id - admin only
router.delete('/:id', protect, admin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

module.exports = router;
