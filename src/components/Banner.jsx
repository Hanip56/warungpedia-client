import React, { useState } from "react";
import Navbar from "./Navbar";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BASE_URL } from "../constants";

const Banner = ({ products }) => {
  const [carouselIdx, setCarouselIdx] = useState(2);
  const [movementCarousel, setMovementCarousel] = useState(0);
  const [movementSlider, setMovementSlider] = useState(0);

  const productsBanner = products.slice(6, 11);

  const handleScroll = () => {
    const offset = document.getElementById("shopList");

    offset.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="-z-10 h-[200vh]">
      <Navbar />
      <div className="sticky top-0 z-[1] h-screen w-full overflow-hidden  bg-wpBg p-8 pb-12 md:p-8">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-2 md:gap-y-4">
          <div className="relative w-[100vw] text-center">
            <h1 className="absolute left-[50%] -top-10 -z-10 mb-2 -translate-x-[50%] bg-gradient-to-b from-gray-600 to-gray-800 bg-clip-text text-6xl  font-bold tracking-tight text-transparent md:-top-12 md:text-7xl">
              {productsBanner[carouselIdx]?.title}
            </h1>
            <h1 className="relative z-10 mb-2 text-4xl font-bold tracking-wider md:text-5xl">
              {productsBanner[carouselIdx]?.title}
            </h1>
            <p className="z-50 mx-auto max-w-xs text-center text-sm text-gray-500 md:max-w-full">
              {productsBanner[carouselIdx]?.description}
            </p>
          </div>

          {/* food carousel */}
          <div
            className={`flex max-w-3xl justify-center gap-x-24 overflow-hidden py-2`}
          >
            <div
              className="my-4 flex transition-all duration-300 ease-in-out"
              style={{ transform: `translateX(${movementCarousel}rem)` }}
            >
              {productsBanner.map((product, idx) => (
                <div
                  key={product._id}
                  className="relative flex h-60 w-60 flex-shrink-0 items-center justify-center"
                >
                  <div
                    className={`${
                      carouselIdx === idx
                        ? "h-[90%] w-[90%] opacity-100"
                        : "h-[60%] w-[60%] -translate-y-12 opacity-50"
                    } absolute flex items-center justify-center transition-all duration-300 ease-in-out`}
                  >
                    <img
                      src={BASE_URL + "/" + product.image}
                      alt={product.title}
                      className="h-full w-full  object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* carousel navigation */}
          <div className="flex w-full items-center justify-between md:w-[64rem]">
            <button
              className="bg-wpGray p-4 hover:bg-wpGray/70"
              onClick={() => {
                setCarouselIdx((prev) => (prev !== 0 ? prev - 1 : prev));
                setMovementCarousel((prev) => (prev !== 30 ? prev + 15 : prev));
                setMovementSlider((prev) => (prev !== -4 ? prev - 2 : prev));
              }}
            >
              <HiChevronLeft className="text-xl" />
            </button>
            <div className="hidden h-1 w-40 items-center justify-center rounded-lg bg-wpGray md:flex ">
              <div
                className="h-1 w-8 rounded-lg bg-gray-400 transition-all duration-300"
                style={{ transform: `translateX(${movementSlider}rem)` }}
              ></div>
            </div>
            <button
              className="bg-wpGray p-4 hover:bg-wpGray/70"
              onClick={() => {
                setCarouselIdx((prev) => (prev !== 4 ? prev + 1 : prev));
                setMovementCarousel((prev) =>
                  prev !== -30 ? prev - 15 : prev
                );
                setMovementSlider((prev) => (prev !== 4 ? prev + 2 : prev));
              }}
            >
              <HiChevronRight className="text-xl" />
            </button>
          </div>
          {/* description */}
          <p className="text-center text-xs text-gray-400 md:text-sm">
            WarungPedia is a place where you can buy some yummiy food especially
            food from indonesia. <br /> Kupat tahu, Pecel Lele, Karedok and
            more.
          </p>

          <button
            className="mt-2 bg-wpSecondary py-2 px-4 hover:bg-wpSecondary/75"
            onClick={handleScroll}
          >
            Order Now
          </button>
        </div>

        <h1 className="absolute left-[50%] bottom-0 -z-10 w-screen -translate-x-[50%] bg-gradient-to-b from-gray-600 to-gray-800 bg-clip-text text-center text-[9.5rem] font-bold tracking-widest text-transparent opacity-20">
          WARUNG PEDIA
        </h1>
      </div>
    </section>
  );
};

export default Banner;
