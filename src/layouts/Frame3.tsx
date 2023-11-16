import React, { useRef, useState, useEffect } from "react";

type Props = {};

const Frame3 = (props: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSkill, setCurrentSkill] = useState<String>("First");

  const [videoHeight, setVideoHeight] = useState<number>(0);

  useEffect(() => {
    const framesVideo = document.getElementById("framesVideo");

    const updateVideoHeight = () => {
      if (framesVideo) {
        const newVideoHeight = framesVideo.clientHeight;
        setVideoHeight(newVideoHeight);
      }
    };

    const handleWindowLoad = () => {
      // Initial update after the entire page has loaded
      updateVideoHeight();

      // Update on window resize
      window.addEventListener("resize", updateVideoHeight);
    };

    // Wait for the entire page to load
    window.addEventListener("load", handleWindowLoad);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("resize", updateVideoHeight);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  const handleVideoClick = (): void => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const handleSkillClick = (skill: String): void => {
    const video = videoRef.current;

    if (video) {
      video.pause();
      setCurrentSkill(skill);
      video.play();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative min-h-screen md:-translate-y-10 z-10">
      <img
        src="/f3-bg-desktop.png"
        className="absolute h-[150vh] -bottom-[47vh] w-full hidden md:block "
        alt="frame 3 background desktop"
      />

      <img
        src="/f3-bg-mobile.png"
        className="absolute -bottom-[20vh] h-[135vh] w-full md:hidden"
        alt="frame 3 background mobile"
      />

      <div className="relative flex flex-col md:flex-row min-h-screen z-20">
        <div className="hidden md:flex"></div>

        <div className="flex flex-col justify-around items-center min-h-screen w-full">
          <div className="flex w-[80%] text-3xl font-bold text-white justify-around">
            <span className="text-[#C9FF46]">GEKKO</span>
            <span className="text-[#C9FF46]"> // </span>
            <span>TIỂU SỬ</span>
          </div>
          <div className="w-[70%] text-white justify-around text-center font-GMVDIN font-semibold leading-7">
            Gã trai phố thị L.A. - là người dẫn đầu biệt đội toàn những sinh vật
            "lắm chiêu" và rất thân thiết. Gekko đuổi theo những đồng đội đang
            mải miết lao tới hất tung tất cả kẻ thù đang ngáng đường, ráng sức
            tập hợp chúng lại để có thể tiếp tục ra chiêu.
          </div>
          <div className="flex justify-center items-center w-[70%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <img
              src="/f3-Frame-left.png"
              className="relative md:hidden py-4"
              alt="frame 3 video frame"
              style={{ height: videoHeight }}
            />

            <div className="flex justify-center items-center w-full h-fit">
              <video
                className="relative border-2 border-[#C9FF46] rounded-2xl w-fullt"
                src={`/video/Gekko ${currentSkill} Skill.mov`}
                id="framesVideo"
                muted
                ref={videoRef}
              ></video>
              <div
                className="absolute flex justify-center w-[65%] md:w-[69%] border rounded-lg border-[#C9FF46] z-10 "
                style={{ height: videoHeight - 9 }}
                onClick={handleVideoClick}
              ></div>
              <img
                src="/playButton.png"
                className={`w-10 md:w-12 xl:w-20 cursor-pointer absolute ${
                  isPlaying ? "hidden" : "flex"
                } justify-center`}
                alt="play button"
              />
            </div>
            <img
              src="/f3-Frame-right.png"
              className="relative md:hidden py-4"
              alt="frame 3 video frame"
              style={{ height: videoHeight }}
            />
          </div>

          <div className="grid grid-cols-4 gap-2 justify-evenly ">
            <div
              className="h-20 w-20 border-2 rounded-lg bg-[#8647EC] border-[#C9FF46]"
              onClick={() => handleSkillClick("First")}
            >
              <img
                className="p-2 pt-4"
                src={`${
                  currentSkill == "First" ? "/skill1b.png" : "/skill1a.png"
                }`}
                alt="skill a"
              />
            </div>

            <div
              className="h-20 w-20 border-2 rounded-lg bg-[#8647EC] border-[#C9FF46]"
              onClick={() => handleSkillClick("Second")}
            >
              <img
                className="p-2"
                src={`${
                  currentSkill == "Second" ? "/skill2b.png" : "/skill2a.png"
                }`}
                alt="skill a"
              />
            </div>

            <div
              className="h-20 w-20 border-2 rounded-lg bg-[#8647EC] border-[#C9FF46]"
              onClick={() => handleSkillClick("Third")}
            >
              <img
                className="p-2"
                src={`${
                  currentSkill == "Third" ? "/skill3b.png" : "/skill3a.png"
                }`}
                alt="skill a"
              />
            </div>

            <div
              className="h-20 w-20 border-2 rounded-lg bg-[#8647EC] border-[#C9FF46]"
              onClick={() => handleSkillClick("Forth")}
            >
              <img
                className="p-2"
                src={`${
                  currentSkill == "Forth" ? "/skill4b.png" : "/skill4a.png"
                }`}
                alt="skill a"
              />
            </div>
          </div>

          <div className="flex flex-col w-[70%]">
            <div className="">
              <div className="text-[#C9FF46] font-bold text-xl">E - Dizzy</div>
              <div className="text-white">
                TRANG BỊ Dizzy. Nhấn BẮN để cử Dizzy bay vút thẳng lên không
                trung. Dizzy vận sức, sau đó phóng ra tia plasma lên kẻ địch
                trong tầm nhìn. Kẻ địch trúng tia plasma sẽ bị mù. Khi Dizzy hết
                thời gian hiệu lực, nó sẽ tiêu biến thành một tiểu thể không
                hoạt động. TƯƠNG TÁC để thu hồi tiểu thể và nhận thêm 1 lượt
                dùng Dizzy sau khoảng thời gian hồi chiêu ngắn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
