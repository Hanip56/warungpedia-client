import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import Menu from "./Menu";

const ShopList = ({ products }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(`${BASE_URL}/api/category`);
      const data = await res.json();

      setCategories(data);
    };
    fetchCategory();
  }, []);

  const showProducts = (slug) => {
    return products
      .filter((menu) => menu.category === slug)
      .map((el) => <Menu key={el._id} menu={el} />);
  };

  return (
    <section
      id="shopList"
      className="relative z-10 -mt-[100vh] min-h-screen space-y-10 bg-[#171717] p-6 text-center text-5xl font-bold sm:p-8 md:p-14"
    >
      <h1>Menu List</h1>

      <Tab.Group>
        <Tab.List className="flex justify-center">
          {categories.map((category) => (
            <Tab
              key={category._id}
              id={category._id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                  selected
                    ? "border-b-2 border-wpSecondary bg-[#35383C] text-white"
                    : "border-b-2 border-[#35383C] text-[#747474]"
                }`
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mx-auto pt-4 pb-24 sm:px-4 md:pt-10 lg:max-w-fit">
          {categories.map((category) => (
            <Tab.Panel key={category._id} className="tabPanel">
              {showProducts(category.slug)}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default ShopList;
