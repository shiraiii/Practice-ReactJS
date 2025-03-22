import React from "react";

const Rules = () => {
  return (
    <div className="flex flex-col gap-[24px] p-[20px] w-[794px] h-[208px] justify-center m-auto  bg-[#FBF1F1] pt-0 pb-0">
      <h1 className="font-[700] text-[24px]">How to play dice game</h1>
      <div>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  );
};

export default Rules;
