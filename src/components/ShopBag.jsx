import { HiOutlineShoppingBag } from "react-icons/hi";
import { useStateContext } from "../contexts/CartProvider";
import { Link } from "react-router-dom";

const ShopBag = () => {
  const { totalAmountCart } = useStateContext();
  return (
    <Link to="/checkout">
      <div className="fixed bottom-7 right-7 z-50 flex h-12 w-12 cursor-pointer items-center justify-center    rounded-full bg-gradient-to-b from-gray-600 to-gray-800 md:bottom-10 md:right-10 md:h-16 md:w-16">
        <HiOutlineShoppingBag className="text-3xl md:text-4xl" />
        <div className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-wpSecondary text-xs font-semibold md:top-1 md:right-1 md:h-6 md:w-6 md:text-sm">
          {totalAmountCart}
        </div>
      </div>
    </Link>
  );
};

export default ShopBag;
