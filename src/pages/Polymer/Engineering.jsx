import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Engineering = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("ABS")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10  text-[black]">
          {t(
            "ABS or Acrylonitrile butadiene styrene is a common thermoplastic polymer typically used for injection molding applications. This engineering plastic is popular due to its low production cost and the ease with which the material is machined by plastic manufacture"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Nylon 6")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-black mt-6 md:mt-2">
        <p>
          {t(
            "Nylon 6 is a versatile synthetic material that can be formed into fibers, sheets, filaments or bristles. These are in turn be used in the production of fabric, yarn and cordage."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Nylon 66")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "Nylon 66 is frequently used when high mechanical strength, rigidity, good stability under heat and/or chemical resistance are required. It is used in fibers for textiles and carpets and molded parts."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PBT")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "Polybutylene Terephthalate (PBT) is a crystalline, high molecular weight polymer that has an excellent balance of properties and processing characteristics. Because the material crystallizes rapidly, mold cycles are short and molding temperatures can be lower than for many engineering plastics."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PC")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "Polycarbonates (PC) are a group of thermoplastic polymers containing carbonate groups in their chemical structures. Polycarbonates used in engineering are strong, tough materials, and some grades are optically transparent. They are easily worked, molded, and thermoformed."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PC/ABS")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "PC/ABS (Polycarbonate/Acrylonitrile Butadiene Styrene) is a blend of PC and ABS providing unique combination of the high processability of ABS with the excellent mechanical properties, impact and heat resistance of PC."
          )}
        </p>
      </div>
    </div>,

   

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PMMA")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "Poly(methyl methacrylate), also known as acrylic, acrylic glass, or plexiglass as well as by the trade names Crylux, Plexiglas, Acrylite, Lucite, Perclax and Perspex among several others, is a transparent thermoplastic often used in sheet form as a lightweight or shatter-resistant alternative to glass."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("POM")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "Polyoxymethylene, also known as acetal, polyacetal, and polyformaldehyde, is an engineering thermoplastic used in precision parts requiring high stiffness, low friction, and excellent dimensional stability"
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PPS")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "Polyphenylene sulfide is an engineering plastic, commonly used today as a high-performance thermoplastic. PPS can be molded, extruded, or machined to tight tolerances."
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
      <div className="bg-white w-[460px] h-20 slide-in-left  ">
        <div className="ml-20">
          <h1 className="text-2xl  text-[#247781] pt-2">{t("Polymer")}</h1>
          <p className="text-[#57C5B6]">{t("Engineering Plastics")}</p>
        </div>{" "}
      </div>

      <div className="md:px-20 px-4 lg:px-28">
        {currentDivs.map((div, index) => (
          <div key={index}>
            {div} <div className="border-2 border-gray-200 mt-6"></div>
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

export default Engineering;
