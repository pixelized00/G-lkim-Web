import React from "react";
import { MapPin, PhoneCall, EnvelopeSimple } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="bg-[#151B29] p-5 md:p-14 lg:h-[250px] relative">
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 pt-14 md:pt-0 ">
        <div className="text-[#8A8A9B] text-md flex justify-center items-start mb-5 md:mb-0 ">
          <MapPin size={48} color="#57C5B6" />
          <div className="ml-2">
            <p>Bişkek Cad. 145/1 </p>
            <p>Emek, Çankaya/Ankara </p>
          </div>
        </div>
        <div className="text-[#8A8A9B] text-md flex justify-center items-start mb-5 md:mb-0 ">
          <PhoneCall size={48} color="#57C5B6" />
          <div className="ml-2">
            <p>0312 213 7271</p>
            <p>0312 213 7250</p>
          </div>
        </div>
        <div className="text-[#8A8A9B] text-md flex justify-center items-center mb-5 md:mb-0 ">
          <EnvelopeSimple size={48} color="#57C5B6" />
          <div className="ml-2">
            <p>gulkimyapi@hotmail.com</p>
          </div>
        </div>
      </div>
      <div className=" mx-auto border-2 border-white w-full md:w-[697px] mt-6"></div>
      <p className="text-sm md:text-md text-white text-center mt-2">
        © 2023 GÜLKİM YAPI KİMYASALLARI LTD.ŞTİ.
      </p>
    </div>
  );
};

export default Footer;
