import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600 text-sm">{product.category}</p>
      <p className="text-green-600 font-bold mt-1">₹ {product.price}</p>
      <button
        className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
