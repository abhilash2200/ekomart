const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const products = require('./data/products');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => Product.deleteMany())
  .then(() => Product.insertMany(products))
  .then(() => {
    console.log("✅ Products Seeded");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  });
