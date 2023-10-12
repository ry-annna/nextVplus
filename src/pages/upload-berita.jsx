import axios from "axios";
import { useEffect, useState } from "react";
import { createNewBerita } from "@/services/berita.service";
import { useToast } from "@chakra-ui/react";

const UploadBeritaPage = () => {
  const toast = useToast();
  const [file, setFile] = useState();
  const [formDatas, setFormDatas] = useState({
    gambar: "",
    title: "",
    deskripsi: "",
    sumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      const formData = new FormData();
      formData.append("gambar", file);
      formData.append("title", formDatas.title);
      formData.append("deskripsi", formDatas.deskripsi);
      formData.append("sumber", formDatas.sumber);

      const response = await createNewBerita(formData, config);
      console.log(response.message);
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
      <div className="flex items-center justify-center h-screen bg-slate-200">
        <div className="flex flex-col items-center w-10/12">
          <h1 className="items-center text-2xl font-bold uppercase">
            upload berita
          </h1>

          <form
            className="flex flex-col w-full gap-4"
            onSubmit={handleSubmit}
            id="demoAkunForm"
          >
            <div className="flex flex-col">
              <label htmlFor="myfile">Pilih Gambar</label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <label htmlFor="title" className="text-[16px]">
                  TITLE
                </label>
              </div>

              <textarea
                onChange={
                  // (e) => setFormDatas({ ...formDatas, title: e.target.value })
                  (e) =>
                    setFormDatas({
                      ...formDatas,
                      title: window.btoa(
                        unescape(encodeURIComponent(e.target.value))
                      ),
                    })
                }
                type="text"
                id="title"
                placeholder="Masukan title berita"
                className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] focus:outline-none border-1 border-slate-300 focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <label htmlFor="desciption" className="text-[16px]">
                  DESCRIPTION
                </label>
              </div>

              <textarea
                onChange={
                  // (e) =>
                  //   setFormDatas({ ...formDatas, deskripsi: e.target.value })
                  (e) =>
                    setFormDatas({
                      ...formDatas,
                      deskripsi: window.btoa(
                        unescape(encodeURIComponent(e.target.value))
                      ),
                    })
                }
                id="desciption"
                required
                type="text"
                placeholder="Masukan deskripsi berita"
                className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] focus:outline-none border-1 border-slate-300 focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
              />
            </div>
            <div>
              <div className="block mb-2">
                <label htmlFor="sumber" className="text-[16px]">
                  SUMBER
                </label>
              </div>

              <input
                onChange={
                  // (e) => setFormDatas({ ...formDatas, sumber: e.target.value })
                  (e) =>
                    setFormDatas({
                      ...formDatas,
                      sumber: window.btoa(
                        unescape(encodeURIComponent(e.target.value))
                      ),
                    })
                }
                id="sumber"
                required
                type="text"
                placeholder="Masukan sumber berita"
                className="w-full px-3 py-2 rounded-lg placeholder:opacity-50 placeholder:italic max-xl:placeholder:text-[13px] border-1 border-slate-300 focus:outline-none focus:border-[#f1c50e] focus:ring-[#f1c50e] focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="bg-[#3a336f] drop-shadow-2xl hover:bg-white rounded-lg hover:text-[#3a336f] hover:ring-2 hover:ring-[#f1c50e] py-3 text-white font-Open_Sans font-semibold"
            >
              SUBMIT
            </button>
            {/* {formDatas.deskripsi && <p>{atob(formDatas.deskripsi)}</p>} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadBeritaPage;
