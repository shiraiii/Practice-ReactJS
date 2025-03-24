import React from "react";
import logo from "../../assets/images/FoodyZone.png";

const Header = () => {
  const buttonStyle =
    " rounded-[5px] pt-[6px] pb-[6px] pl-[12px] pr-[12px] bg-[#FF4343] text-center text-white cursor-pointer gap-[10px] font-[400] text-[16px]";
  return (
    <div className="bg-gray-700 max-w-[1440px] m-auto">
      <div className="max-w-[1200px] h-[241px] m-auto flex flex-col gap-[16px]">
        <div className="flex sm:flex-col sm:mt-[24px] sm:gap-[24px] xl:flex-row md:flex-row md:mt-auto justify-between items-center h-[40px] xl:mt-auto">
          <img src={logo} alt="logo" />
          <input
            type="text"
            placeholder="Search Food..."
            className="text-white placeholder:text-white w-[285px] h-[40px] rounded-md border-[#FF0909] border p-3"
          />
        </div>
        <div className="xl:mb-[34px] gap-[14px] xl:mt-[30px] flex justify-center sm:mb-[50px] sm:m-auto">
          <button className={buttonStyle}>All</button>
          <button className={buttonStyle}>Breakfast</button>
          <button className={buttonStyle}>Lunch</button>
          <button className={buttonStyle}>Dinner</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
