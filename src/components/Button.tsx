import React from "react";
import PropTypes from "prop-types";

type Props = {
  link: string;
  width: number;
  widthMobile: number;
  text: string;
  color: string;
  colorHover: string;
  colorText: string;
  colorTextHover: string;
};
//Wrapper
const Button = (props: Props) => {
  const { link, width, widthMobile, text, color, colorHover, colorText, colorTextHover} = props;
  return (
    <div className="flex justify-center items-center w-full mb-8">
      <div>
        <div className={`main__button w-${widthMobile} md:w-${width}`}></div>
        <div className={`flex justify-end text-[${color}]`}>
          <div className="pr-5 my-3">
            <div className="pointy-right2"></div>
            <div className="pointy-body2"></div>
          </div>
        </div>
        <div className="main__button w-24 md:w-36"></div>
      </div>

      <div
        className={`relative mx-5 group
      before:content-[''] before:w-[110%] before:border before:border-[${color}] before:absolute before:top-0 before:left-0 before:-translate-x-[5%] 
      before:h-[55%] before:-translate-y-2 before:border-b-transparent 
      
      after:content-[''] after:w-[110%] after:border after:border-[${color}]  after:absolute 
      after:bottom-0 after:left-0 after:-translate-x-[5%] after:h-[55%] after:translate-y-2 after:border-t-transparent before:z-30 after:z-30`}
      >
        <div className="p-1 border border-[#ccff42]">
          <button>
            <div className={`relative text-[${colorText}] bg-[${color}] px-4 md:px-10 py-2 font-bold z-10 transition-all duration-150 button-primary group-hover:button-primary-disable overflow-hidden`}>
              <a href={link}>
                <span className={`relative z-20 group-hover:text-[${colorTextHover}]`}>
                  {text}
                </span>
              </a>

              <div className={`absolute w-0 bg-${colorHover} h-[110%] transition-all ease-linear duration-[300ms] group-hover:w-[150%] z-10 top-0 -left-12 -skew-x-12`}></div>
            </div>
          </button>
        </div>
      </div>

      <div>
        <div className="main__button w-24 md:w-36"></div>
        <div className={`flex justify-start text-[${color}]`}>
          <div className="pl-5 my-3">
            <div className="pointy-left2"></div>
            <div className="pointy-body2"></div>
          </div>
        </div>
        <div className="main__button w-24 md:w-36"></div>
      </div>
    </div>
  );
};

export default Button;
