import Image from "next/image";
import Link from "next/link";
import bgTradingdiVplus from "../assets/images/TradingdiVplus.jpg";
import logo786473364171209 from "../assets/images/7864733-64171209.png";
import logo6484995c143c2a1 from "../assets/images/6484995-c143c2a1.png";
import logo1456874711af156 from "../assets/images/1456874-711af156.png";
import logo17466507612fe7f from "../assets/images/1746650-7612fe7f.png";
import logofavicon from "../assets/images/favicon.png";
import logo182864346f230bf from "../assets/images/1828643-46f230bf.png";
import AlurRegis from "@/components/alurRegis";
import CustomFooter from "@/components/customFooter";
import Head from "next/head";

const MulaiTradingPage = () => {
  return (
    <>
      <Head>
        <title>Mulai Trading</title>
      </Head>
      <section className="relative h-[300px]">
        <Image
          src={bgTradingdiVplus}
          className="h-full w-full object-cover absolute z-10 brightness-[0.4]"
          alt=""
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <h1 className="text-[60px] font-Montserrat font-bold text-white">
            Trading di Broker Pilihan Vplus
          </h1>
          <p className="text-white text-[20px] font-Open_Sans mt-[25px]">
            Fix Spread dan Komisi Rendah
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap bg-[#3a336f] justify-center">
          <div className="bg-[#3a336f] h-[300px] w-[360px] p-[30px] flex flex-col items-center justify-center">
            <Image src={logo786473364171209} className="" alt="" />
            <p className="text-[20px] font-Open_Sans text-white mt-[40px]">
              Lebih dari 70 Produk Trading
            </p>
          </div>
          <div className="bg-[#3a336f] h-[300px] w-[360px] p-[30px] flex flex-col items-center justify-center">
            <Image src={logo6484995c143c2a1} className="" alt="" />
            <p className="text-[20px] font-Open_Sans text-white mt-[40px]">
              Trading Condition Kompetitif
            </p>
          </div>
          <div className="bg-[#3a336f] h-[300px] w-[360px] p-[30px] flex flex-col items-center justify-center">
            <Image src={logo1456874711af156} className="" alt="" />
            <p className="text-[20px] font-Open_Sans text-white mt-[40px]">
              Diawasi &amp; Berlisensi
            </p>
          </div>
          <div className="bg-[#3a336f] h-[300px] w-[360px] p-[30px] flex flex-col items-center justify-center">
            <Image src={logo17466507612fe7f} className="" alt="" />
            <p className="text-[20px] font-Open_Sans text-white mt-[40px]">
              Keamanan Dana Terjamin
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-center w-full">
          <div className="w-[570px] h-[385px] p-[30px] flex flex-col justify-center">
            <p className="text-[30px] font-Open_Sans font-bold">Real Account</p>
            <p className="text-[16px] font-Open_Sans mt-[20px]">
              Isi detail pribadi anda di formulir pendaftaran kami dan
              depositkan dana anda dengan aman kemudian mulai trading.
            </p>
            <Link href={"/real-akun"}>
              <button className="bg-[#f1c50e] font-Open_Sans mt-[20px] w-max rounded-lg py-[10px] px-[30px] text-[#3a336f] font-semibold hover:bg-[#3a336f] hover:text-white">
                Buka Akun Real
              </button>
            </Link>
          </div>
          <div className="w-[570px] h-[385px] p-[30px] flex flex-col justify-center">
            <div className="bg-gradient-to-br from-[#3a336f] to-purple-500 h-[300px] w-full rounded-xl flex flex-col p-[30px]">
              <div className="flex flex-row items-center gap-2">
                <Image src={logofavicon} className="w-[36px] h-[36px]" alt="" />
                <p className="text-[30px] font-Open_Sans text-white font-bold">
                  Vplus
                </p>
              </div>
              <div className="mt-[20px]">
                <div className="justify-between text-[16px] font-Open_Sans text-white flex">
                  <p>Komisi</p>
                  <p>$1.1 per lot</p>
                </div>
                <div className="justify-between text-[16px] font-Open_Sans text-white flex">
                  <p>Spread</p>
                  <p>Fix &amp; Floating</p>
                </div>
                <div className="justify-between text-[16px] font-Open_Sans text-white flex">
                  <p>Leverage</p>
                  <p>1:400</p>
                </div>
                <div className="justify-between text-[16px] font-Open_Sans text-white flex">
                  <p>Min. Deposit</p>
                  <p>$500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-center w-full">
          <div className="w-[570px] h-[220px] p-[30px] flex flex-col justify-start">
            <p className="text-[30px] font-Open_Sans font-bold">Demo Account</p>
            <p className="text-[16px] font-Open_Sans mt-[20px]">
              Dengan dana virtual, asah skill trading anda dengan simulasi di
              akun demo dan memastikan kesiapan anda saat membuka Akun Real.
            </p>
          </div>
          <div className="w-[570px] h-[220px] p-[30px] flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <Image
                src={logo182864346f230bf}
                className="w-[20px] h-[20px]"
                alt=""
              />
              <p className="text-[20px] font-Open_Sans">
                Hingga $10.000 ​dana virtual
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={logo182864346f230bf}
                className="w-[20px] h-[20px]"
                alt=""
              />
              <p className="text-[20px] font-Open_Sans">Masa Aktif 1 Bulan</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={logo182864346f230bf}
                className="w-[20px] h-[20px]"
                alt=""
              />
              <p className="text-[20px] font-Open_Sans">
                Tersedia di semua platform
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={logo182864346f230bf}
                className="w-[20px] h-[20px]"
                alt=""
              />
              <p className="text-[20px] font-Open_Sans">
                Forex, Indeks, Komoditi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <AlurRegis />
      </section>

      <CustomFooter />
    </>
  );
};

export default MulaiTradingPage;
