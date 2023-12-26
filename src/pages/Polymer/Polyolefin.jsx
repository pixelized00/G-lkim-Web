import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Polyolefin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-3xl">
            {t("Dow Poe 5 MFI Engage 8200")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10  text-[black]">
          {t(
            "ENGAGE™ 8200 Polyolefin Elastomer is an ethylene-octene copolymer that has excellent flow characteristics and performs well in a wide range of general purpose thermoplastic elastomer applications."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-3xl">
            {t("Dow Polyolefin Elastomer 3 Mfi Engage 8450")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-black mt-6 md:mt-2">
        <p>
          {t(
            "Engage® 8450 polyolefin elastomer is an ethyleneoctene copolymer that performs well in a wide range of thermoplastic elastomer applications. It has excellent compatibility with other polyolefins, allowing for efficient blending and coextrusion.Engage® 8450 provides excellent flow properties and is efficiently cross-linked by peroxide, silane, or irradiation. When cross-linked, it gives exceptional heat aging, compression set, and weather resistance properties."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-3xl">
            {" "}
            {t("LG Polyolefin Elastomer Lucene LC670")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "LUCENETM LC670 is an ethylene-1-octene copolymer produced using LG Chem’s metallocene polymerization catalyst and solution process technology."
          )}
        </p>
        <p className=" text-[black]">
          {t(
            "LUCENETM LC670 is an excellent impact modifier for plastics and offers unique performance capabilities for compounded products."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-3xl">
            {" "}
            {t("Sabic Polyolefin Elastomer Fortify C5070d")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10 text-[black]">
          {t(
            "sabic fortify c5070d is an ethylene octene copolymer produced by solution polymerization using metallocene catalyst. This product is available asfree flowing pellets. Sabic fortify c5070d is designed as a low density and high performance copolymer modifier to provide superior impact properties and flowcharacteristics."
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
          <p className="text-[#57C5B6]">{t("Polyolefin Elastomers (POE)")}</p>
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

export default Polyolefin;
