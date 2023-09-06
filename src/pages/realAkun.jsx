"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const RealAkunPage = () => {
  return (
    <div>
      <section className="bg-[#3a336f] h-screen">
        <div className="w-[1140px] mx-auto py-16">
          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="uppercase text-[36px] font-Open_Sans text-white font-bold mb-5">
              Real Akun
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
                    shadow
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
                      shadow
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
                      shadow
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
    </div>
  );
};

export default RealAkunPage;
