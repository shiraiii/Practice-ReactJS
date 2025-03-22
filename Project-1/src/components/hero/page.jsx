import React from "react";
const Hero = () => {
  return (
    <div className="flex m-auto max-w-[1440px] justify-center items-center h-[calc(100vh-72px)]">
      <div className="max-w-[595px] flex flex-col gap-[36px]">
        <h1 className="text-[108px] font-bold leading-[102px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="font-semibold text-[16px] leading-[100%] text-[#5a5959] max-w-[400px]">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="flex gap-[40px]">
          <button className="border bg-red-500 text-white px-[16px] py-[6px] gap-[10px] font-bold w-[141px] h-[41px]">
            Shop Now
          </button>
          <button className="border py-[6px] px-[16px] gap-[10px] font-bold w-[141px] h-[41px]">
            Category
          </button>
        </div>
        <div>
          <p className="mb-[16px]">Also Available On</p>
          <div className="flex gap-[16px]">
            <img
              src="../../../src/assets/images/amazon.png"
              alt="amazon-logo"
            ></img>
            <img src="../../../src/assets/images/flipkart.png"></img>
          </div>
        </div>
      </div>
      <div>
        <img src="../../../src/assets/images/shoe_image.png"></img>
      </div>
    </div>
  );
};

export default Hero;
