import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getAllBerita } from "@/services/berita.service";
import moment from "moment";
import Image from "next/image";
import Parser from "html-react-parser";
import carousel3 from "../../assets/images/Carousel3.png";
import Head from "next/head";

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
      <Head>
        <meta name="description" content={query.id} />
        <title>{query.id}</title>
      </Head>

      <div className="flex justify-center">
        <div className="w-[620px] flex flex-col items-center border-r border-l border-slate-200">
          {berita.map((item, index) => {
            if (atob(item.title) === query.id) {
              return (
                <div
                  className="flex flex-col py-[15px] px-[20px] border-b border-slate-200 w-full h-full"
                  key={index}
                >
                  <div className="left-0 flex flex-col justify-between gap-2">
                    <h1 className="text-[24px] font-semibold pr-[80px] font-Open_Sans">
                      {atob(item.title)}
                    </h1>

                    <div className="flex">
                      <p className="text-[12px] w-max text-slate-500 font-Open_Sans">
                        {atob(item.sumber)} |{" "}
                        {moment.utc(item.tanggal).format("MMM Do, YYYY")}
                      </p>
                    </div>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.gambar}`}
                      unoptimized
                      width={500}
                      height={300}
                      className="h-[395px] rounded-xl object-cover w-full"
                      alt=""
                    />
                  </div>
                  <div className="mt-6 ql-editor font-Open_Sans">
                    {Parser(item.deskripsi)}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default DetailBerita;
