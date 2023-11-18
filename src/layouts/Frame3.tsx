import React, { useRef, useState, useEffect } from "react";

type Props = {
  className?: string;
};

const Frame3 = (props: Props) => {
  const { className } = props;
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
  
    const handleVideoLoad = () => {
      updateVideoHeight();
    };
  
    // Initial update on mount
    updateVideoHeight();
  
    // Update on window resize
    window.addEventListener("resize", updateVideoHeight);
  
    // Listen for video load event
    if (framesVideo) {
      framesVideo.addEventListener("load", handleVideoLoad);
    }
  
    return () => {
      window.removeEventListener("resize", updateVideoHeight);
  
      if (framesVideo) {
        framesVideo.removeEventListener("load", handleVideoLoad);
      }
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
      setIsPlaying(false);
    }
  };

  return (
    <div className={`relative min-h-screen md:-translate-y-[5vh] z-10`}>
      <img
        src="/f3-bg-desktop.png"
        className="absolute h-[150vh] -bottom-[47vh] w-full hidden md:block "
        alt="frame 3 background desktop"
      />

      <img
        src="/f3-bg-mobile.png"
        className="absolute -bottom-[25vh] h-[140vh] w-full md:hidden"
        alt="frame 3 background mobile"
      />

      <div className="relative flex flex-col min-h-screen z-20 lg:mt-20">
        <div className="flex flex-col justify-start  items-center min-h-screen w-full md:w-[70%] md:ml-[5%]">
          <div className="flex w-[80%] md:w-[60%] lg:w-[40%] text-3xl font-bold text-white justify-around">
            <span>🏐</span>
            <span className="text-[#C9FF46]">GEKKO</span>
            <span className="text-[#C9FF46]"> // </span>
            <span>TIỂU SỬ</span>
          </div>
          <div className="w-[70%] md:w-[50%] text-white text-center font-GMVDIN font-semibold leading-7">
            Gã trai phố thị L.A. - là người dẫn đầu biệt đội toàn những sinh vật
            "lắm chiêu" và rất thân thiết. Gekko đuổi theo những đồng đội đang
            mải miết lao tới hất tung tất cả kẻ thù đang ngáng đường, ráng sức
            tập hợp chúng lại để có thể tiếp tục ra chiêu.
          </div>

          {/* Video ----------------------------------------------------------------------------------------------- */}

          <div className="flex justify-center items-center w-[80%] md:w-[70%] ">
            <img
              src="/f3-Frame-left.png"
              className="relative md:hidden py-4"
              alt="frame 3 video frame"
              style={{ height: videoHeight }}
            />

            <div className="flex justify-center items-center w-full h-fit">
              <video
                className="relative border-2 border-[#C9FF46] rounded-2xl w-full"
                src={`/video/Gekko ${currentSkill} Skill.mp4`}
                id="framesVideo"
                muted
                ref={videoRef}
              ></video>
              <div
                className="absolute flex justify-center w-[75%] md:w-[48%] border rounded-lg border-[#C9FF46] z-10 "
                style={{ height: videoHeight - 10 }}
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

          {/* Skill ------------------------------------------------------------------------- */}

          <div className="md:absolute grid grid-cols-4 md:grid-cols-1 md:top-[50%] md:-translate-y-[30%] md:-translate-x-[50%] md:left-[8%] md:grid-rows-4 gap-2 justify-evenly mt-5">
            <div
              className="h-20 w-20 border-2 rounded-lg bg-[#8647EC] border-[#C9FF46] cursor-pointer"
              onClick={() => handleSkillClick("First")}
            >
              <img
                className="p-2 pt-4"
                src={`${
                  currentSkill === "First" ? "/skill1b.png" : "/skill1a.png"
                }`}
                alt="skill a"
              />
            </div>

            <div
              className="h-20 w-20 border-2 rounded-lg bg-[#8647EC] border-[#C9FF46] cursor-pointer"
              onClick={() => handleSkillClick("Second")}
            >
              <img
                className="p-2"
                src={`${
                  currentSkill === "Second" ? "/skill2b.png" : "/skill2a.png"
                }`}
                alt="skill b"
              />
            </div>

            <div
              className="h-20 w-20 border-2 rounded-lg bg-[#8647EC] border-[#C9FF46] cursor-pointer"
              onClick={() => handleSkillClick("Third")}
            >
              <img
                className="p-2"
                src={`${
                  currentSkill === "Third" ? "/skill3b.png" : "/skill3a.png"
                }`}
                alt="skill c"
              />
            </div>

            <div
              className="h-20 w-20 border-2 rounded-lg bg-[#8647EC] border-[#C9FF46] cursor-pointer"
              onClick={() => handleSkillClick("Forth")}
            >
              <img
                className="p-2"
                src={`${
                  currentSkill === "Forth" ? "/skill4b.png" : "/skill4a.png"
                }`}
                alt="skill d"
              />
            </div>
          </div>

          {/* Skill Description ------------------------------------------------------------------------- */}

          <div className="flex flex-col w-[60%] flex-grow">
            <div
              className={`${
                currentSkill === "First" ? "flex" : "hidden"
              } flex-col items-center md:items-start`}
            >
              <div className="text-[#C9FF46] font-bold text-xl">
                C - Hố Bom của Mosh
              </div>
              <div className="text-white text-center md:text-start font-GMVDIN font-semibold leading-7 md:pl-3">
                TRANG BỊ Mosh. Nhấn BẮN để quăng Mosh như trái lựu đạn. Nhấn CHẾ
                ĐỘ PHỤ để ném tầm thấp. Sau khi đáp đất, Mosh phân tách bản thân
                ra một khu vực rộng hơn rồi phát nổ sau khoảng thời gian ngắn.
              </div>
            </div>

            <div
              className={`${
                currentSkill === "Second" ? "flex" : "hidden"
              } flex-col items-center  md:items-start`}
            >
              <div className="text-[#C9FF46] font-bold text-xl">
                Q - Wingman
              </div>
              <div className="text-white text-center md:text-start font-GMVDIN font-semibold leading-7 md:pl-3">
                TRANG BỊ Wingman, nhấn BẮN để phóng Wingman lên trước dò kẻ
                địch. Wingman phát ra xung chấn lên kẻ địch đầu tiên nhìn thấy.
                Nhấn CHẾ ĐỘ PHỤ khi chỉ tâm ngắm vào khu vực đặt Spike hoặc
                Spike đã được đặt để Wingman đặt hoặc gỡ Spike. Để đặt Spike,
                Gekko phải có Spike trong kho đồ. Khi Wingman hết thời gian hiệu
                lực, nó sẽ tiêu biến thành một tiểu thể không hoạt động. TƯƠNG
                TÁC để thu hồi tiểu thể và nhận thêm 1 lượt dùng Wingman sau
                khoảng thời gian hồi chiêu ngắn.
              </div>
            </div>

            <div
              className={`${
                currentSkill === "Third" ? "flex" : "hidden"
              } flex-col items-center  md:items-start`}
            >
              <div className="text-[#C9FF46] font-bold text-xl">E - Dizzy</div>
              <div className="text-white text-center md:text-start font-GMVDIN font-semibold leading-7 md:pl-3">
                TRANG BỊ Dizzy. Nhấn BẮN để cử Dizzy bay vút thẳng lên không
                trung. Dizzy vận sức, sau đó phóng ra tia plasma lên kẻ địch
                trong tầm nhìn. Kẻ địch trúng tia plasma sẽ bị mù. Khi Dizzy hết
                thời gian hiệu lực, nó sẽ tiêu biến thành một tiểu thể không
                hoạt động. TƯƠNG TÁC để thu hồi tiểu thể và nhận thêm 1 lượt
                dùng Dizzy sau khoảng thời gian hồi chiêu ngắn.
              </div>
            </div>

            <div
              className={`${
                currentSkill === "Forth" ? "flex" : "hidden"
              } flex-col items-center  md:items-start`}
            >
              <div className="text-[#C9FF46] font-bold text-xl">X - Thrash</div>
              <div className="text-white text-center md:text-start font-GMVDIN font-semibold leading-7 md:pl-3">
                TRANG BỊ Thrash. Nhấn BẮN để kết nối với tâm trí của Thrash và
                điều khiển nó xuyên qua lãnh địa của kẻ thù. KÍCH HOẠT để lao về
                phía trước và phát nổ, giam cầm mọi kẻ địch trong một phạm vi
                nhỏ. Khi Thrash hết thời gian hiệu lực, nó sẽ tiêu biến thành
                một tiểu thể không hoạt động. TƯƠNG TÁC để thu hồi tiểu thể và
                nhận thêm 1 lượt dùng Thrash sau khoảng thời gian hồi chiêu
                ngắn. Có thể thu hồi Thrash một lần.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
