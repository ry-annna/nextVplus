import Image from "next/image";
import device1 from "../assets/images/device1.png";
import metatrader5 from "../assets/images/metatrader5.png";
import CustomFooter from "@/components/customFooter";
import logoplaystorelogo from "../assets/images/playstorelogo.png";
import logoappstorelogo from "../assets/images/appstorelogo.png";
import logodownloadmaclogo from "../assets/images/downloadmaclogo.png";
import logodownloadwindowslogo from "../assets/images/downloadwindowslogo.png";
import Head from "next/head";
import Link from "next/link";

const PlatformTradingPage = () => {
  return (
    <>
      <Head>
        <title>Platform Trading</title>
      </Head>
      <section className="flex justify-center">
        <div className="w-[1100px] h-full flex justify-between items-center py-[25px]">
          <div className="w-[550px] h-full px-10 py-5 text-white bg-gradient-to-tr from-[#3a336f] to-purple-500 rounded-3xl">
            <h1 className="text-[40px] font-Montserrat font-bold">
              Trading dengan <br />
              <span className="text-[#f1c50e] font-extrabold">
                MetaTrader 5
              </span>
            </h1>
            <div className="w-full pt-4">
              <p className="text-[16px] font-Open_Sans tracking-wide">
                Aplikasi trading terpopuler dengan lebih dari 38 indikator
                analisa, instant klik, dan dukungan algoritma trading yang bisa
                membantu memaksimalkan profit. Aplikasi trading terupdate untuk
                transaksi di semua instrumen trading. Meta Trader 5 menawarkan
                fitur-fitur unggulan seperti:
              </p>
            </div>
            <div className="flex w-full gap-3 py-4">
              <ul className="list-disc font-Open_Sans text-[16px] list-inside">
                <li>
                  Tampilan paling <span className="italic">user friendly</span>
                </li>
                <li>
                  Kemudahan menilai volatilitas pasar dengan fitur Depth of
                  Market (DOM)
                </li>
                <li>Buy & Sell hanya dengan satu klik</li>
                <li>Variasi tampilan timeframe hingga 21 timeframe</li>
                <li>Membuka 100 chart sekaligus</li>
                <li>Terdapat kalender ekonomi</li>
                <li>Tersedia 38 indikator teknikal dan 44 objek analisa</li>
              </ul>
            </div>
          </div>
          <div className="w-[500px] h-full flex flex-col justify-center">
            <Image className="h-full" alt="" src={metatrader5} />
            <Image className="h-full" alt="" src={device1} />
            <div className="mt-3">
              <div>
                <p className="text-[16px] font-Open_Sans font-bold">
                  Unduh untuk PC Desktop/Laptop
                </p>
                <div className="flex">
                  <Link
                    target="_blank"
                    href="https://download.mql5.com/cdn/web/pt.victory.international/mt5/victoryinternational5setup.exe"
                  >
                    <Image
                      className="w-[133px] h-full hover:scale-110 duration-300"
                      alt=""
                      src={logodownloadwindowslogo}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.pkg.zip?utm_source=vifx.co.id&amp;utm_campaign=vifx.co.id"
                  >
                    <Image
                      className="w-[133px] h-full hover:scale-110 duration-300"
                      alt=""
                      src={logodownloadmaclogo}
                    />
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-[16px] font-Open_Sans font-bold">
                  Unduh untuk Smartphone
                </p>
                <div className="flex">
                  <Link
                    target="_blank"
                    href="https://download.mql5.com/cdn/mobile/mt5/android?server=VictoryInternational-DEMO,VictoryInternational-REAL&amp;utm_source=vifx.co.id&amp;utm_campaign=vifx.co.id"
                  >
                    <Image
                      className="w-[133px] h-full hover:scale-110 duration-300"
                      alt=""
                      src={logoplaystorelogo}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://download.mql5.com/cdn/mobile/mt5/ios?server=VictoryInternational-DEMO,VictoryInternational-REAL&amp;utm_source=vifx.co.id&amp;utm_campaign=vifx.co.id"
                  >
                    <Image
                      className="w-[133px] h-full hover:scale-110 duration-300"
                      alt=""
                      src={logoappstorelogo}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export default PlatformTradingPage;
