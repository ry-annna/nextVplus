import Image from "next/image";
import { getAllBerita } from "@/services/berita.service";
import { useEffect, useState } from "react";
import SkeletonBerita from "@/components/skeletonBerita";
import moment from "moment/moment";
import Link from "next/link";
import Head from "next/head";
import { SingleTicker, Ticker } from "react-ts-tradingview-widgets";

const BeritaPage = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    getAllBerita((data) => {
      setBerita(data);
    });
  }, []);

  const showBeritas = () => {
    return (
      <>
        {berita.map((item, index) => (
          <Link
            href={`/berita/${atob(item.title)}`}
            key={index}
            className="w-full"
          >
            <div
              className="flex py-[15px] px-[20px] border-b border-slate-200 w-full justify-between"
              key={index}
            >
              <div className="left-0 flex flex-col justify-between">
                <h1 className="text-[16px] font-semibold md:pr-[80px] font-Open_Sans">
                  {atob(item.title)}
                </h1>
                <div className="flex">
                  <p className="text-[12px] w-max text-slate-500 font-Open_Sans">
                    {atob(item.sumber)} |{" "}
                    {moment.utc(item.tanggal).format("MMM Do, YYYY")}
                  </p>
                </div>
              </div>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.gambar}`}
                unoptimized
                width={180}
                height={100}
                className=" object-cover rounded-lg xl:w-[180px] xl:h-[100px] max-sm:w-[112px] max-sm:h-[60px] sm:max-md:w-[140px] sm:max-md:h-[70px] md:max-lg:w-[180px] md:max-lg:h-[100px] lg:max-xl:w-[180px] lg:max-xl:h-[100px]"
                alt=""
              />
            </div>
          </Link>
        ))}
      </>
    );
  };

  const showSkeleton = () => {
    return (
      <>
        {Array(10)
          .fill()
          .map((item, index) => {
            return <SkeletonBerita key={index} />;
          })}
      </>
    );
  };

  return (
    <>
    <Head>
      <title>Berita</title>
    </Head>
      <div className="flex justify-center">
        <div className="w-[620px] flex flex-col items-center h-screen border-r border-l border-slate-200">
          <div className="flex w-full px-[20px] border-b items-center py-4">
            <h1 className="text-xl font-bold">Berita</h1>
          </div>

          {berita.length > 0 ? showBeritas() : showSkeleton()}
        </div>
      </div>
          <Ticker colorTheme="light" ></Ticker>
    </>
  );
};

export default BeritaPage;
