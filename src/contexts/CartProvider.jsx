import { createContext, useContext, useState } from "react";

const stateContext = createContext({
  cart: [],
  totalAmountCart: 0,
  decreaseProductFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalAmountCart = cart.reduce(
    (total, product) => total + product.amount,
    0
  );

  const addProductToCart = (product) => {
    const existIndex = cart.findIndex((p) => p.product._id === product._id);

    if (existIndex > -1) {
      setCart((prev) =>
        prev.map((p, idx) =>
          idx === existIndex ? { ...p, amount: p.amount + 1 } : p
        )
      );
    } else {
      setCart((prev) => [...prev, { product, amount: 1 }]);
    }
  };

  const decreaseProductFromCart = (id) => {
    const existIndex = cart.findIndex((p) => p.product._id === id);

    if (existIndex > -1 && cart[existIndex].amount > 1) {
      setCart((prev) =>
        prev.map((p, idx) =>
          idx === existIndex ? { ...p, amount: p.amount - 1 } : p
        )
      );
    } else {
      setCart((prev) => prev.filter((p) => p.product._id !== id));
    }
  };

  return (
    <stateContext.Provider
      value={{
        cart,
        addProductToCart,
        totalAmountCart,
        decreaseProductFromCart,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
