"use client";

import { Label } from "flowbite-react";
import { useState } from "react";
import { postDemoAkun } from "@/services/demoAkun.service";
import { useToast } from "@chakra-ui/react";
import Link from "next/link";
import CustomFooter from "@/components/customFooter";

const DemoAkunPage = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    nama: "",
    telp: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postDemoAkun(formData);
      if (response.status === 201) {
        toast({
          position: "bottom",
          duration: 15000,
          isClosable: true,
          render: () => (
            <div className="flex flex-col items-center py-3 bg-green-500 px-7 xl:mb-10 rounded-xl">
              <h2 className="text-center text-white font-Open_Sans">
                Data terkirim!
              </h2>
              <p className="text-center text-white font-Open_Sans">
                Silahkan isi form di halaman selanjutnya.
              </p>
              <Link href="https://www.vifx.co.id/r-936200006" target="_blank">
                <button className="px-3 py-2 mt-2 text-white bg-green-700 font-Open_Sans rounded-xl hover:bg-green-600">
                  Pergi ke halaman
                </button>
              </Link>
            </div>
          ),
        });
      } else {
        toast({
          title: "Data tidak terkirim!",
          description: "Silahkan refresh halaman dan coba lagi.",
          status: "error",
          position: "bottom",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="bg-[#3a336f] h-full pb-10">
        <div className="xl:w-[1140px] mx-auto xl:py-16 max-xl:mx-4 md:max-lg:mx-10 max-md:pt-4 md:pt-10 ">
          <div className="border-4 border-[#f1c50e] flex justify-center rounded-3xl xl:p-[30px] max-md:p-[15px] md:max-xl:p-[15px]">
            <p className="lg:text-[16px] max-md:text-[12px] font-Open_Sans text-white">
              Dengan dana virtual, asah skill trading anda dengan simulasi di
              akun demo dan memastikan kesiapan anda saat membuka Akun Real.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="uppercase text-[36px] font-Open_Sans text-white font-bold mb-5">
              Demo Akun
            </h1>
            <div className="bg-white p-[30px] rounded-2xl xl:w-[711px]">
              <form
                className="flex flex-col w-full gap-4"
                onSubmit={handleSubmit}
                id="demoAkunForm"
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
      <CustomFooter/>
    </>
  );
};

export default DemoAkunPage;
