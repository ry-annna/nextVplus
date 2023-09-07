"use client";

import Image from "next/image";
import Link from "next/link";
import img456283_318fef4e from "/src/assets/images/456283-318fef4e.png";
import img1250758_3cbe51b5 from "/src/assets/images/1250758-3cbe51b5.png";

const ButtonAkun = (props) => {
  const { type } = props;
  return (
    <Link href={`${type === "DEMO" ? "/demoAkun" : "/realAkun"}`}>
      <button className="text-white py-3 px-4 rounded-md flex gap-2 hover:scale-105 duration-300 hover:text-black hover:bg-[#f1c50e] bg-[#3a336f] max-sm:h-fit sm:max-md:flex sm:max-md:justify-center sm:max-md:w-[200px] md:max-lg:w-[144px] lg:max-xl:w-[138px] lg:text-sm xl:text-base">
        {type === "DEMO" ? (
          <Image
            src={img456283_318fef4e}
            className="max-sm:w-5 sm:max-md:w-5 md:max-lg:w-5 lg:max-xl:w-6 xl:w-6"
            alt=""
          />
        ) : (
          <Image
            src={img1250758_3cbe51b5}
            className="max-sm:w-5 sm:max-md:w-5 md:max-lg:w-5 lg:max-xl:w-6 xl:w-6"
            alt=""
          />
        )}
        {type === "DEMO" ? "Akun Demo" : "Akun Real"}
      </button>
    </Link>
  );
};

export default ButtonAkun;
