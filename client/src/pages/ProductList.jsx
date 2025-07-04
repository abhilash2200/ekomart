import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiShoppingCart } from 'react-icons/fi';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error loading products', err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden flex flex-col transition duration-300"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{p.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-3 mt-1">{p.description}</p>
              <p className="text-green-600 font-bold text-lg mt-2">₹ {p.price.toLocaleString()}</p>
              <button className="mt-auto flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                <FiShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;