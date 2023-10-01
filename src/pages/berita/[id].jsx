import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getAllBerita } from "@/services/berita.service";

const DetailBerita = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    getAllBerita((data) => {
      setBerita(data);
    });
  }, []);
  const { query } = useRouter();

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[620px] flex flex-col items-center h-screen border-r border-l border-slate-200">
          <div className="flex w-full px-[20px] border-b items-center py-4">
            <h1 className="text-xl font-bold">Artikel</h1>
          </div>
          <div
            className="flex py-[15px] px-[20px] border-b border-slate-200 w-full justify-between"
            key={index}
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
        </div>
      </div>
    </>
  );
};

export default DetailBerita;
