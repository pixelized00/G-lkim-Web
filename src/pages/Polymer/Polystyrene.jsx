import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Polystyrene = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("GPPS")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10  text-[black]">
          {t(
            "General Purpose Polystyrene, often referred to in its acronym form GPPS, is made from a styrene monomer polymer through a process of suspension. The polystyrene is used in applications such as IT equipment, clear jewel boxes and other types of enclosures."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("HIPS")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-black mt-6 md:mt-2 flex  justify-center items-center">
        <p>
          {t(
            "High Impact Polystyrene (HIS) is a low cost, tough plastic that is easy to thermoform and fabricate. HIS is often used for countertop point of purchase displays and indoor signs where ease of fabrication is essential."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PS125")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "General purpose polystyrene PS 125 is manufactured by continuous mass polymerization of styrene monomer. It is a crystal-like, hard and brittle polymer; medium flow with excellent clarity and higher Vicat and Heat Distortion temperatures allow its use in many different applications."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PS330")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "High Impact Polystyrene PS 330 is manufactured by continuous mass polymerization of styrene monomer. An elastomer is incorporated during polymerization to achieve impact resistance property. It is generally opaque in color. It is a high impact strength polystyrene with high heat deflection temperature and good physical properties."
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
    <div className="bg-[#F3F3F3] max-w-screen overflow-hidden">
      <div className="ml-20">
        <h1 className="pt-10 text-[#247781] font-bold mb-6">
          {t("All Products")}
        </h1>
      </div>
      <div className="bg-white w-[440px] h-20 slide-in-left  ">
        <div className="ml-20">
          <h1 className="text-2xl  text-[#247781] pt-2">{t("Polymer")}</h1>
          <p className="text-[#57C5B6]">{t("Polystyrene")}</p>
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

export default Polystyrene;
