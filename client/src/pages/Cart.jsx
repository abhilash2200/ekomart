import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center justify-between border p-4 rounded">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>₹ {item.price} x {item.quantity}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button onClick={() => dispatch({ type: "DECREMENT", payload: item._id })} className="px-2 py-1 bg-gray-300 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch({ type: "INCREMENT", payload: item._id })} className="px-2 py-1 bg-gray-300 rounded">+</button>
                <button onClick={() => dispatch({ type: "REMOVE", payload: item._id })} className="ml-2 px-3 py-1 bg-red-500 text-white rounded">Remove</button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-xl">
            Total: ₹ {total}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
