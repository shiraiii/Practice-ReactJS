import React from "react";

const Nav = () => {
  const liClassName = "capitalize font-[15px]";
  return (
    <nav className="flex justify-between items-center max-w-[1440px] h-[72px] m-auto">
      <img
        className=" w-[76px] h-[42.75px] top-[15px] left-[85px]"
        src="../../../src/assets/images/brand_logo.png"
      ></img>
      <ul className="flex justify-between gap-[24px] items-center">
        <li className={liClassName}>Menu</li>
        <li className={liClassName}>Location</li>
        <li className={liClassName}>About</li>
        <li className={liClassName}>Contact</li>
      </ul>
      <button className="flex items-end border px-3 py-1 bg-red-500 text-white">
        Login
      </button>
    </nav>
  );
};

export default Nav;
