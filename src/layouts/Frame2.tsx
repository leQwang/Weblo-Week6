import React, { useState, useEffect } from "react";
import "../index.css";
import Button from "../components/Button";
// import f2FrameLeft from "../assets/f2-frame-left.svg";

type Props = {
  className?: string;
};

const Frame2 = (props: Props) => {
  const { className } = props;
  const [imageHeight, setImageHeight] = useState(300);
  const [imageHeightMobile, setImageHeightMobile] = useState(300);

  useEffect(() => {
    const updateImageHeight = () => {
      const framesImage = document.getElementById("framesImage");
      const framesImageMobile = document.getElementById("framesImageMobile");

      const updateHeight = (element: any, setHeight: any) => {
        if (element) {
          const newImageHeight = element.clientHeight;
          setHeight(newImageHeight);
        }
      };

      updateHeight(framesImage, setImageHeight);
      updateHeight(framesImageMobile, (newHeight: any) =>
        setImageHeightMobile(newHeight / 2)
      );
    };

    const handleImagesLoad = () => {
      updateImageHeight();
    };

    // Initial update on mount
    updateImageHeight();

    // Update on window resize
    window.addEventListener("resize", updateImageHeight);

    // Listen for image load events
    const framesImage = document.getElementById("framesImage");
    const framesImageMobile = document.getElementById("framesImageMobile");

    if (framesImage) {
      framesImage.addEventListener("load", handleImagesLoad);
    }

    if (framesImageMobile) {
      framesImageMobile.addEventListener("load", handleImagesLoad);
    }

    return () => {
      window.removeEventListener("resize", updateImageHeight);

      if (framesImage) {
        framesImage.removeEventListener("load", handleImagesLoad);
      }

      if (framesImageMobile) {
        framesImageMobile.removeEventListener("load", handleImagesLoad);
      }
    };
  }, []);

  return (
    <div
      className={`flex relative w-screen min-h-screen bg-f2-mobile md:bg-f2-purple bg-center bg-no-repeat bg-cover  ${className}`}
    >
      {/*  bg-f2-mobile bg-center bg-cover bg-no-repeat */}

      <img
        src="/f2-bg-desktop.png"
        className="absolute -top-[28vh] md:object-cover lg:w-full hidden lg:block"
        alt="frame 2 background desktop"
      />

      <img
        src="/f2-bg-desktop.png"
        className="absolute bottom-0 md:w-full h-[120vh] hidden md:block lg:hidden z-10"
        alt="frame 2 background desktop"
      />

      <div className="relative flex flex-col justify-around items-center w-full z-20">
        <div className="flex flex-col items-center justify-around w-[60%] mb-2 md:flex-shrink lg:flex-grow">
          <img
            src="/ValorantLogo.png"
            className="w-[40%] md:w-[25%] mt-2 mb-3 md:mb-1 lg:mb-3 xl:mb-5"
            alt="valorant logo"
          />
          <div className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-GMVDIN scale-y-[1.2] mb-2 text-center">
            VÉN MÀN
          </div>
          <div className="text-[#ccff42] text-center font-bold text-sm lg:text-md lg:mb-3 xl:mb-4">
            H Ồ I _ 0 6 // M M X X I I I
          </div>
          <img
            src="/ValorantLogoMark.png"
            className="w-[10%] md:w-[5%]"
            alt="valorant logo mark"
          />
        </div>

        {/* Desktop ---------------------------------------------------------------------------------------- */}

        <div className="justify-center w-[80%] md:h-[30%] lg:h-auto hidden md:flex flex-grow">
          <img
            src="/f2-FRAMES-desktop.png"
            className="w-full"
            alt="frames"
            id="framesImage"
          />

          <div
            className="absolute flex justify-around w-[80%] px-1"
            style={{ height: `${imageHeight}px` }}
          >
            <div className="flex flex-col justify-around items-center xl:mt-2">
              <div>
                <div className="text-center text-white font-tungsten font-semibold md:text-xl lg:text-2xl xl:text-4xl">
                  GEKKO
                </div>
                <div className="text-center text-[#ccff42] font-GMVDIN font-semibold md:text-[10px] lg:text-[12px] xl:text-lg md:mb-4 lg:mb-6 xl:mb-12">
                  ĐẶC VỤ MỚI
                </div>
              </div>

              <img
                src="/playButton.png"
                className="w-10 md:w-12 xl:w-20 cursor-pointer mb-5 lg:mb-10 xl:mb-16 "
                alt="play button"
              />
              <button className="border-[3px] border-[#ccff42] rounded-lg bg-[#8548EB] py-1 px-1 md:px-1 lg:px-2 xl:py-3 xl:px-6 md:mb-2 lg:mb-3 xl:mb-5 ">
                <a
                  href=""
                  className="text-white hover:text-[#C9FF46] font-bold md:text-sm"
                >
                  TÌM HIỂU NGAY
                </a>
              </button>
            </div>

            <div className="flex flex-col justify-around items-center xl:mt-2">
              <div>
                <div className="text-center text-white font-tungsten font-semibold md:text-xl lg:text-2xl xl:text-4xl">
                  GEKKO
                </div>
                <div className="text-center text-[#ccff42] font-GMVDIN font-semibold md:text-[10px] lg:text-[12px] xl:text-lg md:mb-4 lg:mb-6 xl:mb-12">
                  ĐẶC VỤ MỚI
                </div>
              </div>

              <img
                src="/playButton.png"
                className="w-10 md:w-12 xl:w-20 cursor-pointer mb-5 lg:mb-10 xl:mb-16 "
                alt="play button"
              />
              <button className="border-[3px] border-[#ccff42] rounded-lg bg-[#8548EB] py-1 px-1 md:px-1 lg:px-2 xl:py-3 xl:px-6 md:mb-2 lg:mb-3 xl:mb-5 ">
                <a
                  href=""
                  className="text-white hover:text-[#C9FF46] font-bold md:text-sm"
                >
                  TÌM HIỂU NGAY
                </a>
              </button>
            </div>

            <div className="flex flex-col justify-around items-center xl:mt-2">
              <div>
                <div className="text-center text-white font-tungsten font-semibold md:text-xl lg:text-2xl xl:text-4xl">
                  GEKKO
                </div>
                <div className="text-center text-[#ccff42] font-GMVDIN font-semibold md:text-[10px] lg:text-[12px] xl:text-lg md:mb-4 lg:mb-6 xl:mb-12">
                  ĐẶC VỤ MỚI
                </div>
              </div>

              <img
                src="/playButton.png"
                className="w-10 md:w-12 xl:w-20 cursor-pointer mb-5 lg:mb-10 xl:mb-16 "
                alt="play button"
              />
              <button className="border-[3px] border-[#ccff42] rounded-lg bg-[#8548EB] py-1 px-1 md:px-1 lg:px-2 xl:py-3 xl:px-6 md:mb-2 lg:mb-3 xl:mb-5 ">
                <a
                  href=""
                  className="text-white hover:text-[#C9FF46] font-bold md:text-sm"
                >
                  TÌM HIỂU NGAY
                </a>
              </button>
            </div>

            <div className="flex flex-col justify-around items-center xl:mt-2">
              <div>
                <div className="text-center text-white font-tungsten font-semibold md:text-xl lg:text-2xl xl:text-4xl">
                  GEKKO
                </div>
                <div className="text-center text-[#ccff42] font-GMVDIN font-semibold md:text-[10px] lg:text-[12px] xl:text-lg md:mb-4 lg:mb-6 xl:mb-12">
                  ĐẶC VỤ MỚI
                </div>
              </div>

              <img
                src="/playButton.png"
                className="w-10 md:w-12 xl:w-20 cursor-pointer mb-5 lg:mb-10 xl:mb-16 "
                alt="play button"
              />
              <button className="border-[3px] border-[#ccff42] rounded-lg bg-[#8548EB] py-1 px-1 md:px-1 lg:px-2 xl:py-3 xl:px-6 md:mb-2 lg:mb-3 xl:mb-5 ">
                <a
                  href=""
                  className="text-white hover:text-[#C9FF46] font-bold md:text-sm"
                >
                  TÌM HIỂU NGAY
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile ---------------------------------------------------------------------------------------- */}

        <div className="justify-center w-[90%] sm:w-[80%] flex md:hidden flex-grow">
          <img
            src="/f2-FRAMES-mobile.png"
            className="w-full md:hidden framesImage h-[90%] sm:h-auto"
            alt="frames"
            id="framesImageMobile"
          />

          <div
            className="absolute flex flex-wrap w-[90%] sm:w-[80%] px-1 py-1"
            style={{ height: `${imageHeightMobile * 2}px` }}
          >
            <div
              className="flex w-full mt-1"
              style={{ height: `${imageHeightMobile}px` }}
            >
              <div className="flex flex-col justify-between items-center w-[50%] sm:p-2">
                <div className="mt-1 sm:mt-2">
                  <div className="text-center text-white font-tungsten font-semibold text-md">
                    GEKKO
                  </div>
                  <div className="text-center text-[#ccff42] font-GMVDIN font-semibold text-[10px]">
                    ĐẶC VỤ MỚI
                  </div>
                </div>
                <img
                  src="/playButton.png"
                  className="w-7 md:w-12 xl:w-20 cursor-pointer"
                  alt="play button"
                />
                <button className="border-[2px] border-[#ccff42] rounded-sm bg-[#8548EB] px-2 py-1 mb-6">
                  <a
                    href=""
                    className="flex items-center text-white font-semibold text-[8px]"
                  >
                    TÌM HIỂU NGAY
                  </a>
                </button>
              </div>

              <div className="flex flex-col justify-between items-center w-[50%] sm:p-2">
                <div className="mt-1 sm:mt-2">
                  <div className="text-center text-white font-tungsten font-semibold text-md">
                    GEKKO
                  </div>
                  <div className="text-center text-[#ccff42] font-GMVDIN font-semibold text-[10px]">
                    ĐẶC VỤ MỚI
                  </div>
                </div>
                <img
                  src="/playButton.png"
                  className="w-7 md:w-12 xl:w-20 cursor-pointer"
                  alt="play button"
                />
                <button className="border-[2px] border-[#ccff42] rounded-sm bg-[#8548EB] px-2 py-1 mb-6">
                  <a
                    href=""
                    className="flex items-center text-white font-semibold text-[8px]"
                  >
                    TÌM HIỂU NGAY
                  </a>
                </button>
              </div>
            </div>
            <div
              className="flex w-full"
              style={{ height: `${imageHeightMobile}px` }}
            >
              <div className="flex flex-col justify-between items-center w-[50%] sm:p-2">
                <div className="mt-1 sm:mt-2">
                  <div className="text-center text-white font-tungsten font-semibold text-md">
                    GEKKO
                  </div>
                  <div className="text-center text-[#ccff42] font-GMVDIN font-semibold text-[10px]">
                    ĐẶC VỤ MỚI
                  </div>
                </div>
                <img
                  src="/playButton.png"
                  className="w-7 md:w-12 xl:w-20 cursor-pointer"
                  alt="play button"
                />
                <button className="border-[2px] border-[#ccff42] rounded-sm bg-[#8548EB] px-2 py-1 mb-6">
                  <a
                    href=""
                    className="flex items-center text-white font-semibold text-[8px]"
                  >
                    TÌM HIỂU NGAY
                  </a>
                </button>
              </div>

              <div className="flex flex-col justify-between items-center w-[50%] sm:p-2">
                <div className="mt-1 sm:mt-2">
                  <div className="text-center text-white font-tungsten font-semibold text-md">
                    GEKKO
                  </div>
                  <div className="text-center text-[#ccff42] font-GMVDIN font-semibold text-[10px]">
                    ĐẶC VỤ MỚI
                  </div>
                </div>
                <img
                  src="/playButton.png"
                  className="w-7 md:w-12 xl:w-20 cursor-pointer"
                  alt="play button"
                />
                <button className="border-[2px] border-[#ccff42] rounded-sm bg-[#8548EB] px-2 py-1 mb-6">
                  <a
                    href=""
                    className="flex items-center text-white font-semibold text-[8px]"
                  >
                    TÌM HIỂU NGAY
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button -------------------------------------------------------------------------------------------*/}
        <Button
            className="mb-[3vh] md:mb-0 md:mt-[3vh]"
            link="/"
            width={"36"}
            widthMobile={"24"}
            text="CHIẾN NGAY"
            border="border-[#ccff42]"
            color="bg-[#ccff42]"
            colorHover="bg-black"
            colorText="text-black"
            colorTextHover="text-[#ccff42]"
          />
      
      </div>
    </div>
  );
};

export default Frame2;
