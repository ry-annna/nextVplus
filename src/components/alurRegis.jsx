import Image from "next/image";
import logo9927040a3834e1 from "../assets/images/992704-0a3834e1.png";

const AlurRegis = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto bg-[#3a336f] ">
      <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
        <p className="text-[60px] font-Open_Sans text-white text-center">1</p>
        <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
          Registrasi ke Client Area
        </h3>
        <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
          Anda akan mendapatkan akun demo secara otomatis. Trading futures
          dengan margin memiliki tingkat risiko yang tinggi. Oleh karena itu,
          Anda perlu memiliki Akun Demo untuk membantu Anda memahami apakah
          transaksi tersebut cocok untuk Anda.
        </p>
      </div>
      <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
        <p className="text-[60px] font-Open_Sans text-white text-center">2</p>
        <h3 className="text-[16px] font-Open_Sans text-white font-bold mt-[20px]">
          Buka Akun Real
        </h3>
        <p className="text-[16px] font-Open_Sans text-white mt-[20px]">
          Lengkapi formulir online dan ceritakan sedikit tentang diri Anda,
          latar belakang keuangan Anda, dan unggah dokumen identitas Anda.
        </p>
      </div>
      <div className="w-[285px] h-[458px] max-[1140px]:h-full p-[30px] flex flex-col justify-start">
        <p className="text-[60px] font-Open_Sans text-white text-center">3</p>
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
  );
};

export default AlurRegis;
