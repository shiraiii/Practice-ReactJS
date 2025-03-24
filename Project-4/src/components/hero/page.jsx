import React from "react";
import background from "../../assets/images/bg.png";
import burger from "../../assets/images/burger.png";
import cake from "../../assets/images/cake.png";
import chicken from "../../assets/images/chicken.png";
import egg from "../../assets/images/egg.png";
import pancake from "../../assets/images/pancake.png";
import ramen from "../../assets/images/ramen.png";
import Card from "./card";

const Hero = () => {
  return (
    <div className="max-w-[1440px] min-h-[100vh] object-contain m-auto bg-[#0D0D0D]">
      <div
        className="max-w-[1440px] xl:h-[783px] xl:bg-no-repeat sm:bg-repeat-y m-auto flex "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-[1060px] grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-[32px] m-auto mt-[4em] overflow-hidden ">
          <Card img={ramen} />
          <Card img={burger} />
          <Card img={cake} />
          <Card img={chicken} />
          <Card img={egg} />
          <Card img={pancake} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
