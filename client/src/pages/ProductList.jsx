import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error loading products', err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p._id} className="bg-white shadow rounded p-4">
          <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{p.title}</h2>
          <p className="text-gray-600">{p.description}</p>
          <p className="font-semibold text-green-600">₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
