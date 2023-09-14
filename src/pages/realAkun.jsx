"use client";

import { Label } from "flowbite-react";
import Image from "next/image";
import logo9927040a3834e1 from "../assets/images/992704-0a3834e1.png";
import { postRealAkun } from "@/services/realAkun.service";
import { useState } from "react";
import { data } from "autoprefixer";

const RealAkunPage = () => {
  const [formData, setFormData] = useState({
    nama: "",
    telp: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postRealAkun(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="bg-[#3a336f] h-full">
        <div className="xl:w-[1140px] flex flex-wrap justify-center items-center mx-auto">
          <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
            <p className="text-[60px] font-Open_Sans text-white text-center">
              1
            </p>
            <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
              Registrasi ke Client Area
            </h3>
            <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
              Anda akan mendapatkan akun demo secara otomatis. Trading futures
              dengan margin memiliki tingkat risiko yang tinggi. Oleh karena
              itu, Anda perlu memiliki Akun Demo untuk membantu Anda memahami
              apakah transaksi tersebut cocok untuk Anda.
            </p>
          </div>
          <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
            <p className="text-[60px] font-Open_Sans text-white text-center">
              2
            </p>
            <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
              Buka Akun Real
            </h3>
            <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
              Lengkapi formulir online dan ceritakan sedikit tentang diri Anda,
              latar belakang keuangan Anda, dan unggah dokumen identitas Anda.
            </p>
          </div>
          <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
            <p className="text-[60px] font-Open_Sans text-white text-center">
              3
            </p>
            <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
              Deposit
            </h3>
            <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
              Kerjasama mendalam dengan bank, deposit yang cepat, keamanan dana,
              tanpa biaya tambahan.
            </p>
          </div>
          <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
            <div className="h-[90px] flex justify-center items-center">
              <Image
                src={logo9927040a3834e1}
                alt=""
                className="w-[60px] h-[60px]"
              />
            </div>
            <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
              Trading
            </h3>
            <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
              Trading lengkap forex, index dan komoditi yang populer
            </p>
          </div>
        </div>
        <div className="xl:w-[1140px] mx-auto pb-[30px]">
          <div className="flex flex-col items-center justify-center my-10">
            <div className="bg-white p-[30px] rounded-2xl xl:w-[711px]">
              <form
                className="flex flex-col w-full gap-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <div className="block mb-2">
                    <Label
                      htmlFor="nama"
                      value="NAMA"
                      className="text-[16px]"
                    />
                  </div>

                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, nama: e.target.value })
                    }
                    type="text"
                    id="nama"
                    placeholder="Masukan nama Anda"
                    className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] focus:outline-none border-1 border-slate-300 focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
                    required
                  />
                </div>
                <div className="flex gap-2 max-sm:flex-col">
                  <div className="w-1/2 max-sm:w-full">
                    <div className="block mb-2">
                      <Label
                        htmlFor="telepon"
                        value="NOMOR TELEPON"
                        className="text-[16px]"
                      />
                    </div>

                    <input
                      onChange={(e) =>
                        setFormData({ ...formData, telp: e.target.value })
                      }
                      id="telepon"
                      required
                      type="text"
                      placeholder="Masukan No. telepon yang valid"
                      className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] focus:outline-none border-1 border-slate-300 focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
                    />
                  </div>
                  <div className="w-1/2 max-sm:w-full">
                    <div className="block mb-2">
                      <Label
                        htmlFor="email"
                        value="EMAIL"
                        className="text-[16px]"
                      />
                    </div>

                    <input
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      id="email"
                      required
                      type="email"
                      placeholder="Masukan email yang aktif"
                      className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] border-1 border-slate-300 focus:outline-none focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
                    />
                  </div>
                </div>

                {/* <div className="flex items-center gap-2">
                  <Checkbox id="agree" />
                  <Label className="flex" htmlFor="agree">
                    <p>I agree with the</p>
                    <LinkComponent
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                      href="/forms"
                    >
                      <p>terms and conditions</p>
                    </LinkComponent>
                  </Label>
                </div> */}

                <button
                  type="submit"
                  className="bg-[#3a336f] drop-shadow-2xl hover:bg-white rounded-lg hover:text-[#3a336f] hover:ring-2 hover:ring-[#f1c50e] py-3 text-white font-Open_Sans font-semibold"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f1c50e] h-full">
        <div className="xl:w-[1140px] flex justify-center mx-auto max-md:flex-col">
          <div className="xl:w-[570px] md:w-1/2 xl:h-[400px] md:p-[30px] max-md:px-[30px] max-md:pt-[30px]">
            <h1 className="xl:text-[60px] max-xl:text-[35px] font-Montserrat text-black font-bold">
              Lisensi Broker
            </h1>
            <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
              Bappebti : 558/Bappebti/SI/XII/2004
            </h3>
            <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
              ICDX : 041/SPKB/ICDX/Dir/IX/2010
            </h3>
            <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
              ICH : 044/SPKK/ISI-VIF/VI/2012
            </h3>
            <div className="mt-[10px]">
              <h2 className="text-[24px] font-Open_Sans text-black font-bold">
                Hubungi Kami
              </h2>
              <p className="italic text-[15px] max-xl:text-[12px] font-Open_Sans text-black xl:leading-8">
                Menara Rajawali Lantai 18, Jl. DR. Ide Anak Agung Gde Agung
                No.5, RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi,
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
              </p>
            </div>
          </div>
          <div className="xl:w-[570px] md:w-1/2 xl:h-[400px] p-[30px]">
            <h1 className="xl:text-[60px] max-xl:text-[35px] font-Montserrat text-black font-bold">
              Disclaimer
            </h1>
            <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
              Pemberitahuan Resiko
            </h3>
            <p className="xl:text-[16px] max-xl:text-[12px] font-Open_Sans leading-loose mt-[10px]">
              Produk dengan leverage memiliki tingkat risiko yang tinggi
              terhadap modal yang anda investasikan dan disarankan hanya
              menggunakan dana yang mampu anda tanggung apabila terjadi
              kerugian. Harap diketahui bahwa produk dengan leverage belum tentu
              cocok untuk semua orang, jadi pastikan anda telah memahami
              sepenuhnya semua risiko yang terlibat.
            </p>
          </div>
        </div>
      </section>
      <footer className="h-[95px] bg-[#333333] flex justify-center flex-col items-center">
        <p className="sm:text-[14px] max-sm:text-[10px] font-Open_Sans text-white">
          Associate with PT Victory International Futures Platinum 8
        </p>
        <p className="sm:text-[14px] max-sm:text-[10px] font-Open_Sans text-[#f1c50e]">
          Copyright © 2​020 vplus.id. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default RealAkunPage;
