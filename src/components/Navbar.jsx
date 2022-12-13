import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[2] w-full bg-wpBg p-2">
      <div className="mx-auto flex items-center justify-center md:max-w-5xl">
        <h1 className="text-lg font-semibold">WarungPedia</h1>
      </div>
    </nav>
  );
};

export default Navbar;
