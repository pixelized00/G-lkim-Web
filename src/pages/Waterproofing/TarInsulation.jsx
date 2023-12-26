import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const TarInsulation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PTM 212</p>
          <p>
            {t(
              "For Horizontal Surfaces, Polyurethane Based, Tar Additive, Two Component, Waterproofing Membrane"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p>{t("Polyurethane-tar based, elastomeric waterproofing membrane")}</p>
        <p>{t("Solvent free")}</p>
        <p>
          {t(
            "Provides waterproof and long-lasting insulation with its seamless structure"
          )}
        </p>
        <p>
          {t("It has crack bridging properties thanks to its high flexibility")}
        </p>
        <p>
          {t(
            "High chemical resistance, does not hydrolyse, does not separate from the surface"
          )}
        </p>
        <p>{t("Does not allow microbiological formations")}</p>
        <p>{t("Easy to apply, no joints, no need for shaloma")}</p>
        <p>
          {t(
            "Very economical, saves labour in application and long life in use."
          )}
        </p>

        <p className="mt-10  text-[black]">
          {t(
            "Coal tar modified polyurethane based, two component, solvent free, flexible, isolation membrane. It is the most economical and long-lasting solution for a seamless and watertight coating on non-traffic surfaces or between decks. It is highly flexible and has crack bridging feature. In this way, it is not affected by cracks and movements that may occur on the ground over time. It is resistant to salt water and water contaminated with chemicals, does not hydrolyse and does not separate from the surface. It does not allow microbiological formations on the surface it covers. Prevents root penetration in applications such as garden terraces. It is used as protective coating and isolation membrane for protection of internal and external surfaces in municipal infrastructures, waste water, sewerage systems, water works, dams, waste water processing plants, highway culverts and water channels, all kinds of underground channels, foundations and similar constructions, foundation and curtain wall bundling."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PTM 213</p>
          <p>
            {t(
              "Polyurethane Based, Tar Additive, Two Component, Water Isolation Membrane for Vertical Surfaces"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p>{t("Polyurethane-tar based, elastomeric waterproofing membrane")}</p>
        <p>{t("Solvent free")}</p>
        <p>
          {t(
            "Provides waterproof and long-lasting insulation with its seamless structure"
          )}
        </p>
        <p>
          {t("It has crack bridging properties thanks to its high flexibility")}
        </p>
        <p>
          {t(
            "High chemical resistance, does not hydrolyse, does not separate from the surface"
          )}
        </p>
        <p>{t("Does not allow microbiological formations")}</p>
        <p>{t("Easy to apply, no joints, no need for shaloma")}</p>
        <p>
          {t(
            "Very economical, saves labour in application and long life in use."
          )}
        </p>

        <p className="mt-10 text-[black]">
          {t(
            "Coal tar modified polyurethane based, two component, solvent free, flexible, isolation membrane. It is the most economical and long-lasting solution for a seamless and watertight coating on non-traffic surfaces or between decks. It is highly flexible and has crack bridging feature. In this way, it is not affected by cracks and movements that may occur on the ground over time. It is resistant to salt water and water contaminated with chemicals, does not hydrolyse and does not separate from the surface. It does not allow microbiological formations on the surface it covers. Prevents root penetration in applications such as garden terraces. It is used as protective coating and isolation membrane for protection of internal and external surfaces in municipal infrastructures, waste water, sewerage systems, water works, dams, waste water processing plants, highway culverts and water channels, all kinds of underground channels, foundations and similar constructions, foundation and curtain wall bundling."
          )}
        </p>
      </div>
    </div>,
  ];
  const indexOfLastDiv = currentPage * divsPerPage;
  const indexOfFirstDiv = indexOfLastDiv - divsPerPage;
  const currentDivs = divArray.slice(indexOfFirstDiv, indexOfLastDiv);

  const totalPageCount = Math.ceil(divArray.length / divsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPageCount; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="bg-[#F3F3F3] w-screen overflow-hidden">
      <div className="ml-20">
        <h1 className="pt-10 text-[#247781] font-bold mb-6">
          {t("All Products")}
        </h1>
      </div>
      <div className="bg-white w-[468px] h-20 slide-in-left  ">
        <div className="md:ml-20 ml-8 lg:ml-20 xl:ml-20  ">
          <h1 className="text-3xl  text-[#247781] pt-2">
            {t("Water Isolation")}
          </h1>
          <p className="text-[#57C5B6] text-sm">
            {t("Tar Additive Polyurethane Based Insulation Materials")}
          </p>
        </div>
      </div>
      <div className="md:px-20 px-4 lg:px-28">
        {currentDivs.map((div, index) => (
          <div key={index}>
            {div}
            <div className="border-2 border-gray-200 mt-6"></div>
          </div>
        ))}

        <div className="flex justify-center items-center mt-20 pb-20">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="mr-2"
          >
            <CaretLeft size={34} weight="bold" color="#247781" />
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`border rounded-full px-6 py-4 mx-1 text-${
                currentPage === number ? "white" : "#247781"
              } font-bold ${
                currentPage === number ? "bg-[#247781]" : "bg-white"
              }`}
            >
              {number}
            </button>
          ))}
          <button
            disabled={currentPage === totalPageCount}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="ml-2"
          >
            <CaretRight size={34} weight="bold" color="#247781" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarInsulation;
