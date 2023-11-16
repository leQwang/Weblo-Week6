import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";

type Props = {};

const Frame1 = (props: Props) => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
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
        <div className="flex justify-center items-center w-full mb-8">
          <div>
            <div className="main__button w-24 md:w-36"></div>
            <div className="flex justify-end text-[#ccff42]">
              <div className="pr-5 my-3">
                <div className="pointy-right"></div>
                <div className="pointy-body"></div>
              </div>
            </div>
            <div className="main__button w-24 md:w-36"></div>
          </div>

          <div
            className={`relative mx-5 group
            before:content-[''] before:w-[110%] before:border before:border-[#ccff42] before:absolute before:top-0 before:left-0 before:-translate-x-[5%] 
            before:h-[55%] before:-translate-y-2 before:border-b-transparent 
            
            after:content-[''] after:w-[110%] after:border after:border-[#ccff42]  after:absolute 
            after:bottom-0 after:left-0 after:-translate-x-[5%] after:h-[55%] after:translate-y-2 after:border-t-transparent before:z-30 after:z-30`}
          >
            <div className="p-1 border border-[#ccff42]">
              <button>
                <div className="relative text-black bg-[#ccff42] px-4 md:px-10 py-2 font-bold z-10 transition-all duration-150 button-primary group-hover:button-primary-disable overflow-hidden">
                  <span className="relative z-20 group-hover:text-[#ccff42] hidden md:flex">
                    KHÁM PHÁ NGAY
                  </span>

                  <span className="relative z-20 text-sm group-hover:text-[#ccff42] md:hidden whitespace-nowrap">
                    ĐÓN CHỜ NGAY
                  </span>

                  <div className="absolute w-0 bg-black h-[110%] transition-all ease-linear duration-[300ms] group-hover:w-[150%] z-10 top-0 -left-12 -skew-x-12"></div>
                </div>
              </button>
            </div>
          </div>

          <div>
            <div className="main__button w-24 md:w-36"></div>
            <div className="flex justify-start text-[#ccff42] ">
              <div className="pl-5 my-3">
                <div className="pointy-left"></div>
                <div className="pointy-body"></div>
              </div>
            </div>
            <div className="main__button w-24 md:w-36"></div>
          </div>
        </div>

        
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
