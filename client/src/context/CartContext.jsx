import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const exist = state.find((p) => p._id === item._id);
      if (exist) {
        return state.map((p) =>
          p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...state, { ...item, quantity: 1 }];
      }

    case "INCREMENT":
      return state.map((item) =>
        item._id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "DECREMENT":
      return state.map((item) =>
        item._id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "REMOVE":
      return state.filter((item) => item._id !== action.payload);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);