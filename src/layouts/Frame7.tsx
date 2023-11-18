import React from "react";

type Props = {
  className?: string;
};

const Frame7 = (props: Props) => {
  const { className } = props;
  return (
    <div className={`${className} relative w-full h-[50vh]`}>
      <img
        src="/f7-mobile-base.png"
        className="absolute top-0 translate-y-[-5vh] h-[55vh] md:hidden"
        alt="frame 7 mobile"
      />
      <img
        src="/f7-desktop-base.png"
        className="absolute w-full top-0 translate-y-[-10vh] h-[60vh] hidden md:block"
        alt="frame 7 mobile"
      />
      <div className="relative w-full h-full flex flex-col items-center z-20">
        <div className="w-[70%]">
          <div className="flex flex-row space-x-20 items-center cursor-pointer">
            <a href="https://www.riotgames.com/en">
              <div className="relative w-32 h-28 xl:h-32 2xl:h-40 2xl:w-40  filter invert "></div>
            </a>
            <a href="https://vnggames.com/">
              <div className="relative w-16 h-16 2xl:h-24 2xl:w-24 cursor-pointer"></div>
            </a>
          </div>
          <div className="text-center text-sm px-4 md:text-lg 2xl:text-2xl space-y-6 text-white">
            <p>©️ 2022 Riot games, Inc</p>
            <p className="w-[60%] mx-auto">
              Công ty Cổ Phần VNG. Địa chỉ: Lô 03b-04-05-06-07, đường số 13, khu
              Công Nghiệp, Khu Chế Xuất Tân Thuận, phường Tân Thuận Đông, Quận
              7, TP.HCM.
            </p>
            <div className="mt-2 flex flex-col items-center justify-center gap-2 font-GMVDIN lg:mt-2 lg:flex-row lg:gap-20">
              <a
                className="text-sm font-bold uppercase  lg:text-lg 2xl:text-2xl"
                href="https://www.riotgames.com/en/privacy-notice"
              >
                CHÍNH SÁCH BẢO MẬT
              </a>
              <a
                className="text-sm font-bold uppercase lg:text-lg 2xl:text-2xl"
                href="https://www.riotgames.com/en/terms-of-service"
              >
                ĐIỀU KHOẢN SỬ DỤNG (RIOT)
              </a>
              <a
                className="text-sm font-bold uppercase lg:text-lg 2xl:text-2xl"
                href="https://valorant.zing.vn/dieu-khoan-su-dung.html"
              >
                ĐIỀU KHOẢN SỬ DỤNG (VNG)
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-32 h-28 xl:w-40 ">
          <img src="/rule.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Frame7;
