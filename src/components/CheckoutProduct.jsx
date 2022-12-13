import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useStateContext } from "../contexts/CartProvider";
import { BASE_URL } from "../constants";

const CheckoutProduct = ({ items, amount }) => {
  const { decreaseProductFromCart, addProductToCart } = useStateContext();
  const handleRemove = () => {
    decreaseProductFromCart(items._id);
  };

  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row">
      <div className="relative h-44 w-44">
        <img
          src={BASE_URL + "/" + items.image}
          alt={items.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col items-center gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items.title}</h4>
            <div className="flex items-center gap-x-1">
              <p className="font-semibold">{amount}</p>
              <div className="space-y-1">
                <HiChevronUp
                  className="h-6 w-6 cursor-pointer text-blue-500 hover:bg-white/20"
                  onClick={() => addProductToCart(items)}
                />
                <HiChevronDown
                  className="h-6 w-6 cursor-pointer text-blue-500 hover:bg-white/20"
                  onClick={() => decreaseProductFromCart(items._id)}
                />
              </div>
            </div>
          </div>

          <p>
            Show product details
            <HiChevronDown className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            {items.price * amount}$
          </h4>
          <button
            onClick={handleRemove}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
