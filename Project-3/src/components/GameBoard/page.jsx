import React, { useEffect, useState } from "react";
import Dice from "./dice";
import Rules from "./rules";

const GameBoard = () => {
  const buttonClass =
    "border border-black w-[72px] h-[72px] text-black text-[24px] font-[700] cursor-pointer";
  const [totalScore, setTotalScore] = useState(0);
  const [chooseNumber, setChooseNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(1);
  const [error, setError] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const number = [1, 2, 3, 4, 5, 6];

  const handleClick = (num) => {
    setChooseNumber(num);
  };
  const rollDice = () => {
    if (chooseNumber === 0) {
      setError(true);
      return;
    }
    const newRandomNumber = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(newRandomNumber);
    if (chooseNumber === newRandomNumber) {
      setTotalScore((prevScore) => prevScore + 1);
      setError(false);
    }
  };
  const resetScore = () => {
    setTotalScore(0);
  };
  console.log(
    "choose number is: " + chooseNumber + " random number is: " + randomNumber
  );

  const handleShowRules = () => {
    setShowRules(true);
  };

  return (
    <>
      <div className="flex justify-between max-w-[1280px] h-[151px] m-auto mt-[64px]">
        <div>
          <h1 className="w-[62px] h-[112px] font-[500] text-[100px] leading-[112px]">
            {totalScore}
          </h1>
          <p>Total Score</p>
        </div>
        <div>
          {error ? (
            <p className="text-red-500 font-[400] text-[24px] flex justify-end">
              You have not selected any number
            </p>
          ) : null}
          <div className="flex gap-[24px]">
            {number.map((num, index) => (
              <button
                key={index}
                onClick={() => handleClick(num)}
                className={
                  buttonClass +
                  `${chooseNumber === num ? " bg-black text-white" : " "}`
                }
              >
                {num}
              </button>
            ))}
          </div>
          <p className="flex justify-end mt-[30px] font-[700] text-[24px] ">
            Select Number
          </p>
        </div>
      </div>
      <Dice
        rollDice={rollDice}
        randomNumber={randomNumber}
        error={error}
        resetScore={resetScore}
        handleShowRules={handleShowRules}
      />
      {showRules ? <Rules /> : null}
    </>
  );
};

export default GameBoard;
