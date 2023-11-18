import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../index.css";

type Props = {};

const Frame5: React.FC<Props> = (props: Props) => {
  const [view, setView] = useState(0);

  const handleMoveRight = () => {
    // switch (view) {
    //   case 0:
    //     setView(50);
    //     break;
    //   case 50:
    //     setView(100);
    //     break;
    //   case 100:
    //     setView(150);
    //     break;
    // }
    switch (view) {
      case 0:
        setView(20);
        break;
      case 20:
        setView(40);
        break;
      case 40:
        setView(60);
        break;
    }
  };

  const handleMoveLeft = () => {
    // switch (view) {
    //   case 150:
    //     setView(100);
    //     break;
    //   case 100:
    //     setView(50);
    //     break;
    //   case 50:
    //     setView(0);
    //     break;
    // }
    switch (view) {
      case 60:
        setView(40);
        break;
      case 40:
        setView(20);
        break;
      case 20:
        setView(0);
        break;
    }
  };

  const [mobileView, setMobileView] = useState(0);

  const handleMobileMoveRight = () => {
    console.log(mobileView);
    switch (mobileView) {
      case 0:
        setMobileView(20);
        break;
      case 20:
        setMobileView(40);
        break;
      case 40:
        setMobileView(60);
        break;
      case 60:
        setMobileView(80);
        break;
    }
  };

  const handleMobileMoveLeft = () => {
    console.log(mobileView);

    switch (mobileView) {
      case 80:
        setMobileView(60);
        break;
      case 60:
        setMobileView(40);
        break;
      case 40:
        setMobileView(20);
        break;
      case 20:
        setMobileView(0);
        break;
    }
  };

  return (
    <div className="relative md:h-screen h-96 overflow-x-hidden">
      {/* desktop */}
      <div className="hidden md:block h-full">
        <div
          className={`absolute ${view === 0 ? "translate-x-[-0%]" : view === 20? "translate-x-[-20%]" : view === 40 ? "translate-x-[-40%]" : "translate-x-[-60%]" } top-0 h-full w-[250%] transition-transform duration-500 ease-in-out`}
          // className={`absolute translate-x-[-${view}%] top-0 h-full w-[250%] transition-transform duration-500 ease-in-out`}
          // className={`absolute -left-[${view}%] top-0 h-full w-[250%] transition-transform duration-500 ease-in-out`}
        >
          <img
            src="/f5.png"
            alt="Your Long Image"
            className="h-full w-full object-cover"
            style={{ objectPosition: "left" }}
          />
        </div>

        <div className={`absolute top-1/2 transform -translate-y-1/2 left-4 ${view === 0 ? "hidden" : ""}`}>
          <button
            onClick={handleMoveLeft}
            className="bg-gray-300 p-2 rounded-full"
          >
            Left
          </button>
        </div>
        <div className={`absolute top-1/2 transform -translate-y-1/2 right-4 ${view === 60 ? "hidden" : ""}`}>
          <button
            onClick={handleMoveRight}
            className="bg-gray-300 p-2 rounded-full"
          >
            Right
          </button>
        </div>
      </div>

      {/* Mobile ------------------------------------------------------------------------------ */}
      <div className="md:hidden h-full">
        <div
          className={`absolute ${mobileView === 0 ? "translate-x-[-0%]" : mobileView === 20? "translate-x-[-20%]" : mobileView === 40 ? "translate-x-[-40%]" : mobileView === 60 ? "translate-x-[-60%]" : "translate-x-[-80%]" } top-0 h-full w-[500%] transition-transform duration-500 ease-in-out`}
          // className={`absolute -left-[${mobileView}%] top-0 h-full w-[500%] transition-transform duration-500 ease-in-out`}
        >
          <img
            src="/f5.png"
            alt="Your Long Image"
            className="h-full w-full object-cover"
            style={{ objectPosition: "left" }}
          />
        </div>
        <div className={`absolute top-1/2 transform -translate-y-1/2 left-4 ${mobileView === 0 ? "hidden" : ""}`}>
          <button
            onClick={handleMobileMoveLeft}
            className="bg-gray-300 p-2 rounded-full"
          >
            LeftMobile
          </button>
        </div>
        <div className={`absolute top-1/2 transform -translate-y-1/2 right-4 ${mobileView === 80 ? "hidden" : ""}`}>
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
