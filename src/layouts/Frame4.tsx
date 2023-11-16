import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../index.css";

type Props = {};

export default function Frame4(props: Props) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-white">
      <div className="navigation-wrapper ">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide h-screen">
            <video src="/video/Gekko Video 2.mp4" className="absolute object-cover h-full w-full" autoPlay loop muted></video>
          </div>
          <div className="keen-slider__slide number-slide1">
            <img src="/f4-1.png" alt="frame 4 picture 1" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src="/f4-2.png" alt="frame 4 picture 2" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src="/f4-3.png" alt="frame 4 picture 3" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src="/f4-4.png" alt="frame 4 picture 4" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src="/f4-5.png" alt="frame 4 picture 5" />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " hidden" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow cursor-pointer z-10 ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="#C9FF46"/>
        // <img src="/f4-arrow-left.png" alt="arrow left" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="#C9FF46"/>
      )}
    </svg>
  );
}
