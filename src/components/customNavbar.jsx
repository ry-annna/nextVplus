"use client";

import ButtonAkun from "../components/buttonAkun";
import MultiLevelDropdown from "./sidebar";
import { useState } from "react";
import vplus from "../assets/images/vplus.png";
import logoMenu from "/src/assets/images/menu.svg";
import Link from "next/link";
import Image from "next/image";

const CustomNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white border border-slate-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto max-sm:px-4 max-sm:py-1 sm:max-md:px-4 sm:max-md:py-2 md:max-lg:px-5 md:max-lg:py-3 xl:py-4 xl:px-16 lg:px-14 lg:py-2">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center duration-200 hover:scale-110"
        >
          <Image
            src={vplus}
            className="xl:w-[70px] max-sm:w-[50px] max-sm:p-1 mr-3 min-[640px]:w-[50px] lg:w-[80px]"
            alt="Vplus logo"
          />
        </Link>

        <div className="border-2 rounded-lg md:hidden">
          <button
            className={`p-1 duration-200 ${toggle ? "rotate-180" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <Image className="opacity-60" src={logoMenu} alt="" />
          </button>
          <div className={`${toggle ? "block" : "hidden"} absolute right-0 `}>
            <MultiLevelDropdown />
          </div>
        </div>

        {/* NAVBAR LIST */}
        <div className="items-center hidden md:block">
          <div
            className="flex items-center w-full md:w-auto xl:gap-8 lg:gap-6 md:max-lg:gap-3"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col mt-4 font-medium border border-gray-100 rounded-lg lg:text-base bg-gray-50 sm:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 group-hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:group-hover:text-[#f1c50e] md:p-0 md:w-auto lg:"
                >
                  Trading{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5 group-hover:rotate-180 duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute z-10 invisible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:visible w-max"
                >
                  <ul
                    className="py-2 text-sm font-medium text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Mulai Trading
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Produk Trading
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Platform Trading
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 group-hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:group-hover:text-[#f1c50e] md:p-0 md:w-auto lg:"
                >
                  Market{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5 group-hover:rotate-180 duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute z-10 invisible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:visible w-max"
                >
                  <ul
                    className="py-2 text-sm font-medium text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link href={"/berita"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Berita
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/analisa"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Analisa
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Kalender Ekonomi
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 group-hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:group-hover:text-[#f1c50e] md:p-0 md:w-auto lg:"
                >
                  Edukasi{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5 group-hover:rotate-180 duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute z-10 invisible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:visible w-max "
                >
                  <ul
                    className="py-2 text-sm font-medium text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Pemula
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Mahir
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Webinar Vplus
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 group-hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:group-hover:text-[#f1c50e] md:p-0 md:w-auto lg:"
                >
                  Company{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5 group-hover:rotate-180 duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className="absolute z-10 invisible font-normal bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:visible w-max "
                >
                  <ul
                    className="py-2 text-sm font-medium text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Profil Vplus
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Kontak Vplus
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <button className=" px-4 py-2 hover:bg-gray-100 hover:text-[#f1c50e] w-full items-start flex">
                          Tanya Jawab Vplus
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 hover:scale-125 duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f1c50e] md:p-0 md:w-auto "
                >
                  <Link href={"/"}>VCareer</Link>
                </button>
              </li>
            </ul>
            <div className="hidden md:block">
              <div className="flex gap-2 md:max-lg:flex-col xl:flex-row">
                <ButtonAkun type="DEMO" />
                <ButtonAkun type="REAL" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
