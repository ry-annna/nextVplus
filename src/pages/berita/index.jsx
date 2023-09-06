import Image from "next/image";
import { getAllBerita, getAllBerita2 } from "@/services/berita.service";
import DefaultForm from "./form";
import tesImage from "../../assets/images/aa63897827a38c8f8ade5e61800d39a1439b62b992fadbd3b77a943106ca808409e02685f8e23ac168cbef30adb93860e346a2b9859dd61b99a15b_1280.jpg";
import { useEffect, useState } from "react";

const BeritaPage = () => {
  const [berita, setBerita] = useState([]);
  const [tesGambar, setTesGambar] = useState([]);

  useEffect(() => {
    getAllBerita((data) => {
      setBerita(data);
    });
  }, []);

  berita.forEach((element) => {
    let base64String = btoa(
      String.fromCharCode(...new Uint8Array(element.gambar.data))
    );
    // setTesGambar(base64String);
    // console.log(base64String);
  });
  // for (let i = 0; i < berita.length; i++) {
  //   // const element = array[i];
  //   console.log(i);
  // }
  console.log(berita[0]);

  return (
    <div className="flex justify-center">
      <div className="w-[620px] flex flex-col items-center h-screen border-r border-l border-slate-200">
        <div className="flex w-full px-[20px] border-b items-center py-4">
          <h1 className="text-xl font-bold">Berita</h1>
        </div>

        {berita.length > 0 &&
          berita.map((item) => (
            <div
              className="flex py-[15px] px-[20px] border-b border-slate-200"
              key={item.id}
            >
              <div className="flex flex-col justify-between">
                <h1 className="text-[16px] font-semibold pr-[80px]">
                  {atob(item.title)}
                </h1>
                <div className="flex">
                  <p className="text-[12px] w-max text-slate-500">
                    {atob(item.sumber)} | {item.tanggal}
                  </p>
                </div>
              </div>
              <Image
                // src={`/${btoa(
                //   String.fromCharCode(...new Uint8Array(item.gambar.data))
                // )}`}
                src={tesImage}
                width={180}
                height={100}
                className="w-[180px] rounded-lg"
                alt=""
              />
            </div>
          ))}

        {/* <div className="flex py-[15px] px-[20px] border-b border-slate-200">
          <div className="flex flex-col justify-between">
            <h1 className="text-[16px] font-semibold pr-[80px]">
              UK Seizes on US-China Thaw as Chance for Reset With Beijing
            </h1>
            <div className="flex">
              <p className="text-[12px] w-max text-slate-500">
                sumber | 30 Agustus 2023
              </p>
            </div>
          </div>
          <Image src={tesImage} className="w-[180px] rounded-lg" alt="" />
        </div> */}
        {/* <DefaultForm /> */}
      </div>
    </div>
  );
};

export default BeritaPage;
