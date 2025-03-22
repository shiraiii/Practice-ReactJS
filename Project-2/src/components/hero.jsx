import React from "react";

const Hero = () => {
  const onViaChat = () => {
    console.log("Clicked from chat");
  };
  const onViaCall = () => [console.log("Clicked from call")];
  const submitHandle = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="max-w-[1280px] flex flex-col gap-[81px] m-auto">
      <div>
        <h1 className="font-[800] text-[48px] leading-[100%]">CONTACT US</h1>
        <p className="font-[600] text-[16px] leading-[30px] max-w-[975px] max-h-[72px]">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className="mt-[40px] max-w-[472px] gap-[17px] flex flex-col relative">
        <div className="flex gap-[32px] max-w-[472px]">
          <button
            onClick={onViaChat}
            className="flex border bg-black rounded-md text-white pt-[10px] pb-[10px] pr-[18px] pl-[18px] w-[220px] h-[44px]"
          >
            <img
              className="w-[20px] h-[20px] mr-2"
              src="../../src/assets/images/Vector.png"
              alt="vector"
            ></img>
            VIA SUPPORT CHAT
          </button>
          <button
            onClick={onViaCall}
            className="flex border rounded-md bg-black text-white pt-[10px] pb-[10px] pr-[18px] pl-[18px] w-[220px] h-[44px] justify-center"
          >
            <img
              className="w-[24px] h-[24px] mr-2"
              src="../../src/assets/images/phone.png"
              alt="phone"
            ></img>
            VIA CALL
          </button>
        </div>
        <button className="flex w-[100%] h-[44px] pt-[10px] pb-[10px] pr-[18px] pl-[18px] border rounded-md justify-center ">
          <img
            className="w-[24px] h-[24px] mr-2 z-10 bg-black"
            src="../../src/assets/images/Vector.png"
            alt="something else"
          ></img>
          VIA EMAIL FORM
        </button>
        <form
          onSubmit={(event) => {
            submitHandle(event);
          }}
          className="flex flex-col gap-[24px] w-[90%] m-auto "
        >
          <div className="flex relative ">
            <label
              className="absolute top-[-13px] left-[10px] bg-white "
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border w-[100%] h-[40px] font-[14px]"
              type="text"
              name="name"
            />
          </div>
          <div className="flex relative   ">
            <label
              className="absolute top-[-13px] left-[10px] bg-white "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border w-[100%] h-[40px] font-[14px]"
              type="email"
              name="email"
            />
          </div>
          <div className="flex relative  ">
            <label
              className="absolute top-[-13px] left-[10px] bg-white "
              htmlFor="textarea"
            >
              Text
            </label>
            <textarea
              className="border w-[100%] p-[8px] font-[14px]"
              type="text"
              name="textarea"
              rows={8}
            />
          </div>
          <button className="text-white pt-[10px] pb-[10px] pr-[16px] pl-[16px] bg-black w-[50%] rounded-md mr-0 m-auto">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="absolute top-[25%] right-[23%]">
        <img src="../../src/assets/images/service.png" alt="service"></img>
      </div>
    </div>
  );
};

export default Hero;
