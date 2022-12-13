import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BASE_URL } from "../constants";
import { useStateContext } from "../contexts/CartProvider";

const Menu = ({ menu }) => {
  const { addProductToCart } = useStateContext();

  return (
    <div className="mx-auto flex h-fit w-[80%] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[420px] md:w-[320px] md:p-10">
      <div className="mx-auto flex h-48 w-48 items-center justify-center md:h-60 md:w-60">
        <img
          src={BASE_URL + "/" + menu.image}
          alt={menu.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{menu.title}</p>
          <p>{menu.price}$</p>
        </div>

        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-wpSecondary hover:bg-wpSecondary/75"
          onClick={() => addProductToCart(menu)}
        >
          <HiOutlineShoppingCart className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
