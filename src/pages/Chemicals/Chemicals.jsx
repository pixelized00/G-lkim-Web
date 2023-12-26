import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Chemicals = () => {
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
          <h1 className="text-2xl  text-[#247781] pt-2">{t("Chemicals")}</h1>
          <p className="text-[#57C5B6]">{t("Chemicals")}</p>
        </div>
      </div>
      <div className="md:flex md:mt-10 md:mb-10  justify-center grid grid-cols-1 mx-6 md:mx-20 md:space-x-10 ">
        <div className=" text-[#1A5F7A] mt-4 md:mt-2">
          <div className="text-[#1A5F7A] mt-6 md:mt-2 md:w-[295px] h-[235px] bg-[#247781] rounded-xl  text-white  flex  justify-start items-center">
            <ul className="mx-6 ml-10">
              <li className="list-disc">{t("Butyl Acrylate monomer")}</li>
              <li className="list-disc">{t("Chlorinated Paraffin Wax")}</li>
              <li className="list-disc">{t("DOP/DIDP/DINP/DBP/TOTM")}</li>
              <li className="list-disc">{t("Glycerine")}</li>
              <li className="list-disc">{t("Glycols (Butyl/Ethylene)")}</li>
              <li className="list-disc">{t("Isopropyl Alcohol (IPA)")}</li>
            </ul>
          </div>
        </div>
        <div className=" text-[#1A5F7A] mt-6 md:mt-2">
          <div className="  text-[#1A5F7A] mt-6 md:mt-2 md:w-[295px] h-[235px] bg-[#247781] rounded-xl  text-white  flex  justify-start items-center">
            <ul className="mx-6 ml-10">
              <li className="list-disc">{t("Ketones (MEK/MIBK)")}</li>
              <li className="list-disc">{t("Maleic Anhydride (MA)")}</li>
              <li className="list-disc">{t("MDI")}</li>
              <li className="list-disc">{t("MEA/DEA")}</li>
              <li className="list-disc">{t("Methylene Chloride")}</li>
              <li className="list-disc">{t("Methanol")}</li>
              <li className="list-disc">{t("N-Butanol/ISO-Butanol")}</li>
            </ul>
          </div>
        </div>
        <div className="text-[#1A5F7A] mt-6 md:mt-2">
          <div className=" text-[#1A5F7A] mt-6 md:mt-2 md:w-[295px] h-[235px] bg-[#247781] rounded-xl  text-white  flex  justify-start items-center">
            <ul className="mx-6 ml-10">
              <li className="list-disc">
                {t("Polycarbonate (Inj/Blow/Extrusion)")}
              </li>
              <li className="list-disc">{t("N-Paraffin")}</li>
              <li className="list-disc">{t("Perchloroethylene (PCE)")}</li>
              <li className="list-disc">{t("Phthalic Anhydride (PA)")}</li>
              <li className="list-disc">{t("Polyester Resins (Iso/Ortho)")}</li>
              <li className="list-disc">{t("Polyols")}</li>
              <li className="list-disc">{t("PE Wax")}</li>
            </ul>
          </div>
        </div>
        <div className="text-[#1A5F7A] mt-6 md:mt-2">
          <div className="  text-[#1A5F7A] mt-6 md:mt-2 md:w-[295px] h-[235px] bg-[#247781] rounded-xl  text-white  flex  justify-start items-center">
            <ul className="mx-6 ml-10">
              <li className="list-disc">{t("Stearic Acid")}</li>
              <li className="list-disc">{t("Stabilizers")}</li>
              <li className="list-disc">{t("TDI 80/20")}</li>
              <li className="list-disc">{t("Titanium Dioxide")}</li>
              <li className="list-disc">{t("Trichloroethylene")}</li>
              <li className="list-disc">{t("Zinc Stearate")}</li>
            </ul>
          </div>
        </div>
        ,
      </div>
    </div>
  );
};

export default Chemicals;
