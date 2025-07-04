// const products = [
//   {
//     title: "iPhone 14 Pro Max",
//     image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=60",
//     price: 129999,
//     description: "Apple iPhone 14 Pro Max with advanced camera and A16 chip.",
//     category: "Mobile"
//   },
//   {
//     title: "Samsung Galaxy S23 Ultra",
//     image: "https://images.unsplash.com/photo-1679678986579-6fcd453e4067?auto=format&fit=crop&w=600&q=60",
//     price: 119999,
//     description: "Samsung’s flagship with 200MP camera and Snapdragon 8 Gen 2.",
//     category: "Mobile"
//   },
//   {
//     title: "Sony WH-1000XM5",
//     image: "https://images.unsplash.com/photo-1615638880900-3e2f31c155f4?auto=format&fit=crop&w=600&q=60",
//     price: 29999,
//     description: "Noise-cancellation wireless headphones.",
//     category: "Accessories"
//   },
//   {
//     title: "MacBook Air M2",
//     image: "https://images.unsplash.com/photo-1587574293340-ec872a3b5a81?auto=format&fit=crop&w=600&q=60",
//     price: 114999,
//     description: "Apple MacBook Air with M2 chip and Retina display.",
//     category: "Laptop"
//   },
//   {
//     title: "Dell XPS 13",
//     image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=60",
//     price: 99999,
//     description: "Compact, powerful laptop with stunning display.",
//     category: "Laptop"
//   },
//   {
//     title: "iPad Pro 12.9",
//     image: "https://images.unsplash.com/photo-1587829734704-0f121bbf5fdf?auto=format&fit=crop&w=600&q=60",
//     price: 119000,
//     description: "Apple’s iPad Pro with M2 chip and Liquid Retina XDR display.",
//     category: "Tablet"
//   },
//   {
//     title: "Samsung Galaxy Tab S8 Ultra",
//     image: "https://images.unsplash.com/photo-1677442134582-d74e7a205ebc?auto=format&fit=crop&w=600&q=60",
//     price: 108000,
//     description: "Samsung's largest tablet with AMOLED display and S Pen.",
//     category: "Tablet"
//   },
//   {
//     title: "Apple Watch Series 8",
//     image: "https://images.unsplash.com/photo-1603808033192-082d6919d30e?auto=format&fit=crop&w=600&q=60",
//     price: 45999,
//     description: "Health and fitness smartwatch with ECG and blood oxygen.",
//     category: "Smartwatch"
//   },
//   {
//     title: "Samsung Galaxy Watch 5",
//     image: "https://images.unsplash.com/photo-1657870121847-1fcae7d02b5e?auto=format&fit=crop&w=600&q=60",
//     price: 34999,
//     description: "Fitness tracking and Wear OS smartwatch.",
//     category: "Smartwatch"
//   },
//   {
//     title: "OnePlus 11",
//     image: "https://images.unsplash.com/photo-1682685797140-bd58311b1a7b?auto=format&fit=crop&w=600&q=60",
//     price: 61999,
//     description: "Flagship killer with Snapdragon 8 Gen 2 and 100W charging.",
//     category: "Mobile"
//   },
//   {
//     title: "Google Pixel 7 Pro",
//     image: "https://images.unsplash.com/photo-1677442181952-d08e2f5fc0dc?auto=format&fit=crop&w=600&q=60",
//     price: 84999,
//     description: "Pixel camera magic with Tensor G2 chip.",
//     category: "Mobile"
//   },
//   {
//     title: "JBL Charge 5",
//     image: "https://images.unsplash.com/photo-1621905251423-0be8c60b3bb7?auto=format&fit=crop&w=600&q=60",
//     price: 14999,
//     description: "Waterproof portable Bluetooth speaker.",
//     category: "Accessories"
//   },
//   {
//     title: "Logitech MX Master 3S",
//     image: "https://images.unsplash.com/photo-1581089781785-3c1e30d1d9b0?auto=format&fit=crop&w=600&q=60",
//     price: 9999,
//     description: "Advanced ergonomic wireless mouse.",
//     category: "Accessories"
//   },
//   {
//     title: "Apple AirPods Pro (2nd Gen)",
//     image: "https://images.unsplash.com/photo-1586425228933-3e7cfb0b3e90?auto=format&fit=crop&w=600&q=60",
//     price: 26999,
//     description: "Spatial audio and active noise cancellation.",
//     category: "Accessories"
//   },
//   {
//     title: "HP Spectre x360",
//     image: "https://images.unsplash.com/photo-1603791452906-7d1a7f2c4b39?auto=format&fit=crop&w=600&q=60",
//     price: 124999,
//     description: "2-in-1 ultrabook with touchscreen and sleek design.",
//     category: "Laptop"
//   },
//   {
//     title: "ASUS ROG Zephyrus G14",
//     image: "https://images.unsplash.com/photo-1629198786905-c9fbeef6c493?auto=format&fit=crop&w=600&q=60",
//     price: 139999,
//     description: "Compact gaming laptop with Ryzen 9 and RTX 4060.",
//     category: "Laptop"
//   },
//   {
//     title: "Realme Pad X",
//     image: "https://images.unsplash.com/photo-1629198790676-13ff3958f7a5?auto=format&fit=crop&w=600&q=60",
//     price: 24999,
//     description: "Affordable Android tablet with large display.",
//     category: "Tablet"
//   },
//   {
//     title: "BoAt Airdopes 441",
//     image: "https://images.unsplash.com/photo-1631864723917-0b70d876d86d?auto=format&fit=crop&w=600&q=60",
//     price: 2499,
//     description: "True wireless earbuds with long battery life.",
//     category: "Accessories"
//   },
//   {
//     title: "Fitbit Versa 4",
//     image: "https://images.unsplash.com/photo-1587825158295-4f30aa20a4a4?auto=format&fit=crop&w=600&q=60",
//     price: 19999,
//     description: "Fitness-focused smartwatch with sleep tracking.",
//     category: "Smartwatch"
//   },
//   {
//     title: "Noise ColorFit Ultra 2",
//     image: "https://images.unsplash.com/photo-1657787028994-5e6d41c4c0b1?auto=format&fit=crop&w=600&q=60",
//     price: 3499,
//     description: "Affordable smartwatch with AMOLED display.",
//     category: "Smartwatch"
//   },
//   {
//     title: "Lenovo IdeaPad Slim 5",
//     image: "https://images.unsplash.com/photo-1611691549575-56c62640f9e5?auto=format&fit=crop&w=600&q=60",
//     price: 72999,
//     description: "Lightweight laptop for students and professionals.",
//     category: "Laptop"
//   }  
// ];

// module.exports = products;