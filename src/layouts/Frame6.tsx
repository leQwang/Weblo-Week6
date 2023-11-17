import React from "react";
import Button from "../components/Button";

type Props = {};

const Frame6 = (props: Props) => {
  return (
    <div className="relative w-screen h-[150vh] overflow-hidden md:bg-[url(/public/f6-desktop-bg-temp.png)] bg-[url(/public/f6-mobile.png)] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full flex items-center">
        <img
          src="/f6-desktop-gekko.png"
          className="absolute right-0 top-0"
          alt="frame 6 desktop background"
        />
        <div className="flex flex-col items-center justify-around w-[50%] h-[35%] z-10">
          <div className="text-black w-[60%] font-semibold text-3xl text-center">
            BẮT ĐẦU HÀNH TRÌNH KHỞI TRANH BÙNG NỔ VÀ ĐA DẠNG ĐẶC VỤ TẠI
          </div>
          <img
            src="/f6-desktop-valorant-logo.png"
            className="w-[70%]"
            alt="valorant logo"
          />
          <div className="text-black w-[60%] font-bold text-5xl text-center">
            NGAY HÔM NAY
          </div>
          {/* <Button link='/' width={36} widthMobile={24} text='CHIẾN NGAY' color='#8C4AEC' colorHover='#FFFFFF' colorText='#FFFFFF' colorTextHover='#8C4AEC'/> */}

          {/* Button */}
          <div className="flex justify-center items-center w-full mb-8">
            <div>
              <div
                className={`main__button2 w-24 md:w-36`}
              ></div>
              <div className={`flex justify-end text-[#8C4AEC]`}>
                <div className="pr-5 my-3">
                  <div className="pointy-right2"></div>
                  <div className="pointy-body2"></div>
                </div>
              </div>
              <div className="main__button2 w-24 md:w-36"></div>
            </div>

            <div
              className={`relative mx-5 group
      before:content-[''] before:w-[110%] before:border before:border-[#8C4AEC] before:absolute before:top-0 before:left-0 before:-translate-x-[5%] 
      before:h-[55%] before:-translate-y-2 before:border-b-transparent 
      
      after:content-[''] after:w-[110%] after:border after:border-[#8C4AEC]  after:absolute 
      after:bottom-0 after:left-0 after:-translate-x-[5%] after:h-[55%] after:translate-y-2 after:border-t-transparent before:z-30 after:z-30`}
            >
              <div className="p-1 border border-[#8C4AEC]">
                <button>
                  <div
                    className={`relative text-white bg-[#8C4AEC] px-4 md:px-10 py-2 font-bold z-10 transition-all duration-150 button-primary group-hover:button-primary-disable overflow-hidden`}
                  >
                    <a href={`/`}>
                      <span
                        className={`relative z-20 group-hover:text-[#8C4AEC]`}
                      >
                        {`CHIẾN NGAY`}
                      </span>
                    </a>

                    <div
                      className={`absolute w-0 bg-white h-[110%] transition-all ease-linear duration-[300ms] group-hover:w-[150%] z-10 top-0 -left-12 -skew-x-12`}
                    ></div>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <div className="main__button2 w-24 md:w-36"></div>
              <div className={`flex justify-start text-[#8C4AEC]`}>
                <div className="pl-5 my-3">
                  <div className="pointy-left2"></div>
                  <div className="pointy-body2"></div>
                </div>
              </div>
              <div className="main__button2 w-24 md:w-36"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
