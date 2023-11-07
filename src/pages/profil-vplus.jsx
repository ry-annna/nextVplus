import Image from "next/image";
import CustomFooter from "@/components/customFooter";
import bgcompanyprofile1 from "../assets/images/company-profile1.png";
import bgcompanyprofile2 from "../assets/images/company-profile2.png";
import Head from "next/head";

const ProfilVplusPage = () => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="trading, trading adalah, trading forex, olymp trade, hector trade, apa itu trading, apa itu trading forex, trading adalah, trading itu apa, apa itu bisnis trading, apa itu trading, arti trading forex, forex trading, forex, apa sih forex, forex trading adalah, broker adalah, apa itu broker, arti broker, broker terbaik, broker terpercaya, broker aman, broker resmi, broker legal, broker indonesia, profit, profit adalah, apa itu profit, apa yang dimaksud dengan profit, profit adalah, vplus, vplus id, vplus platinum 8, apa itu vplus, vplus indonesia, vplus adalah, victory international futures, vif platinum 8, victory international futures platinum 8, harga emas hari ini, harga emas, 1 gram emas, beli emas, emas, sinyal trading, autochartist, sinyal harian forex, sinyal trading forex, sinyal forex trading, sinyal forex harian, sinyal forex autochartist"
        />
        <meta
          name="description"
          content="Website Resmi Vplus Platinum 8 - Associate with PT Victory International Futures. Legal, Resmi &amp; Terpercaya, Rekening Terpisah, Tanpa Dealing, Semua Robot diperbolehkan, Tersedia Edukasi, Penarikan Dana Bebas dan Mudah, dan Spread Rendah."
        />
        <title>Profil Vplus</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <section className="w-[1140px] flex justify-center items-center h-full gap-[40px] py-[25px]">
          <div className="relative w-[250px] h-[100px]">
            <div className="bg-[#f1c50e] w-[250px] h-[100px] relative z-10">
              <div className="absolute z-20 flex flex-col justify-center left-5">
                <p className="leading-none font-extrabold uppercase text-[66px] font-Antonio">
                  About Vplus
                </p>
              </div>
            </div>
          </div>

          <div className="shrink">
            <p className="font-bold font-Open_Sans text-[20px]">Vplus.id</p>
            <p className="font-Open_Sans">
              Vplus Platinum 8 pertama kali dibentuk pada tahun 2020 dinaungi
              oleh PT Victory International Futures yang sepenuhnya diatur oleh
              BAPPEBTI. Vplus di sini memberikan berbagai layanan untuk
              memberdayakan klien dalam rencana trading dan investasi klien.
            </p>
          </div>
        </section>

        <section className="w-[1140px] flex flex-col justify-center items-center h-full py-[40px]">
          <div className="flex gap-10">
            <div className="flex flex-col items-center justify-center font-Open_Sans shrink w-[700px]">
              <h1 className="text-[40px] font-bold uppercase">our vision</h1>
              <p className="text-[11px] font-bold uppercase mb-[25px]">
                (solusi trading yang lebih efisien)
              </p>
              <p className="text-left">
                Sebagai layanan digital yang diasosiasikan oleh PT Victory
                International Futures, Vplus memberikan wawasan trading yang
                dinamis, pengetahuan profesional yang mendalam, dan kemampuan
                dalam memimpin pasar yang akan membantu nasabah kami untuk siap
                dalam menghadapi tantangan trading.
              </p>
            </div>

            <div className="relative w-[300px] h-[250px]">
              <div className="bg-[#f1c50e] w-[250px] h-[250px] rounded-full absolute z-10 right-0 top-0" />

              <Image
                className=" w-[250px] absolute z-20 left-0 bottom-0"
                alt=""
                src={bgcompanyprofile1}
              />
            </div>
          </div>

          <div className="flex gap-10">
            <div className="relative w-[300px] h-[250px]">
              <div className="bg-[#3a336f] w-[250px] h-[250px] rounded-full absolute z-10 left-0 top-0" />

              <Image
                className=" w-[250px] absolute z-20 right-0 bottom-0"
                alt=""
                src={bgcompanyprofile2}
              />
            </div>
            <div className="flex flex-col items-center justify-center font-Open_Sans shrink w-[700px]">
              <h1 className="text-[40px] font-bold uppercase">our mission</h1>
              <p className="text-[11px] font-bold uppercase mb-[25px]">
                (edukasi trader)
              </p>
              <p className="text-right">
                Vplus ​berkomitmen untuk meletakkan dasar yang tepat untuk para
                trader dalam mencapai tujuan trading dan menghasilkan potensi
                keuntungan sebanyak mungkin dari market.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="w-[1140px] flex justify-center items-center h-full gap-4 py-[25px]">
          <div className="relative w-[250px] h-[135px]">
            <div className="bg-[#f1c50e] w-[250px] h-[100px] relative z-10">
              <div className="absolute z-20 flex flex-col justify-center left-5">
                <p className="leading-none font-extrabold uppercase text-[66px] font-Antonio">
                  Kenapa Vplus ?
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <CustomFooter />
    </>
  );
};

export default ProfilVplusPage;
