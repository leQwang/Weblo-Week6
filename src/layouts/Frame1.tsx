import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Button from "../components/Button";

type Props = {
  className?: string;
};

const Frame1 = (props: Props) => {
  const { className } = props;
  return (
    <div className={`relative w-screen min-h-screen overflow-hidden ${className}`}>
      <video
        className="absolute object-cover h-full w-full"
        src="/video/Gekko Trailer.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute bg-[#613abb] w-full h-full opacity-80"></div>
      <div className="absolute flex flex-col items-center justify-center w-full h-full">
        <img
          src="/ValorantLogoMark.png"
          className="relative mb-16 w-[25%] md:w-[8%]"
          alt="/Valorant Logo mark"
        />
        <div className="flex text-center text-white text-md md:text-2xl lg:text-4xl mb-3 font-bold">
          Tổ Đội Náo Động Sắp Đổ Bộ Đấu Trường
        </div>
        <img
          src="/ValorantLogo.png"
          className="relative w-[80%] md:w-[65%] mb-32 md:mb-20"
          alt="valorant logo"
        />

        {/* Count down */}

        {/* Button */}
        <Button
            className="mt-10"
            link="/"
            width={"text-36"}
            widthMobile={"text-24"}
            text="CHIẾN NGAY"
            border="border-[#ccff42]"
            color="bg-[#ccff42]"
            colorHover="bg-black"
            colorText="text-black"
            colorTextHover="text-[#ccff42]"
          />
        
      </div>

      <img
        src="/f2-Ellipse.png"
        className="absolute bottom-0 w-full md:hidden"
        alt="frame 2 background desktop"
      />
    </div>
  );
};

export default Frame1;
