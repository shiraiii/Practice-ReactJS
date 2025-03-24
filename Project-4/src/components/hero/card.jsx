import React from "react";

const Card = ({ img }) => {
  return (
    <div className="border w-[340px] h-[167px] rounded-[19.45px] bg-gradient-to-r from-[#4690D4] via-[#6EBFF4] to-[#A5EFFF] relative flex">
      <img className="bg-transparent" src={img} alt="dishImage" />
      <div className="text-white flex items-end flex-col gap-[8px]">
        <div className="w-[168px] h-[86px]">
          <h1>Boiled Eggs</h1>
          <p className="text-[12px] font-[400]">
            Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras
            eget est.
          </p>
        </div>
        <div className="mb-3 mr-3 pt-[4px] pb-[4px] pl-[6px] pr-[6px] rounded-[5px] bg-[#FF4343] m-auto">
          $10.00
        </div>
      </div>
    </div>
  );
};

export default Card;
