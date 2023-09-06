import { useEffect, useState } from "react";
import { MainContentLists } from "../utils/listsGroup";
import chevron_left from "/src/assets/images/chevron-left.svg";
import chevron_right from "/src/assets/images/chevron-right.svg";
import Image from "next/image";

const CustomCarousel = () => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? MainContentLists.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === MainContentLists.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 11000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-10 mb-5">
        <button
          onClick={prev}
          className="p-2 bg-black rounded-full opacity-50 hover:opacity-100"
        >
          <Image src={chevron_left} alt="" />
        </button>
        <button
          onClick={next}
          className="p-2 bg-black rounded-full opacity-50 hover:opacity-100"
        >
          <Image src={chevron_right} alt="" />
        </button>
      </div>

      <div className="relative flex">
        <div className="relative flex flex-col overflow-hidden ">
          <div
            className="flex transition-transform relative duration-500 left-0 max-sm:w-full max-sm:h-full max-[769px]:w-[640px] max-[769px]:h-[675px] max-[1025px]:w-[837px] max-[1025px]:h-[837px] lg:w-[837px] lg:h-[837px]"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {MainContentLists.map((element) => (
              <Image
                className="xl:rounded-[50px] max-sm:rounded-[20px] max-[769px]:rounded-[50px] max-[1025px]:rounded-[50px] max-sm:w-full max-sm:h-full sm:max-[769px]:min-w-[640px] sm:max-[769px]:h-[675px] md:max-lg:min-w-[837px] max-[1025px]:h-[837px] lg:min-w-[837px] lg:h-[837px]"
                key={element.id}
                src={element.src}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="absolute right-0 flex flex-col overflow-hidden xl:top-40 max-sm:top-40 max-[769px]:top-64 max-[1025px]:top-64">
          <div
            className="flex xl:w-[518px] max-sm:w-[250px] transition-transform duration-[800ms] max-[769px]:w-[300px] max-[769px]:h-[300px] max-[1025px]:w-[530px] max-[1025px]:h-[530px]"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {MainContentLists.map((element) => (
              <div
                key={element.id}
                className="bg-white rounded-3xl max-sm:p-[15px] xl:p-[30px] max-[769px]:p-[15px] drop-shadow-md xl:min-w-[518px] max-sm:min-w-[250px] h-fit sm:max-[769px]:min-w-[300px] sm:max-[769px]:h-[300px] sm:max-[1025px]:min-w-[530px] sm:max-[1025px]:h-[530px]"
              >
                <p className="text-[#3a336f] font-bold max-sm:text-[30px] max-[769px]:text-[30px] max-[1025px]:text-[30px] xl:text-[50px] max-sm:leading-8 max-[769px]:leading-8 xl:leading-tight xl:mt-[13px] font-Montserrat">
                  {element.headline}
                </p>

                <p className="xl:mt-[27px] max-sm:mt-[10px] max-[769px]:mt-[10px] font-Open_Sans max-sm:text-[10px] max-[769px]:text-[14px]">
                  {element.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
