import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <img src="../../src/assets/images/dices.png" alt="dices" />
      </div>
      <div>
        <div className="relative">
          <h1 className="text-[96px] font-[700]">DICE GAME</h1>
          <Link
            to={"/game"}
            className="absolute text-white text-center border rounded-md pt-2.5 pb-2.5 pr-[18px] pl-[18px] bg-black w-[220px] h-[44px] right-0"
          >
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
