import React from "react";
import { useTranslation } from "react-i18next";

const Recyled = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#F3F3F3] min-w-screen overflow-hidden">
      <div className="ml-20">
        <h1 className="pt-10 text-[#247781] font-bold mb-6">
          {t("All Products")}
        </h1>
      </div>
      <div className="bg-white w-[460px] h-20 slide-in-left  ">
        <div className="md:ml-20 ml-8 lg:ml-20 xl:ml-20  ">
          <h1 className="text-2xl  text-[#247781] pt-2">{t("Polymer")}</h1>
          <p className="text-[#57C5B6]">{t("Recycled")}</p>
        </div>
      </div>
      <div className="md:flex md:mt-10 md:mb-10  justify-center grid grid-cols-1 mx-6 md:mx-20 md:space-x-10 ">
        <div className=" text-[#1A5F7A] mt-4 md:mt-2">
          <div className="  text-[#1A5F7A] mt-6 md:mt-2 md:w-[445px] h-[135px] bg-[#247781] rounded-xl  text-white  text-center  ">
            <p className="pt-10 text-2xl font-bold">{t("LDPE Recycle Color")}</p>
            <p>{t("LDPE Recycle Color – Jumbo Bags")}</p>
          </div>
        </div>
        <div className=" text-[#1A5F7A] mt-6 md:mt-2">
          <div className="  text-[#1A5F7A] mt-6 md:mt-2 md:w-[445px] h-[135px] bg-[#247781] rounded-xl  text-white text-center   ">
            <p className="pt-10 text-2xl font-bold">{t("PP Recycle Clear")}</p>
            <p>{t("PP Recycle Clear – Jumbo Bags")}</p>
          </div>
        </div>
        ,
      </div>
    </div>
  );
};

export default Recyled;
