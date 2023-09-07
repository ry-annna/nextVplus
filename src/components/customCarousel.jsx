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
        <div className="relative flex flex-col overflow-hidden">
          <div
            className="flex transition-transform relative duration-500 left-0 max-sm:w-full max-sm:h-full sm:max-md:w-[640px] sm:max-md:h-[640px] md:max-lg:w-[737px] md:max-lg:h-[737px] lg:w-[837px] lg:h-[837px] "
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {MainContentLists.map((element) => (
              <Image
                className="max-sm:rounded-[20px] sm:max-md:rounded-[50px] md:max-lg:rounded-[50px] lg:max-xl:rounded-[50px] xl:rounded-[50px] max-sm:min-w-full max-sm:h-full sm:max-md:min-w-[640px] sm:max-md:h-[640px] md:max-lg:min-w-[737px] md:max-lg:h-[737px] lg:min-w-[837px] lg:h-[837px]"
                key={element.id}
                src={element.src}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="absolute right-0 flex flex-col overflow-hidden max-sm:top-40 sm:max-xl:top-64 xl:top-40 ">
          <div
            className="flex transition-transform duration-[800ms] max-sm:w-[250px] sm:max-md:w-[300px] md:w-[530px]"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {MainContentLists.map((element) => (
              <div
                key={element.id}
                className="bg-white rounded-3xl max-sm:opacity-80 max-md:p-[15px] md:max-xl:p-[20px] xl:p-[30px] drop-shadow-md h-fit max-sm:min-w-[250px] sm:max-md:min-w-[300px] md:min-w-[530px]"
              >
                <p className="text-[#3a336f] font-Montserrat font-bold max-md:text-[30px] md:max-xl:text-[50px] xl:text-[50px] max-md:leading-8 md:leading-none xl:mt-[13px]">
                  {element.headline}
                </p>

                <p className="font-Open_Sans xl:mt-[27px] max-md:mt-[10px] md:mt-[15px] max-sm:text-[10px] sm:max-md:text-[14px] md:text-[18px]">
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
