import React from "react";
import dice_1 from "../../assets/images/dice_1.png";
import dice_2 from "../../assets/images/dice_2.png";
import dice_3 from "../../assets/images/dice_3.png";
import dice_4 from "../../assets/images/dice_4.png";
import dice_5 from "../../assets/images/dice_5.png";
import dice_6 from "../../assets/images/dice_6.png";

const Dice = ({ rollDice, randomNumber, resetScore, handleShowRules }) => {
  const diceImage = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];
  return (
    <div className="flex justify-center items-center h-[calc(100vh - 72px)] gap-[36px] flex-col mb-[36px]">
      {diceImage.map((image, index) => (
        <img
          onClick={() => {
            rollDice();
          }}
          className={`w-[250px] h-[250px] cursor-pointer ${
            randomNumber === index + 1 ? "block" : "hidden"
          }`}
          key={index}
          src={image}
          alt="dice"
        />
      ))}
      <p className="font-[500] text-[24px]">Click on Dice to roll</p>
      <button
        onClick={() => resetScore()}
        className="border w-[220px] h-[44px] rounded-md pt-[10px] pb-[10px] pr-[18px] pl-[18px] bg-transparent text-black cursor-pointer hover:bg-black hover:text-white"
      >
        Reset Score
      </button>
      <button
        onClick={() => handleShowRules()}
        className="border w-[220px] h-[44px] rounded-md pt-[10px] pb-[10px] pr-[18px] pl-[18px] bg-black text-white cursor-pointer"
      >
        Show Rules
      </button>
    </div>
  );
};

export default Dice;
