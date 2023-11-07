import Image from "next/image";
import bgTradingdiVplus from "../assets/images/TradingdiVplus.jpg";
import { useState } from "react";
import {
  VplusProductsIndex,
  VplusProductsForex,
  VplusProductsMetal,
  VplusProductsEnergy,
} from "@/utils/listsGroup";
import CustomFooter from "@/components/customFooter";
import Head from "next/head";

const ProdukTradingPage = () => {
  const [toggle, setToggle] = useState(1);
  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <>
      <Head>
        <title>Produk Trading</title>
      </Head>
      <section className="relative h-[300px]">
        <Image
          src={bgTradingdiVplus}
          className="h-full w-full object-cover absolute z-10 brightness-[0.4]"
          alt=""
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <h1 className="text-[60px] font-Montserrat font-bold text-white text-center">
            Mengapa Trading dengan Broker <br />
            Rekomendasi Vplus?
          </h1>
          <p className="text-white text-[20px] font-Open_Sans mt-[25px]">
            Trading 24/5 di pasar terbesar di dunia, Fix Spread dan Komisi
            Rendah.
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="w-[1100px] p-[25px]">
          <div className="flex gap-1 font-Montserrat">
            <button
              onClick={() => updateToggle(1)}
              className={`${
                toggle === 1 ? "bg-[#3a336f] text-white" : "bg-[#f1c50e]"
              } py-[10px] px-[25px] font-bold rounded-l-lg grow hover:bg-[#3a336f] hover:text-white`}
            >
              Forex
            </button>
            <button
              onClick={() => updateToggle(2)}
              className={`${
                toggle === 2 ? "bg-[#3a336f] text-white" : "bg-[#f1c50e]"
              } py-[10px] px-[25px] font-bold grow hover:bg-[#3a336f] hover:text-white`}
            >
              Metal
            </button>
            <button
              onClick={() => updateToggle(3)}
              className={`${
                toggle === 3 ? "bg-[#3a336f] text-white" : "bg-[#f1c50e]"
              } py-[10px] px-[25px] font-bold grow hover:bg-[#3a336f] hover:text-white`}
            >
              Energy
            </button>
            <button
              onClick={() => updateToggle(4)}
              className={`${
                toggle === 4 ? "bg-[#3a336f] text-white" : "bg-[#f1c50e]"
              } py-[10px] px-[25px] font-bold rounded-r-lg grow hover:bg-[#3a336f] hover:text-white`}
            >
              Index
            </button>
          </div>
          <div
            className={`${
              toggle === 1 ? "block" : "hidden"
            } relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-5`}
          >
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 font-Open_Sans">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Instrumental
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contract Size
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Commision
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Margin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pip / Spread
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sesi Trading
                  </th>
                </tr>
              </thead>
              <tbody>
                {VplusProductsForex.map((item) => (
                  <tr
                    key={item.id}
                    className={`${
                      item.id % 2 !== 0 ? "bg-white" : "bg-gray-100"
                    } border-b 1 font-Montserrat`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">{item.contractSize}</td>
                    <td className="px-6 py-4">{item.commision}</td>
                    <td className="px-6 py-4">{item.margin}</td>
                    <td className="px-6 py-4">{item.spread}</td>
                    <td className="px-6 py-4">{item.sesiTrading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className={`${
              toggle === 2 ? "block" : "hidden"
            } relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-5`}
          >
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 font-Open_Sans">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Instrumental
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contract Size
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Commision
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Margin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pip / Spread
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sesi Trading
                  </th>
                </tr>
              </thead>
              <tbody>
                {VplusProductsMetal.map((item) => (
                  <tr
                    key={item.id}
                    className={`${
                      item.id % 2 !== 0 ? "bg-white" : "bg-gray-100"
                    } border-b 1 font-Montserrat`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">{item.contractSize}</td>
                    <td className="px-6 py-4">{item.commision}</td>
                    <td className="px-6 py-4">{item.margin}</td>
                    <td className="px-6 py-4">{item.spread}</td>
                    <td className="px-6 py-4">{item.sesiTrading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className={`${
              toggle === 3 ? "block" : "hidden"
            } relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-5`}
          >
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 font-Open_Sans">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Instrumental
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contract Size
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Commision
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Margin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pip / Spread
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sesi Trading
                  </th>
                </tr>
              </thead>
              <tbody>
                {VplusProductsEnergy.map((item) => (
                  <tr
                    key={item.id}
                    className={`${
                      item.id % 2 !== 0 ? "bg-white" : "bg-gray-100"
                    } border-b 1 font-Montserrat`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">{item.contractSize}</td>
                    <td className="px-6 py-4">{item.commision}</td>
                    <td className="px-6 py-4">{item.margin}</td>
                    <td className="px-6 py-4">{item.spread}</td>
                    <td className="px-6 py-4">{item.sesiTrading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className={`${
              toggle === 4 ? "block" : "hidden"
            } relative overflow-x-auto shadow-md sm:rounded-lg w-full mt-5`}
          >
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 font-Open_Sans">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Instrumental
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contract Size
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Commision
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Margin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Pip / Spread
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sesi Trading
                  </th>
                </tr>
              </thead>
              <tbody>
                {VplusProductsIndex.map((item) => (
                  <tr
                    key={item.id}
                    className={`${
                      item.id % 2 !== 0 ? "bg-white" : "bg-gray-100"
                    } border-b 1 font-Montserrat`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.title}
                    </th>
                    <td className="px-6 py-4">{item.contractSize}</td>
                    <td className="px-6 py-4">{item.commision}</td>
                    <td className="px-6 py-4">{item.margin}</td>
                    <td className="px-6 py-4">{item.spread}</td>
                    <td className="px-6 py-4">{item.sesiTrading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="flex justify-center mb-7">
        <div className="w-[1100px] flex flex-col font-Open_Sans">
          <p className="text-[30px] font-bold mb-3">Mekanisme Transaksi</p>
          <ul className="list-disc">
            <li>
              Untuk setiap transaksi, Nasabah maksimum hanya dapat membeli atau
              menjual 50 lot / klik.
            </li>
            <li>
              Amanat didasarkan pada harga sedia beli (bid) dan harga sedia jual
              (offer) yang diberikan secara on-line oleh Penyelenggara SPA dan
              dapat di monitor oleh Nasabah secara langsung dan/atau melalui
              Perusahaan.
            </li>
            <li>
              Waktu Eksekusi paling lama 1 (satu) detik sejak order diterima
              sampai dengan order direspon oleh sistem perdagangan Penyelenggara
              Sistem Perdagangan Alternatif.
            </li>
            <li>Tidak ada requote.</li>
            <li>
              Harga yang terjadi sesuai dengan harga pasar dan dalam rentang
              yang wajar.
            </li>
          </ul>
        </div>
      </section>

      <CustomFooter />
    </>
  );
};

export default ProdukTradingPage;
