import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../index.css";

type Props = {};

const Frame5: React.FC<Props> = (props: Props) => {
  const [view, setView] = useState(0);

  const handleMoveRight = () => {
    console.log("move right", view);
    setView((prevView) => Math.min(prevView + 50, 150));
  };

  const handleMoveLeft = () => {
    setView((prevView) => Math.max(prevView - 50, 0));
  };

  const [mobileView, setMobileView] = useState(0);

  const handleMobileMoveRight = () => {
    setMobileView((prevView) => Math.min(prevView + 100, 400));
  };

  const handleMobileMoveLeft = () => {
    setMobileView((prevView) => Math.max(prevView - 100, 0));
  };

  return (
    <div className="relative md:h-screen h-96 overflow-x-hidden">
      {/* desktop */}
      <div className="hidden md:block h-full">
        <div
          // className={`absolute translate-x-[-${view}%] transform top-0 h-full w-[350%] transition-transform duration-500 ease-in-out`}
          className={`absolute -left-[${view}%] top-0 h-full w-[250%] transition-transform duration-500 ease-in-out`}
        >
          <img
            src="/f5.png"
            alt="Your Long Image"
            className="h-full w-full object-cover"
            style={{ objectPosition: "left" }}
          />
        </div>

        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-4">
          <button
            onClick={handleMoveLeft}
            className="bg-gray-300 p-2 rounded-full"
          >
            Left
          </button>
        </div>
        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            onClick={handleMoveRight}
            className="bg-gray-300 p-2 rounded-full"
          >
            Right
          </button>
        </div>
      </div>
      <div className="md:hidden h-full">
        <div
          // className={`absolute translate-x-[-${view}%] transform top-0 h-full w-[250%] transition-transform duration-500 ease-in-out`}
          className={`absolute -left-[${mobileView}%] top-0 h-full w-[500%] transition-transform duration-500 ease-in-out`}
        >
          <img
            src="/f5.png"
            alt="Your Long Image"
            className="h-full w-full object-cover"
            style={{ objectPosition: "left" }}
          />
        </div>
        <div className="md:hidden absolute top-1/2 transform -translate-y-1/2 left-4">
          <button
            onClick={handleMobileMoveLeft}
            className="bg-gray-300 p-2 rounded-full"
          >
            LeftMobile
          </button>
        </div>
        <div className="md:hidden absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            onClick={handleMobileMoveRight}
            className="bg-gray-300 p-2 rounded-full"
          >
            RightMobile
          </button>
        </div>

      </div>
    </div>
  );
};

export default Frame5;
