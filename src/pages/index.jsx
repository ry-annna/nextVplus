import { TickerTape } from "react-ts-tradingview-widgets";
import { TickerSymbolsVplus } from "../utils/listsGroup";
import { useEffect, useState } from "react";
import ButtonAkun from "../components/buttonAkun";
import CustomCarousel from "@/components/customCarousel";
import ReactPlayer from "react-player";
import Image from "next/image";
import tesImage from "../assets/images/aa63897827a38c8f8ade5e61800d39a1439b62b992fadbd3b77a943106ca808409e02685f8e23ac168cbef30adb93860e346a2b9859dd61b99a15b_1280.jpg";
import logo1159689536d100 from "../assets/images/115968-9536d100.png";
import logo372093725304779 from "../assets/images/3720937-25304779.png";
import logo22822726bebec51 from "../assets/images/2282272-6bebec51.png";
import logo17156165ca5712 from "../assets/images/171561-65ca5712.png";
import logo53523976a99baf from "../assets/images/535239-76a99baf.png";
import logo159832139ed446 from "../assets/images/159832-139ed446.png";
import logo95383126691a72 from "../assets/images/953831-26691a72.png";
import logo561127c47308a4 from "../assets/images/561127-c47308a4.png";
import metatrader5multiassetplatform_2xremovebgpreview from "../assets/images/metatrader-5-multi-asset-platform_2x-removebg-preview.png";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div>
      <div className="flex justify-center w-full my-2 max-sm:gap-2 max-sm:px-1 md:hidden max-md:gap-14">
        <ButtonAkun type="DEMO" />
        <ButtonAkun type="REAL" />
      </div>

      <div>
        <TickerTape
          colorTheme="light"
          symbols={TickerSymbolsVplus}
        ></TickerTape>
      </div>

      <section className="flex justify-center">
        <div className="z-10 absolute bg-[#3a336f] w-full max-sm:h-[200px] sm:h-[600px]"></div>
        <div className="z-20 mx-auto mt-5 xl:w-[1140px]">
          <CustomCarousel />

          <div className="relative flex flex-wrap items-center justify-center mt-10">
            <div className="px-[20px] py-[35px] w-[276px] flex flex-col justify-start">
              <div className="mx-auto w-[145px] h-[145px] relative">
                <div className="bg-[#f1c50e] absolute w-[118px] h-[118px] rounded-full mr-[-1px] ml-[28px] z-10"></div>
                <Image
                  src={logo1159689536d100}
                  className="w-[96px] z-20 absolute bottom-0"
                  alt=""
                />
              </div>

              <h4 className="text-[20px] font-Montserrat mt-[30px] text-[#3a336f] font-semibold uppercase text-center">
                Rekomendasi Broker Berlisensi
              </h4>

              <p className="text-[14px] mt-[12px] font-Open_Sans text-[#808080] text-center">
                Vplus membantu para trader menemukan broker yang legal dan
                berlisensi.
                <br />
              </p>
            </div>
            <div className="px-[20px] py-[35px] w-[276px] flex flex-col justify-start">
              <div className="mx-auto w-[145px] h-[145px] relative">
                <div className="bg-[#f1c50e] absolute w-[118px] h-[118px] rounded-full mr-[-1px] ml-[28px] z-10"></div>
                <Image
                  src={logo372093725304779}
                  className="w-[96px] z-20 absolute bottom-0"
                  alt=""
                />
              </div>

              <h4 className="text-[20px] font-Montserrat mt-[30px] text-[#3a336f] font-semibold uppercase text-center">
                Analisa Market
              </h4>

              <p className="text-[14px] mt-[12px] font-Open_Sans text-[#808080] text-center">
                Vplus memberikan saran profesional kepada trader untuk
                bertransaksi di pialang yang sudah teregulasi oleh pemerintah.
                <br />
              </p>
            </div>
            <div className="px-[20px] py-[35px] w-[276px] flex flex-col justify-start">
              <div className="mx-auto w-[145px] h-[145px] relative">
                <div className="bg-[#f1c50e] absolute w-[118px] h-[118px] rounded-full mr-[-1px] ml-[28px] z-10"></div>
                <Image
                  src={logo22822726bebec51}
                  className="w-[96px] z-20 absolute bottom-0"
                  alt=""
                />
              </div>

              <h4 className="text-[20px] font-Montserrat mt-[30px] text-[#3a336f] font-semibold uppercase text-center">
                Kalender Ekonomi
              </h4>

              <p className="text-[14px] mt-[12px] font-Open_Sans text-[#808080] text-center">
                Memuat jadwal berbagai peristiwa ekonomi yang berdampak pada
                pasar keuangan seperti rilis data ekonomi, kebijakan moneter,
                dan acara penting lainnya.
                <br />
              </p>
            </div>
            <div className="px-[20px] py-[35px] w-[276px] flex flex-col justify-start">
              <div className="mx-auto w-[145px] h-[145px] relative">
                <div className="bg-[#f1c50e] absolute w-[118px] h-[118px] rounded-full mr-[-1px] ml-[28px] z-10"></div>
                <Image
                  src={logo17156165ca5712}
                  className="w-[96px] z-20 absolute bottom-0"
                  alt=""
                />
              </div>

              <h4 className="text-[20px] font-Montserrat mt-[30px] text-[#3a336f] font-semibold uppercase text-center">
                Edukasi
              </h4>

              <p className="text-[14px] mt-[12px] font-Open_Sans text-[#808080] text-center">
                Tersedia Edukasi Trading dari Tenaga Profesional Vplus yang
                sudah sangat berpengalaman
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-max">
        <div className="xl:w-[1140px] mx-auto pt-[65px]">
          <h2 className="font-Montserrat font-bold text-center max-sm:text-[30px] max-sm:mb-[30px] sm:text-[60px] sm:mx-[60px] sm:mb-[50px]">
            Mulai trading dengan 4 langkah
          </h2>
          <div className="flex flex-wrap items-center justify-center w-full gap-9 max-sm:p-3">
            <div className="w-[545px] h-[271px] bg-[#3a336f] p-[30px] rounded-3xl max-sm:flex max-sm:flex-col max-sm:justify-center max-lg:h-max">
              <p className="text-white font-Open_Sans text-[20px] max-sm:text-center">
                Buka akun dengan mengisi email, nomor handphone dan data
                pribadi.
              </p>
              <button className="bg-[#f1c50e] mt-[20px] py-[18px] px-[30px] rounded-xl">
                <p className="font-Open_Sans text-[12px] uppercase text-[#3a336f] font-bold">
                  Daftar
                </p>
              </button>
            </div>
            <div className="w-[545px] h-[271px] bg-[#f1c50e] p-[30px] rounded-3xl max-sm:flex max-sm:flex-col max-sm:justify-center max-lg:h-max">
              <p className="text-black font-Open_Sans text-[20px] max-sm:text-center">
                Verifikasi identitas dan data pribadi anda melalui tatap muka
                atau video call dengan wakil pialang berjangka berlisensi.
              </p>
              <button className="bg-white mt-[20px] py-[18px] px-[30px] rounded-xl">
                <p className="font-Open_Sans text-[12px] uppercase text-[#3a336f] font-bold">
                  Verifikasi
                </p>
              </button>
            </div>
            <div className="w-[545px] h-[271px] bg-[#f1c50e] p-[30px] rounded-3xl max-sm:flex max-sm:flex-col max-sm:justify-center max-lg:h-max">
              <p className="text-black font-Open_Sans text-[20px] max-sm:text-center">
                Lakukan deposit di bank - bank yang sudah terdaftar di BAPPEBTI
                sebagai rekening terpisah broker.
              </p>
              <button className="bg-white mt-[20px] py-[18px] px-[30px] rounded-xl">
                <p className="font-Open_Sans text-[12px] uppercase text-[#3a336f] font-bold">
                  Deposit
                </p>
              </button>
            </div>
            <div className="w-[545px] h-[271px] bg-[#3a336f] p-[30px] rounded-3xl max-sm:flex max-sm:flex-col max-sm:justify-center max-lg:h-max">
              <p className="text-white font-Open_Sans text-[20px] max-sm:text-center">
                Dapatkan keuntungan dengan trading Forex, Emas, Minyak dan
                Indeks.
              </p>
              <button className="bg-[#f1c50e] mt-[20px] py-[18px] px-[30px] rounded-xl">
                <p className="font-Open_Sans text-[12px] uppercase text-[#3a336f] font-bold">
                  Trading
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1c50e] max-xl:mt-[20px] xl:mt-[60px] xl:py-[40px]">
        <div className="pt-[30px] flex justify-center items-center max-lg:flex-col mx-auto sm:max-lg:w-[545px] xl:w-[1140px] md:max-xl:px-[30px] max-[1141px]:pb-[30px]">
          <div className="w-max">
            <h1 className="font-Montserrat font-bold w-max max-xl:text-[30px] max-sm:text-center xl:text-[60px]">
              Platform Trading
            </h1>
            <div className="flex justify-center w-max mt-[20px] max-sm:flex-col max-sm:gap-5">
              <div className="w-[266px]">
                <h3 className="text-[20px] font-Open_Sans font-bold">
                  Web Trader
                </h3>
                <ul className="list-disc ">
                  <li>Tidak perlu tambahan software</li>
                  <li>Eksekusi Cepat</li>
                  <li>Order dalam 1x klik</li>
                </ul>

                <button className="max-md:mt-5 md:mt-[40px] py-[18px] px-[40px] rounded-xl bg-[#3a336f] w-max max-sm:w-full">
                  <p className=" text-[#f1c50e] font-Open_Sans text-[12px] uppercase font-bold">
                    lebih lanjut
                  </p>
                </button>
              </div>

              <div className="w-[266px]">
                <h3 className="text-[20px] font-Open_Sans font-bold">
                  Trade on Mobile & PC
                </h3>
                <ul className="list-disc ">
                  <li>Lebih dari 50 Indikator Teknikal yang sudah terinstal</li>
                  <li>Lebih dari 20 Alat Analisa Chart</li>
                  <li>3 Tipe Chart & 9 Timeframe</li>
                </ul>

                <button className="max-sm:mt-5 md:mt-[20px] py-[18px] px-[40px] rounded-xl bg-[#3a336f] max-sm:w-full">
                  <p className=" text-[#f1c50e] font-Open_Sans text-[12px] uppercase font-bold">
                    lebih lanjut
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-max max-sm:w-full max-md:px-3 max-md:pt-3">
            <Image
              src={metatrader5multiassetplatform_2xremovebgpreview}
              alt=""
            ></Image>
          </div>
        </div>
      </section>

      {/* <section className="h-max mb-[60px]">
        <div className="xl:w-[1140px] mx-auto pt-[65px]">
          <h2 className="font-Montserrat font-bold w-full max-md:mb-[30px] max-md:text-[30px] md:max-xl:text-[60px] text-center xl:text-[60px] md:mb-[50px]">
            We'll help manage your business
          </h2>
          <div className="flex flex-wrap gap-[15px] justify-center max-sm:px-[10px]">
            <div className="w-[369px] bg-[#f1c50e] rounded-3xl h-[369px] p-[30px] flex flex-col justify-center items-center">
              <h4 className="text-[30px] font-Montserrat uppercase tracking-wide font-medium max-sm:text-center">
                Tentang Vplus
              </h4>
              <div className="mt-[40px]">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  fill="#3a336f"
                  className="w-[148px] "
                >
                  <switch>
                    <g>
                      <path d="m44.995 30.137c177.734.066 308.272 41.013 388.681 121.784l-27.774.182c-8.284.054-14.956 6.812-14.901 15.093.055 8.481 7.089 15.015 15.098 14.897l61-.399c8.278-.054 14.956-6.813 14.901-15.094l-.399-60.583c-.056-8.499-7.105-15.014-15.098-14.897-8.284.054-14.956 6.813-14.901 15.094l.141 21.422c-52.459-51.201-123.983-87.502-213.221-108.096-97.482-22.497-195.02-19.395-193.522-19.395-8.282 0-14.997 6.71-15 14.99-.003 8.282 6.71 14.999 14.995 15.002z"></path>
                      <path d="m497 271.068h-15v-44.987c0-8.282-6.716-14.996-15-14.996h-61c-8.284 0-15 6.714-15 14.996v44.987h-30v-134.462c0-8.282-6.716-14.996-15-14.996h-60c-8.284 0-15 6.714-15 14.996v134.462h-30v-164.953c0-8.282-6.716-14.996-15-14.996h-61c-8.284 0-15 6.714-15 14.996v164.953h-30v-194.944c0-8.282-6.716-14.996-15-14.996h-60c-8.284 0-15 6.714-15 14.996v194.945h-15c-8.284 0-15 6.714-15 14.996v210.94c0 8.281 6.716 14.995 15 14.995h482c8.284 0 15-6.714 15-14.996v-210.94c0-8.282-6.716-14.996-15-14.996zm-88.743 210.941h-304.514c-6.34-37.62-36.112-67.384-73.743-73.722v-33.504c37.631-6.339 67.403-36.102 73.743-73.722h304.514c6.34 37.62 36.112 67.384 73.743 73.722v33.504c-37.631 6.338-67.403 36.101-73.743 73.722zm73.743-180.949v43.089c-21.053-5.437-37.663-22.042-43.101-43.089zm-61-59.983h31v29.991h-31zm-120-89.475h30v119.466h-30zm-121-30.491h31v149.957h-31zm-120-29.992h30v179.949h-30zm13.101 209.941c-5.438 21.047-22.048 37.652-43.101 43.089v-43.089zm-43.101 137.859c21.053 5.437 37.663 22.042 43.101 43.089h-43.101zm408.899 43.09c5.439-21.047 22.048-37.652 43.101-43.089v43.089z"></path>
                      <path d="m256 331.051c-33.084 0-60 26.908-60 59.983s26.916 59.983 60 59.983 60-26.908 60-59.983-26.916-59.983-60-59.983zm0 89.975c-16.542 0-30-13.454-30-29.992 0-16.537 13.458-29.991 30-29.991s30 13.454 30 29.991c0 16.538-13.458 29.992-30 29.992z"></path>
                      <path d="m151 376.039h-30c-8.284 0-15 6.714-15 14.996s6.716 14.996 15 14.996h30c8.284 0 15-6.714 15-14.996s-6.716-14.996-15-14.996z"></path>
                      <path d="m391 376.039h-30c-8.284 0-15 6.714-15 14.996s6.716 14.996 15 14.996h30c8.284 0 15-6.714 15-14.996s-6.716-14.996-15-14.996z"></path>
                    </g>
                  </switch>
                </svg>
              </div>
            </div>
            <div className="w-[369px] bg-center bg-cover brightness-100 bg-[url('../assets/images/bf5831c7-be61-2575-6483-f38c1ca09a87.jpg')] rounded-3xl h-[369px] p-[30px] flex flex-col justify-center items-center">
              <h4 className="text-[30px] font-Montserrat uppercase tracking-wide font-medium text-white max-sm:text-center">
                TRADING
              </h4>
              <div className="mt-[40px]">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  fill="#cfcfcf"
                  className="w-[148px] "
                >
                  <switch>
                    <g>
                      <path d="m511.4 38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145 20.248-80.545 54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335 7.423-30.161 17.747l-51.154 77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877 16.003l63.171 9.784c-.223 1.228-.447 2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992 87.993c7.533 7.533 17.712 11.686 28.142 11.686 2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429 3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877 3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001 10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82 17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585 39.719-76.791 41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197 62.223-23.927 91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382 7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534 11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534 11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661 91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233 20.213-47.756 34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431 30.575-36.655 68.602-68.276 104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027 4.273 9.301 9.302 2.071 37.988.104 112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"></path>
                      <path d="m350.721 236.243c19.202-.002 38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999 21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967 32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031 21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499 8.499 13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638 0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"></path>
                      <path d="m15.301 421.938c3.839 0 7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-48.972 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"></path>
                      <path d="m119.761 392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.767 4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858 5.859-15.355.001-21.213z"></path>
                      <path d="m143.429 437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212 0z"></path>
                    </g>
                  </switch>
                </svg>
              </div>
            </div>
            <div className="w-[369px] bg-[#3a336f] rounded-3xl h-[369px] p-[30px] flex flex-col justify-center items-center">
              <h4 className="text-[30px] font-Montserrat uppercase tracking-wide font-medium text-white max-sm:text-center">
                ANALISA
              </h4>
              <div className="mt-[40px]">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  fill="#f1c50e"
                  className="w-[148px] "
                >
                  <switch>
                    <g>
                      <path d="m333.696 213.433c5.272-2.056 7.053-2.747 23.624 1.301l46.526 11.778.12.03c27.078 6.62 48.859-28.524 53.763-37.189 5.517-8.342 7.47-18.303 5.499-28.141-2.021-10.093-7.904-18.714-16.564-24.275-6.386-4.102-16.288-12.189-27.754-21.554-22.364-18.266-52.993-43.28-85.469-61.506-6.547-3.674-13.414-6.528-20.525-8.537l-.259-45.34-15.491.599c-1.565.061-15.722.828-30.501 9.017-12.157 6.736-26.569 19.508-31.789 43.152-9.16.926-22.034 3.343-36.854 9.313-25.458 10.256-61.853 33.544-90.658 86.253-13.734 25.13-25.362 73.345-31.106 128.976-3.625 35.112-4.304 76.13-1.614 97.531l1.65 13.13h49.119c-.347.773-.693 1.527-1.038 2.246-4.681 9.77-9.658 16.039-12.79 19.421h-10.475c-17.506 0-31.749 14.242-31.749 31.749v36.584h-25.366v30h408v-30h-25.366v-36.584c0-17.507-14.243-31.749-31.749-31.749h-18.426c1.509-12.725 1.99-32.949-10.9-60.974-15.439-33.563-31.919-65.015-45.161-90.285-6.804-12.984-14.142-26.988-19.241-37.554.886-.077 1.771-.166 2.655-.267 16.396-1.87 24.516-5.033 29.889-7.125zm-230.333 144.538c-.977-20.828.021-51.285 2.736-77.581 5.275-51.095 15.847-96.183 27.589-117.67 7.768-14.215 16.432-26.632 25.941-37.217-21.947 43.021-29.617 103.402-23.416 184.035 1.484 19.291.416 35.329-1.882 48.433zm291.517 81.667c.964 0 1.749.784 1.749 1.749v36.584h-297.268v-36.584c0-.965.785-1.749 1.749-1.749zm-127.702-221.796c3.688 10.434 11.857 26.246 26.642 54.461 13.082 24.966 29.363 56.037 44.479 88.898 10.82 23.522 9.339 38.396 7.894 48.437h-198.173c11.226-20.311 21.89-53.189 18.106-102.4-6.127-79.678 2.237-139.052 24.86-176.475 17.66-29.212 40.662-40.498 62.709-49.555l8.74-3.591.536-9.434c.856-15.075 6.557-25.499 17.427-31.867.819-.48 1.641-.921 2.458-1.324l.203 35.653 12.92 1.743c7.99 1.078 15.655 3.652 22.78 7.65 30.2 16.948 59.662 41.01 81.173 58.579 12.679 10.355 22.693 18.534 30.519 23.561 2.371 1.522 3.123 3.739 3.36 4.926.238 1.187.397 3.525-1.206 5.847l-.414.604-.345.616c-6.68 11.931-17.019 22.58-20.994 23.169l-46.235-11.705-.12-.03c-23.373-5.712-30.652-4.426-41.689-.127-4.626 1.802-9.87 3.844-22.404 5.274-8.047.919-16.162.398-24.117-1.546-6.456-1.577-12.609-4.052-18.288-7.354l-15.08 25.934c7.58 4.407 15.731 7.785 24.259 10.056z"></path>
                      <path d="m310.526 141.971c7.846 0 15.363-6.899 15-15-.364-8.127-6.591-15-15-15-7.846 0-15.363 6.899-15 15 .365 8.127 6.591 15 15 15z"></path>
                    </g>
                  </switch>
                </svg>
              </div>
            </div>
            <div className="w-[369px] bg-[#3a336f] rounded-3xl h-[369px] p-[30px] flex flex-col justify-center items-center">
              <h4 className="text-[30px] font-Montserrat uppercase tracking-wide font-medium text-white max-sm:text-center">
                NEWS & UPDATE
              </h4>
              <div className="mt-[40px]">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  fill="#cfcfcf"
                  className="w-[148px] "
                >
                  <switch>
                    <g>
                      <g>
                        <path d="M165,332c-7.99,0-15-7.477-15-16c0-6.286,3.965-11.953,9.866-14.103c7.7-2.806,16.673,0.999,24.606,10.445    c5.33,6.344,14.79,7.167,21.134,1.839s7.167-14.79,1.839-21.133c-8.109-9.656-17.548-16.293-27.445-19.625V256    c0-8.284-6.716-15-15-15s-15,6.716-15,15v17.572c-0.134,0.047-0.268,0.088-0.401,0.137C131.895,280.157,120,297.153,120,316    c0,11.955,4.597,23.347,12.944,32.079C141.526,357.056,152.911,362,165,362c8.271,0,15,6.729,15,15    c0,6.042-3.596,11.468-9.159,13.825c-6.717,2.844-14.755,0.417-22.059-6.659c-5.951-5.764-15.445-5.614-21.211,0.335    c-5.764,5.95-5.614,15.446,0.336,21.21c6.772,6.561,14.301,11.197,22.093,13.813V437c0,8.284,6.716,15,15,15s15-6.716,15-15    v-17.571c18.295-6.504,30-23.575,30-42.429C210,352.187,189.813,332,165,332z"></path>
                        <path d="M463,18.844C435.379,6.692,399.155,0,361,0c-78.082,0-150,28.671-150,75c0,11.591,0,101.714,0,112.545    c-14.791-4.307-30.239-6.545-46-6.545c-43.972,0-85.406,17.376-116.67,48.928C17.164,261.381,0,302.958,0,347    c0,90.981,74.019,165,165,165c30.361,0,59.55-8.159,85.059-23.438C277.958,503.529,317.713,512,361,512    c38.155,0,74.379-6.692,102-18.844c31.598-13.901,49-33.845,49-56.156c0-9.342,0-352.464,0-362    C512,52.688,494.598,32.745,463,18.844z M165,482c-74.439,0-135-60.561-135-135c0-74.991,60.561-136,135-136    c74.99,0,136,61.009,136,136C301,421.439,239.99,482,165,482z M482,437c0,18.348-47.137,45-121,45    c-31.422,0-61.106-5.036-83.63-13.86c1.589-1.46,3.161-2.943,4.703-4.47c13.507-13.384,24.406-28.635,32.467-45.148    C329.443,420.82,345.011,422,361,422c39.443,0,88.356-7.667,121-29.019V437z M482,347c0,18.348-47.137,45-121,45    c-12.237,0-24.166-0.765-35.661-2.246C329.066,375.97,331,361.627,331,347c0-5.889-0.321-11.733-0.935-17.517    c10.104,1,20.445,1.517,30.935,1.517c39.446,0,88.355-7.668,121-29.019V347z M482,256c0,18.348-47.137,45-121,45    c-12.768,0-25.26-0.835-37.274-2.458c-7.785-25.252-21.674-48.495-40.917-67.958C306,237.356,332.938,241,361,241    c39.446,0,88.355-7.668,121-29.019V256z M482,166c0,18.348-47.137,45-121,45c-34.007,0-65.745-5.782-89.367-16.281    C252.737,186.322,241,175.317,241,166v-44.805C273.474,142.481,321.972,150,361,150c39.446,0,88.355-7.668,121-29.019V166z     M361,120c-73.276,0-120-26.255-120-45c0-18.803,46.857-45,120-45c73.863,0,121,26.652,121,45S434.863,120,361,120z"></path>
                      </g>
                    </g>
                  </switch>
                </svg>
              </div>
            </div>
            <div className="w-[369px] bg-[#f1c50e] rounded-3xl h-[369px] p-[30px] flex flex-col justify-center items-center">
              <h4 className="text-[30px] font-Montserrat uppercase tracking-wide font-medium text-black max-sm:text-center">
                PROMOSI
              </h4>
              <div className="mt-[40px]">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  fill="#3a336f"
                  className="w-[148px] "
                >
                  <switch>
                    <g>
                      <path d="M446.977,201.914L277.316,32.253c-17.539-17.54-46.081-17.541-63.622,0c-15.768,15.767-17.126,39.814-5.482,56.985    l-0.236,1.181c-12.232,61.165-42.011,116.809-86.12,160.917l-77.819,77.819c-17.582,17.583-17.585,46.039,0,63.622l42.414,42.414    c17.581,17.582,46.039,17.583,63.622,0l10.604-10.604l74.226,74.226c17.582,17.583,46.038,17.584,63.621,0    c17.541-17.54,17.541-46.081,0-63.621l-31.811-31.811l10.604-10.604c17.582-17.581,17.584-46.037,0-63.621l-7.206-7.207    c35.449-24.819,75.708-42.098,118.701-50.697l1.196-0.239c17.553,11.851,41.544,9.946,56.969-5.479h0.001    C464.516,247.995,464.516,219.455,446.977,201.914z M128.866,413.984c-5.86,5.859-15.348,5.86-21.208-0.001l-42.414-42.414    c-5.861-5.862-5.861-15.346,0-21.207l74.225-74.226l63.622,63.622C195.829,347.02,136.307,406.542,128.866,413.984z     M277.316,456.398c5.846,5.846,5.846,15.36,0,21.207c-5.846,5.846-15.361,5.846-21.207,0l-74.226-74.226l21.208-21.207    L277.316,456.398z M224.298,360.965c4.508-4.508,11.256-11.413,21.906-20.509l9.905,9.906c5.861,5.861,5.861,15.345,0,21.207    l-10.604,10.604L224.298,360.965z M224.935,319.189l-64.898-64.898c34.779-40.159,59.685-87.564,73.01-139.064l130.952,130.952    C312.499,259.503,265.095,284.409,224.935,319.189z M425.767,244.326c-5.861,5.86-15.346,5.86-21.207,0L234.901,74.667    c-5.861-5.862-5.861-15.346,0-21.207c5.861-5.861,15.347-5.861,21.208,0l169.658,169.658    C431.613,228.965,431.613,238.478,425.767,244.326z"></path>
                      <path d="M150.072,329.154c-5.855-5.856-15.351-5.856-21.207,0l-21.207,21.207c-5.856,5.856-5.856,15.351,0,21.207    c5.855,5.856,15.352,5.856,21.207,0l21.207-21.207C155.928,344.505,155.928,335.01,150.072,329.154z"></path>
                      <path d="M346.19,0c-8.282,0-14.996,6.714-14.996,14.996v29.992c0,8.282,6.714,14.996,14.996,14.996s14.996-6.714,14.996-14.996    V14.996C361.186,6.714,354.472,0,346.19,0z"></path>
                      <path d="M466.157,119.966h-29.992c-8.282,0-14.996,6.714-14.996,14.996s6.714,14.996,14.996,14.996h29.992    c8.282,0,14.996-6.714,14.996-14.996S474.438,119.966,466.157,119.966z"></path>
                      <path d="M446.769,34.383c-5.855-5.856-15.351-5.856-21.207,0L395.57,64.375c-5.856,5.856-5.856,15.351,0,21.207    c5.855,5.856,15.351,5.857,21.207,0l29.992-29.992C452.625,49.734,452.625,40.24,446.769,34.383z"></path>
                    </g>
                  </switch>
                </svg>
              </div>
            </div>
            <div className="w-[369px] bg-center bg-cover brightness-100 bg-[url('../assets/images/wewe.jpg')] rounded-3xl h-[369px] p-[30px] flex flex-col justify-center items-center">
              <h4 className="text-[30px] font-Montserrat uppercase tracking-wide font-medium text-white max-sm:text-center">
                MEMBERSHIP
              </h4>
              <div className="mt-[40px]">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  fill="#cfcfcf"
                  className="w-[148px] "
                >
                  <switch>
                    <g>
                      <path d="M269.145,240.999h-26.292c-13.474,0-24.435-10.961-24.435-24.434c0-13.474,10.962-24.437,24.435-24.437h52.583    c8.284,0,15-6.716,15-15s-6.716-15-15-15h-24.437v-24.438c0-8.285-6.716-15.001-15-15.001c-8.284,0-15,6.716-15,15v24.484    c-29.159,0.983-52.581,24.995-52.581,54.39c0,30.015,24.42,54.434,54.435,54.434h26.292c13.475,0,24.438,10.963,24.438,24.439    c0,13.474-10.963,24.436-24.438,24.436h-52.582c-8.284,0-15,6.716-15,15s6.716,15,15,15h24.436v24.437c0,8.284,6.716,15,15,15    c8.284,0,15-6.716,15-15v-24.483c29.16-0.982,52.584-24.994,52.584-54.389C323.582,265.419,299.161,240.999,269.145,240.999z"></path>
                      <path d="M442.762,321.127c-7.59-3.318-16.434,0.148-19.751,7.739c-29.018,66.405-94.573,109.313-167.014,109.313    c-89.499,0-165.35-66.392-179.719-152.472l39.786,26.584c6.888,4.603,16.203,2.75,20.806-4.139    c4.603-6.888,2.749-16.203-4.139-20.806l-65.583-43.821c-3.308-2.21-7.358-3.013-11.26-2.24c-3.902,0.776-7.335,3.071-9.546,6.379    L2.529,313.247c-4.602,6.889-2.748,16.204,4.14,20.806c2.56,1.711,5.455,2.529,8.319,2.529c4.841,0,9.595-2.341,12.486-6.668    l20.692-30.972c8.42,41.121,28.882,78.841,59.51,108.786c39.874,38.983,92.548,60.453,148.322,60.453    c84.364,0,160.712-49.969,194.503-127.302C453.819,333.287,450.354,324.444,442.762,321.127z"></path>
                      <path d="M505.333,177.949c-6.89-4.602-16.204-2.749-20.806,4.139l-20.695,30.971c-8.42-41.122-28.882-78.842-59.51-108.787    c-39.874-38.983-92.549-60.453-148.323-60.453c-84.363,0-160.711,49.97-194.503,127.302c-3.317,7.591,0.148,16.434,7.739,19.751    s16.434-0.148,19.752-7.739c29.017-66.404,94.573-109.314,167.013-109.314c89.498,0,165.349,66.393,179.72,152.472l-39.786-26.582    c-6.889-4.604-16.203-2.749-20.806,4.139c-4.602,6.889-2.749,16.204,4.14,20.806l65.581,43.818    c2.56,1.711,5.455,2.529,8.319,2.529c4.842,0,9.594-2.34,12.485-6.668l43.818-65.577    C514.073,191.866,512.22,182.551,505.333,177.949z"></path>
                    </g>
                  </switch>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="relative z-0 h-full">
        <div className="bg-[#f1c50e] absolute z-10 w-full h-full"></div>
        <div className="h-[427px] w-full bg-center bg-cover brightness-50 bg-[url('../assets/images/4e7f28cb-e9a6-4d5c-a40f-edcf9e022f52.jpg')] absolute z-20"></div>
        <div className="w-[1140px] mx-auto">
          <div className="relative z-30 flex flex-col items-center pt-[100px] px-[20px] pb-[30px]">
            <h2 className="text-[48px] font-Montserrat text-white font-bold">
              Vplus membantu anda memahami trading
            </h2>
            <p className="text-[20px] font-Open_Sans text-white mt-[37px]">
              Berbagai produk trading yang perlu anda ketahui.
            </p>
            <div className="flex gap-6 mt-12">
              <div>
                <div className="w-[261px] bg-[#f1c50e] h-[20px]"></div>
                <div className="flex drop-shadow-2xl flex-col items-center bg-white rounded-b-3xl h-[351px] w-[261px] py-[30px] px-[20px]">
                  <h2 className="text-[36px] font-Montserrat text-black font-bold">
                    Forex
                  </h2>
                  <h3 className="uppercase text-[16px] font-Open_Sans mt-[16px] tracking-wider font-semibold">
                    Mata Uang asing
                  </h3>
                  <p className="text-[16px] font-Open_Sans mt-[16px] text-slate-600 text-center">
                    EURUSD, GBPUSD, NZDUSD, AUDUSD, USDJPY, USDCHF, USDCAD dan
                    beberapa mata uang lainnya.
                  </p>
                </div>
              </div>
              <div>
                <div className="w-[261px] bg-[#f1c50e] h-[20px]"></div>
                <div className="flex drop-shadow-2xl flex-col items-center bg-white rounded-b-3xl h-[351px] w-[261px] py-[30px] px-[20px]">
                  <h2 className="text-[36px] font-Montserrat text-black font-bold">
                    Index
                  </h2>
                  <h3 className="uppercase text-[16px] font-Open_Sans mt-[16px] tracking-wider font-semibold">
                    GABUNGAN SAHAM
                  </h3>
                  <p className="text-[16px] font-Open_Sans mt-[16px] text-slate-600 text-center">
                    Nasdaq100, SP500, Dowjones dan Index Asia.
                  </p>
                </div>
              </div>
              <div>
                <div className="w-[261px] bg-[#f1c50e] h-[20px]"></div>
                <div className="flex drop-shadow-2xl flex-col items-center bg-white rounded-b-3xl h-[351px] w-[261px] py-[30px] px-[20px]">
                  <h2 className="text-[36px] font-Montserrat text-black font-bold">
                    Komoditi
                  </h2>
                  <h3 className="uppercase text-[16px] font-Open_Sans mt-[16px] tracking-wider font-semibold">
                    HASIL ALAM
                  </h3>
                  <p className="text-[16px] font-Open_Sans mt-[16px] text-slate-600 text-center">
                    XAUUSD, XAGUSD, OIL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="">
        <div className="bg-[url('../assets/images/-min.jpg')] w-full h-max bg-cover bg-center">
          <div className="w-[1140px] mx-auto py-16">
            <div className="w-[570px] h-[478px] p-[30px] bg-white rounded-3xl flex justify-center flex-col ">
              <h2 className="text-[60px] font-Montserrat text-black font-bold">
                Hasilkan Uang Dengan Klik
              </h2>
              <p className="text-[24px] font-Open_Sans mt-[20px]">
                Hasilkan uang dengan klik melalui HP anda.
              </p>
              <button className="uppercase text-[#3a336f] bg-[#f1c50e] mt-[20px] text-[12px] py-[15px] px-[41px] w-[172px] h-[50px] font-bold rounded-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="">
        <div className="relative">
          <div className="bg-[#3a336f] absolute z-10 w-full h-full"></div>
          <div className="bg-[#f1c50e] w-full h-[536px] absolute z-20"></div>
          <div className="flex flex-col justify-center">
            <div className="w-[1140px] mx-auto py-16 relative z-30">
              <h1 className="text-[60px] font-Montserrat text-black font-bold text-center mb-11">
                Good To Know
              </h1>
              {domLoaded && (
                <div className="flex flex-wrap gap-4">
                  <div className="w-[368px] h-[364px] rounded-xl overflow-hidden">
                    <ReactPlayer
                      url="https://youtu.be/Q-TGwIGBbjY?si=nCiFv3TwtJ_BWsrx"
                      width={"100%"}
                      height={"100%"}
                      light={
                        <Image
                          className="rounded-xl w-[368px] h-[364px]"
                          src={tesImage}
                          alt="Thumbnail"
                        />
                      }
                    />
                  </div>
                  <div className="w-[368px] h-[364px] rounded-xl overflow-hidden">
                    <ReactPlayer
                      url="https://youtu.be/Q-TGwIGBbjY?si=nCiFv3TwtJ_BWsrx"
                      width={"100%"}
                      height={"100%"}
                      light={
                        <Image
                          className="rounded-xl w-[368px] h-[364px]"
                          src={tesImage}
                          alt="Thumbnail"
                        />
                      }
                    />
                  </div>
                  <div className="w-[368px] h-[364px] rounded-xl overflow-hidden">
                    <ReactPlayer
                      url="https://youtu.be/Q-TGwIGBbjY?si=nCiFv3TwtJ_BWsrx"
                      width={"100%"}
                      height={"100%"}
                      light={
                        <Image
                          className="rounded-xl w-[368px] h-[364px]"
                          src={tesImage}
                          alt="Thumbnail"
                        />
                      }
                    />
                  </div>
                  <div className="w-[368px] h-[364px] rounded-xl overflow-hidden">
                    <ReactPlayer
                      url="https://youtu.be/Q-TGwIGBbjY?si=nCiFv3TwtJ_BWsrx"
                      width={"100%"}
                      height={"100%"}
                      light={
                        <Image
                          className="rounded-xl w-[368px] h-[364px]"
                          src={tesImage}
                          alt="Thumbnail"
                        />
                      }
                    />
                  </div>
                  <div className="w-[368px] h-[364px] rounded-xl overflow-hidden">
                    <ReactPlayer
                      url="https://youtu.be/Q-TGwIGBbjY?si=nCiFv3TwtJ_BWsrx"
                      width={"100%"}
                      height={"100%"}
                      light={
                        <Image
                          className="rounded-xl w-[368px] h-[364px]"
                          src={tesImage}
                          alt="Thumbnail"
                        />
                      }
                    />
                  </div>
                  <div className="w-[368px] h-[364px] rounded-xl overflow-hidden">
                    <ReactPlayer
                      url="https://youtu.be/Q-TGwIGBbjY?si=nCiFv3TwtJ_BWsrx"
                      width={"100%"}
                      height={"100%"}
                      light={
                        <Image
                          className="rounded-xl w-[368px] h-[364px]"
                          src={tesImage}
                          alt="Thumbnail"
                        />
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className="relative">
          <div className="bg-[#f1c50e] absolute z-10 w-full h-screen"></div>
          <div className="bg-[#3a336f] w-full h-[250px] absolute z-20"></div>
          <div className="flex flex-col justify-center">
            <div className="w-[1140px] mx-auto relative z-30 py-16">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white w-[270px] h-[290px] p-[30px] rounded-2xl drop-shadow-2xl flex items-center flex-col">
                  <Image
                    src={logo53523976a99baf}
                    alt=""
                    className="w-[64px] h-[64px]"
                  />
                  <h3 className="text-[20px] font-Montserrat text-[#3a336f] font-bold mt-[20px] text-center">
                    OUR MAIN OFFICE
                  </h3>
                  <p className="text-[16px] font-Open_Sans mt-[19px] text-black text-center">
                    Menara Rajawali 18th Floor, Jl. DR. Ide Anak Agung Gde Agung
                    Lot 5, Jakarta Selatan, DKI Jakarta 12950
                  </p>
                </div>
                <div className="bg-white w-[270px] h-[290px] p-[30px] rounded-2xl drop-shadow-2xl flex items-center flex-col">
                  <Image
                    src={logo159832139ed446}
                    alt=""
                    className="w-[64px] h-[64px]"
                  />
                  <h3 className="text-[20px] font-Montserrat text-[#3a336f] font-bold mt-[20px] text-center">
                    PHONE NUMBER
                  </h3>
                  <p className="text-[16px] font-Open_Sans mt-[19px] text-black text-center">
                    0812-1100-1797
                  </p>
                  <p className="text-[16px] font-Open_Sans text-black text-center">
                    021-576-1808
                  </p>
                </div>
                <div className="bg-white w-[270px] h-[290px] p-[30px] rounded-2xl drop-shadow-2xl flex items-center flex-col">
                  <Image
                    src={logo95383126691a72}
                    alt=""
                    className="w-[64px] h-[64px]"
                  />
                  <h3 className="text-[20px] font-Montserrat text-[#3a336f] font-bold mt-[20px] text-center">
                    FAX
                  </h3>
                  <p className="text-[16px] font-Open_Sans mt-[19px] text-black text-center">
                    021-576-2710
                  </p>
                </div>
                <div className="bg-white w-[270px] h-[290px] p-[30px] rounded-2xl drop-shadow-2xl flex items-center flex-col">
                  <Image
                    src={logo561127c47308a4}
                    alt=""
                    className="w-[64px] h-[64px]"
                  />
                  <h3 className="text-[20px] font-Montserrat text-[#3a336f] font-bold mt-[20px] text-center">
                    EMAIL
                  </h3>
                  <p className="text-[16px] font-Open_Sans mt-[19px] text-[#3a336f] text-center underline font-bold ">
                    <a href="mailto:digital@vplus.id">digital@vplus.id</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
