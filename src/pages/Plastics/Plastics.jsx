import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Plastics = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#F3F3F3] w-screen overflow-hidden">
      <div>
        <div className="ml-20">
          <h1 className="pt-10 text-[#247781] font-bold mb-6">
            {t("All Products")}
          </h1>
        </div>
        <div className="bg-white w-[460px] h-20 slide-in-left  ">
          <div className="md:ml-20 ml-8 lg:ml-20 xl:ml-20  ">
            <h1 className="text-2xl  text-[#247781] pt-2">{t("Plastics")}</h1>
            <p className="text-[#57C5B6]">{t("Plastic Raw Materials")}</p>
          </div>
        </div>
        <div className="md:flex md:mt-10 md:mb-10 md:space-x-10 justify-center grid grid-cols-1 mx-10  ">
          <div className="text-[#1A5F7A] mt-6 md:mt-2">
            <div className="text-[#1A5F7A] mt-6 md:mt-2 md:w-[347px] h-[235px] bg-[#247781] rounded-xl  text-white  flex  justify-start items-center ">
              <ul className="mx-6 ml-10">
                <li className="list-disc">{t("ABS Resin")}</li>
                <li className="list-disc">{t("Acrylic Resin (PMMA)")}</li>
                <li className="list-disc">{t("AS Resin (SAN)")}</li>
                <li className="list-disc">{t("HDPE(Film/Blow/Inj/Pipe)")}</li>
                <li className="list-disc">{t("LDPE (Film/Inj/Roto)")}</li>
              </ul>
            </div>
          </div>
          <div className="text-[#1A5F7A] mt-4 md:mt-2">
            <div className="text-[#1A5F7A] mt-6 md:mt-2 md:w-[347px] h-[235px] bg-[#247781] rounded-xl  text-white  flex   justify-start items-center ">
              <ul className="mx-6 ml-10">
                <li className="list-disc">{t("MS Resin")}</li>
                <li className="list-disc">{t("PBT Resin")}</li>
                <li className="list-disc">{t("PET Resin")}</li>
                <li className="list-disc">
                  {t("PVC Resin (Suspension & Emulsions)")}
                </li>
                <li className="list-disc">
                  {t("Polystyrene (GPPS/HIPS/EPS)")}
                </li>
              </ul>
            </div>
          </div>
          <div className="text-[#1A5F7A] mt-4 md:mt-2">
            <div className=" text-[#1A5F7A] mt-6 md:mt-2 md:w-[347px] h-[235px] bg-[#247781] rounded-xl  text-white  flex   justify-start items-center">
              <ul className="mx-6 ml-10">
                <li className="list-disc">
                  {t("Polycarbonate (Inj/Blow/Extrusion)")}
                </li>
                <li className="list-disc">{t("Polyamide (Nylon 6 & 66)")}</li>
                <li className="list-disc">{t("Polyacetal (POM)")}</li>
                <li className="list-disc">{t("PP (All grades)")}</li>
                <li className="list-disc">
                  {t("Styrene Butadiene Co-Polymer Resin")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        ,
      </div>
    </div>
  );
};

export default Plastics;
