"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const DemoAkunPage = () => {
  return (
    <div>
      <section className="bg-[#3a336f] h-full">
        <div className="w-[1140px] mx-auto py-16">
          <div className="border-4 border-[#f1c50e] flex justify-center p-[30px] rounded-3xl">
            <p className="text-[16px] font-Open_Sans text-white">
              Dengan dana virtual, asah skill trading anda dengan simulasi di
              akun demo dan memastikan kesiapan anda saat membuka Akun Real.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="uppercase text-[36px] font-Open_Sans text-white font-bold mb-5">
              Demo Akun
            </h1>
            <div className="bg-white p-[30px] rounded-2xl w-[711px]">
              <form className="flex flex-col w-full gap-4">
                <div>
                  <div className="block mb-2">
                    <Label htmlFor="nama" value="NAMA" />
                  </div>

                  <input
                    type="text"
                    id="nama"
                    placeholder="Masukan nama Anda"
                    className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic focus:outline-none border-1 border-slate-300 focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <div className="w-1/2">
                    <div className="block mb-2">
                      <Label htmlFor="telepon" value="NOMOR TELEPON" />
                    </div>

                    <input
                      id="telepon"
                      required
                      type="text"
                      placeholder="Masukan nomor telepon yang valid"
                      className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic focus:outline-none border-1 border-slate-300 focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
                    />
                  </div>
                  <div className="w-1/2">
                    <div className="block mb-2">
                      <Label htmlFor="email" value="EMAIL" />
                    </div>

                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="Masukan email yang aktif"
                      className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic border-1 border-slate-300 focus:outline-none focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
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
        <div className="w-[1140px] flex justify-center mx-auto">
          <div className="w-[570px] h-[400px] p-[30px]">
            <h1 className="text-[60px] font-Montserrat text-black font-bold">
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
              <p className="italic text-[15px] font-Open_Sans text-black leading-8">
                Menara Rajawali Lantai 18, Jl. DR. Ide Anak Agung Gde Agung
                No.5, RT.5/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi,
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
              </p>
            </div>
          </div>
          <div className="w-[570px] h-[400px] p-[30px]">
            <h1 className="text-[60px] font-Montserrat text-black font-bold">
              Disclaimer
            </h1>
            <h3 className="text-[16px] font-Open_Sans text-black italic font-bold">
              Pemberitahuan Resiko
            </h3>
            <p className="text-[16px] font-Open_Sans leading-loose mt-[10px]">
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
        <p className="text-[14px] font-Open_Sans text-white">
          Associate with PT Victory International Futures Platinum 8
        </p>
        <p className="text-[14px] font-Open_Sans text-[#f1c50e]">
          Copyright © 2​020 vplus.id. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DemoAkunPage;
