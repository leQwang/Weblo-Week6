import React from "react";
import Button from "../components/Button";

type Props = {};

const Frame6 = (props: Props) => {
  return (
    <div className="relative w-screen h-[150vh] overflow-hidden md:bg-[url(/public/f6-desktop-bg-temp.png)] bg-[url(/public/f6-mobile.png)] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full flex items-center">
        <img
          src="/f6-desktop-gekko.png"
          className="absolute right-0 top-0 hidden md:block"
          alt="frame 6 desktop background"
        />
        <div className="flex flex-col items-center justify-around  md:w-[50%] h-[30%] md:h-[35%] z-10 mt-[40vh]">
          <div className="text-black w-[80%] md:w-[60%] font-semibold text-2xl md:text-3xl text-center">
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
              <div className={`main__button2 w-24 md:w-36`}></div>
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

          {/* Social Media */}
          <div className="relative flex items-center justify-center mb-20 lg:mb-32">
            <button
              // onClick={() => redirectToLink("https://www.facebook.com/")}
              className="relative flex flex-col border-2 border-[#8C4AEC] bg-transparent p-7 overflow-hidden button__footer mx-5
          before:contents[''] before:w-1 before:h-1 before:bg-[#8C4AEC] before:border-white before:absolute before:-top-0 before:-right-0 before:z-10
          after:contents[''] after:w-1 after:h-1 after:bg-[#8C4AEC] after:border-white after:absolute after:-bottom-0 after:-left-0 after:z-10"
            >
              <div className="absolute bg-black w-[200%] h-[200%] -bottom-[200%] -left-[200%] skew-x-[45deg] duration-200"></div>
              <div className="absolute top-3 left-1 border-b border-[#8C4AEC] w-3 transform rotate-45 transform-origin-left"></div>
              <img src={"/f6-circle-bug"} alt="facebook icon" className="w-8 z-10" />
              <div className="absolute bottom-3 right-1 border-b border-[#8C4AEC] w-3 transform rotate-45 transform-origin-left"></div>
            </button>

            <button
              // onClick={() => redirectToLink("https://www.youtube.com/")}
              className="relative flex flex-col border-2 border-[#8C4AEC] bg-transparent p-7 overflow-hidden button__footer mx-5
          before:contents[''] before:w-1 before:h-1 before:bg-[#8C4AEC] before:border-white before:absolute before:-top-0 before:-right-0 before:z-10
          after:contents[''] after:w-1 after:h-1 after:bg-[#8C4AEC] after:border-white after:absolute after:-bottom-0 after:-left-0 after:z-10"
            >
              {" "}
              <div className="absolute bg-black w-[200%] h-[200%] -bottom-[200%] -left-[200%] skew-x-[45deg] duration-200"></div>
              <div className="absolute top-3 left-1 border-b border-[#8C4AEC] w-3 transform rotate-45 transform-origin-left"></div>
              <img src={`/f6-circle-bug`} alt="facebook icon" className="w-8 z-10" />
              <div className="absolute bottom-3 right-1 border-b border-[#8C4AEC] w-3 transform rotate-45 transform-origin-left"></div>
            </button>

            <button
              // onClick={() => redirectToLink("https://www.tiktok.com/")}
              className="relative flex flex-col border-2 border-[#8C4AEC] bg-transparent p-7 overflow-hidden button__footer mx-5
          before:contents[''] before:w-1 before:h-1 before:bg-[#8C4AEC] before:border-white before:absolute before:-top-0 before:-right-0 before:z-10
          after:contents[''] after:w-1 after:h-1 after:bg-[#8C4AEC] after:border-white after:absolute after:-bottom-0 after:-left-0 after:z-10"
            >
              {" "}
              <div className="absolute bg-black w-[200%] h-[200%] -bottom-[200%] -left-[200%] skew-x-[45deg] duration-200"></div>
              <div className="absolute top-3 left-1 border-b border-[#8C4AEC] w-3 transform rotate-45 transform-origin-left"></div>
              <img src={`/f6-circle-bug`} alt="facebook icon" className="w-8 z-10" />
              <div className="absolute bottom-3 right-1 border-b border-[#8C4AEC] w-3 transform rotate-45 transform-origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
