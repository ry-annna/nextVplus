import Head from "next/head";
import Image from "next/image";
import logo1 from "../assets/images/Logo1.png";
import logo4 from "../assets/images/Logo4.png";
import logo3 from "../assets/images/Logo3.png";
import logo2 from "../assets/images/Logo2.png";
import CustomFooter from "@/components/customFooter";
import { SiLinkedin, SiIndeed } from "react-icons/si";
import Link from "next/link";

const KarirPage = () => {
  return (
    <>
      <Head>
        <title>Karir</title>
      </Head>

      <section className="flex justify-center max-md:px-4">
        <div className="md:w-[1100px] h-full flex justify-between items-center py-[25px]">
          <div className="w-full bg-gradient-to-tr from-[#4f4a72] to-purple-500 flex flex-col justify-center items-center pt-[20px] pb-[25px] rounded-3xl max-md:px-4">
            <h1 className="uppercase text-white font-Montserrat text-[60px] font-extrabold max-sm:text-center">
              vplus career
            </h1>
            <p className="uppercase text-white font-Open_Sans text-[16px] font-extrabold max-sm:text-center">
              Gabung Dengan Kami!
            </p>
            <p className="uppercase text-white font-Open_Sans text-[16px] font-extrabold max-sm:text-center">
              Berkarir dengan broker yang aman dan terpercaya
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="w-[1100px] h-full flex flex-col justify-between items-center py-[25px]">
          <div className="bg-[#f1c50e] py-[25px] px-[45px] rounded-full h-min min-[848px]:hidden">
            <p className="uppercase font-extrabold font-Montserrat text-[40px] text-white">
              benefits
            </p>
          </div>
          <div className="flex items-center justify-between w-full max-sm:flex-col">
            <div className="w-[230px] h-[300px] relative flex justify-center p-[15px]">
              <div className="bg-[#3a336f] absolute z-10 bottom-0 h-[200px] w-full rounded-2xl drop-shadow-2xl flex items-center flex-col" />
              <div className="relative top-0 z-20 flex flex-col items-center ">
                <div className="bg-slate-800 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                  <Image src={logo1} alt="" className="w-[96px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-Montserrat text-white font-bold mt-[20px] text-center uppercase">
                    basic salary & bonus
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-[#f1c50e] py-[25px] px-[45px] rounded-full h-min max-[848px]:hidden">
              <p className="uppercase font-extrabold font-Montserrat text-[50px] text-white">
                benefits
              </p>
            </div>
            <div className="w-[230px] h-[300px] relative flex justify-center p-[15px]">
              <div className="bg-[#3a336f] absolute z-10 bottom-0 h-[200px] w-full rounded-2xl drop-shadow-2xl flex items-center flex-col" />
              <div className="relative top-0 z-20 flex flex-col items-center ">
                <div className="bg-slate-800 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                  <Image src={logo4} alt="" className="w-[75px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-Montserrat text-white font-bold mt-[20px] text-center uppercase">
                    insentif unlimited
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:gap-[100px] w-full items-center max-sm:flex-col">
            <div className="w-[230px] h-[300px] relative flex justify-center p-[15px]">
              <div className="bg-[#3a336f] absolute z-10 bottom-0 h-[200px] w-full rounded-2xl drop-shadow-2xl flex items-center flex-col" />
              <div className="relative top-0 z-20 flex flex-col items-center ">
                <div className="bg-slate-800 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                  <Image src={logo3} alt="" className="w-[85px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-Montserrat text-white font-bold mt-[20px] text-center uppercase">
                    bonus yang menarik
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[230px] h-[300px] relative flex justify-center p-[15px]">
              <div className="bg-[#3a336f] absolute z-10 bottom-0 h-[200px] w-full rounded-2xl drop-shadow-2xl flex items-center flex-col" />
              <div className="relative top-0 z-20 flex flex-col items-center ">
                <div className="bg-slate-800 w-[150px] h-[150px] rounded-full flex items-center justify-center">
                  <Image src={logo2} alt="" className="w-[100px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-Montserrat text-white font-bold mt-[20px] text-center uppercase">
                    dukungan penuh
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:mt-[60px] flex justify-center">
        <div className="flex justify-center items-center flex-col bg-[#f1c50e] max-md:px-4 max-sm:py-6 w-full sm:py-[25px]">
          <div>
            <h1 className="font-Montserrat font-bold text-center sm:text-[40px] max-sm:text-[27px]">
              Temukan Peluang Anda bersama Vplus
            </h1>

            <p className="font-Montserrat max-md:mt-4">
              Temukan lowongan di Platform berikut :
            </p>

            <div className="mt-[10px] gap-4 flex flex-col max-md:mt-4">
              <Link
                href="https://www.linkedin.com/company/vplus-platinum-8-indonesia/"
                target="_blank"
              >
                <div className="flex items-center gap-3 duration-300 w-max hover:scale-110 group">
                  <SiLinkedin className="w-[30px] h-[30px] text-slate-700 group-hover:text-slate-100" />
                  <p className="font-semibold underline text-slate-700 group-hover:text-slate-100">
                    VPlus Platinum 8 Indonesia
                  </p>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/company/victory-international-platinum-8/"
                target="_blank"
              >
                <div className="flex items-center gap-3 duration-300 w-max hover:scale-110 group">
                  <SiLinkedin className="w-[30px] h-[30px] text-slate-700 group-hover:text-slate-100" />
                  <p className="font-semibold underline text-slate-700 group-hover:text-slate-100">
                    Vplus.id
                  </p>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/company/victory-international-platinum-8/"
                target="_blank"
              >
                <div className="flex items-center gap-3 duration-300 w-max hover:scale-110 group">
                  <SiIndeed className="w-[30px] h-[30px] text-slate-700 group-hover:text-slate-100" />
                  <p className="font-semibold underline text-slate-700 group-hover:text-slate-100">
                    PT. Victory International Platinum 8
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export default KarirPage;
