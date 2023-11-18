import React from "react";
import Button from "../components/Button";

type Props = {};

const Frame6 = (props: Props) => {
  return (
    <div className="relative w-screen h-[150vh] overflow-hidden md:bg-[url(/public/f6-desktop-bg-temp.png)] bg-[url(/public/f6-mobile.png)] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full flex items-center">
        <img
          src="/f6-desktop-gekko.png"
          className="absolute right-0 top-0  h-[150vh] hidden md:block"
          alt="frame 6 desktop background"
        />
        <div className="flex flex-col items-center justify-around md:w-[50%] h-[30%] md:h-[35%] z-10 mt-[40vh] md:mt-0">
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

          {/* Button */}
          <Button
            className="mt-10"
            link="/"
            width={"text-36"}
            widthMobile={"text-24"}
            text="CHIẾN NGAY"
            border="border-[#8C4AEC]"
            color="bg-[#8C4AEC]"
            colorHover="bg-white"
            colorText="text-white"
            colorTextHover="text-[#8C4AEC]"
          />
        </div>

        {/* Social Media */}
        <div className="absolute bottom-[10vh] md:bottom-[10vh] w-full flex flex-col items-center z-10">
          <div className="flex w-[90%] md:w-[30%] justify-around">
            <a
              target="_blank"
              href="https://www.facebook.com/VALORANTvn/"
              className="overflow-hidden w-[86px] group cursor-pointer h-[86px] bg-transparent border-2 border-[#8C4AEC] relative before:content-[''] before:absolute before:w-1 before:h-1 before:bg-[#8C4AEC] before:top-0 before:right-0 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-[#8C4AEC] after:bottom-0 after:left-0 flex items-center justify-center text-3xl text-[#8C4AEC]"
              rel="noreferrer"
            >
              <div className="z-20">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </div>
              <div className="absolute w-1/4 h-[2px] bg-[#8C4AEC] top-[12.5%] left-0 rotate-45"></div>
              <div className="absolute w-1/4 h-[2px] bg-[#8C4AEC] bottom-[12.5%] right-0 rotate-45"></div>
              <div className="absolute bottom-0 left-0 w-0 h-full transition-all duration-300 ease-in-out skew-x-[45deg] translate-y-1/2 -translate-x-1/2 bg-[#0f1923] -z-10 group-hover:scale-[5] group-hover:w-full"></div>
            </a>

            <a
              target="_blank"
              href="https://www.youtube.com/PlayValorant"
              className="overflow-hidden w-[86px] group cursor-pointer h-[86px] bg-transparent border-2 border-[#8C4AEC] relative before:content-[''] before:absolute before:w-1 before:h-1 before:bg-[#8C4AEC] before:top-0 before:right-0 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-[#8C4AEC] after:bottom-0 after:left-0 flex items-center justify-center text-3xl text-[#8C4AEC]"
              rel="noreferrer"
            >
              <div className="z-20">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path>
                </svg>
              </div>
              <div className="absolute w-1/4 h-[2px] bg-[#8C4AEC] top-[12.5%] left-0 rotate-45"></div>
              <div className="absolute w-1/4 h-[2px] bg-[#8C4AEC] bottom-[12.5%] right-0 rotate-45"></div>
              <div className="absolute bottom-0 left-0 w-0 h-full transition-all duration-300 ease-in-out skew-x-[45deg] translate-y-1/2 -translate-x-1/2 bg-[#0f1923] -z-10 group-hover:scale-[5] group-hover:w-full"></div>
            </a>

            <a
              target="_blank"
              href=""
              className="overflow-hidden w-[86px] group cursor-pointer h-[86px] bg-transparent border-2 border-[#8C4AEC] relative before:content-[''] before:absolute before:w-1 before:h-1 before:bg-[#8C4AEC] before:top-0 before:right-0 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-[#8C4AEC] after:bottom-0 after:left-0 flex items-center justify-center text-3xl text-[#8C4AEC]"
              rel="noreferrer"
            >
              <div className="z-20">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </div>
              <div className="absolute w-1/4 h-[2px] bg-[#8C4AEC] top-[12.5%] left-0 rotate-45"></div>
              <div className="absolute w-1/4 h-[2px] bg-[#8C4AEC] bottom-[12.5%] right-0 rotate-45"></div>
              <div className="absolute bottom-0 left-0 w-0 h-full transition-all duration-300 ease-in-out skew-x-[45deg] translate-y-1/2 -translate-x-1/2 bg-[#0f1923] -z-10 group-hover:scale-[5] group-hover:w-full"></div>
            </a>
          </div>
          <a href="#" className="mt-10 uppercase text-[#8C4AEC] font-myriad tracking-wider font-semibold underline text-[18px] text-center px-1 pb-0 lg:text-3xl lg:pb-4">Xem thêm tin tức về valorant</a>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
