// import CalendarWidget from "@/utils/calenderWidget";
import { useEffect } from "react";
import React from "react";
import CustomFooter from "@/components/customFooter";
import Image from "next/image";
import bgkalenderekonomoi from "../assets/images/bgkalenderekonomi.jpg";
import Head from "next/head";

const CalendarWidget = () => {
  useEffect(() => {
    const widgetScript = document.createElement("script");
    widgetScript.type = "text/javascript";
    widgetScript.src =
      "https://www.tradays.com/c/js/widgets/calendar/widget.js?v=13";
    widgetScript.async = true;
    widgetScript.dataset.type = "calendar-widget";
    widgetScript.innerHTML = `
      {"width":"100%","height":"100%","mode":"2"}
    `;
    document.body.appendChild(widgetScript);

    return () => {
      document.body.removeChild(widgetScript);
    };
  }, []);

  return <div id="economicCalendarWidget"></div>;
};

const KalenderEkonomiPage = () => {
  return (
    <>
      <Head>
        <title>Kalender Ekonomi</title>
      </Head>
      <section className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-[1100px] h-[200px] my-[25px] relative">
          <Image
            src={bgkalenderekonomoi}
            alt=""
            className="absolute z-10 object-cover object-center w-full h-full rounded-3xl brightness-50"
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full">
            <h1 className="text-[60px] font-Montserrat font-bold text-white">
              Kalender Ekonomi
            </h1>
            <p className="text-white text-[20px] font-Open_Sans">
              Kalender Ekonomi untuk mendukung setiap transaksi anda.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center mb-[25px]">
        <div className="w-[1100px] h-[500px] flex justify-between items-center">
          <CalendarWidget />
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export default KalenderEkonomiPage;
