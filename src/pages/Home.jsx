import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ShopBag from "../components/ShopBag";
import ShopList from "../components/ShopList";
import { BASE_URL } from "../constants";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(BASE_URL + "/api/product");
      const data = await response.json();

      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <Banner products={products} />
      <ShopList products={products} />
      <ShopBag />
    </div>
  );
};

export default Home;
