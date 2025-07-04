import React from 'react';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi'; // Shopping cart icon

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col group w-[300px]">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-xl text-green-600 font-bold mt-1">₹ {product.price.toLocaleString()}</p>

        <button
          className="mt-auto flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        >
          <FiShoppingCart className="text-lg" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
