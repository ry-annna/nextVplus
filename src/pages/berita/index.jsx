import Image from "next/image";
import { getAllBerita } from "@/services/berita.service";
import { useEffect, useState } from "react";
import SkeletonBerita from "@/components/skeletonBerita";
import moment from "moment/moment";
import Link from "next/link";

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
              loading="lazy"
            >
              <div className="left-0 flex flex-col justify-between">
                <h1 className="text-[16px] font-semibold pr-[80px]">
                  {atob(item.title)}
                </h1>
                <div className="flex">
                  <p className="text-[12px] w-max text-slate-500">
                    {atob(item.sumber)} |{" "}
                    {moment.utc(item.tanggal).format("MMM Do, YYYY")}
                  </p>
                </div>
              </div>
              <Image
                src={`/gambarBerita/${item.gambar}`}
                width={180}
                height={100}
                className="w-[180px] rounded-lg "
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
      <div className="flex justify-center">
        <div className="w-[620px] flex flex-col items-center h-screen border-r border-l border-slate-200">
          <div className="flex w-full px-[20px] border-b items-center py-4">
            <h1 className="text-xl font-bold">Berita</h1>
          </div>

          {berita.length > 0 ? showBeritas() : showSkeleton()}
        </div>
      </div>
    </>
  );
};

export default BeritaPage;
