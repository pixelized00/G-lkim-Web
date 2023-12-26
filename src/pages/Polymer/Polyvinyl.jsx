import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Polyvinyl = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-3xl">
            {t("PVC RESIN SUSPENSION DG-1000K")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-black mt-6 md:mt-2">
        <ul className="mx-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Appearance : White powder")}</li>
          <li className="list-disc">{t("Average Polymerization : 1042")}</li>
          <li className="list-disc">
            {t("Impurity particle number/100G : 18")}
          </li>
          <li className="list-disc">{t("Volatile Matter : 0.19%")}</li>
          <li className="list-disc">{t("Bulk Density(G/ML) : 0.56")}</li>
          <li className="list-disc">{t("0.35MM Particle size : 0.05%")}</li>
          <li className="list-disc">{t("Fish holes number/100CM2 : 5")}</li>
          <li className="list-disc">{t("Aboringinal whiteness : 94%")}</li>
          <li className="list-disc">{t("Whiteness(160°C,10MIN) : 83%")}</li>
          <li className="list-disc">{t("VCM residuals(US/G) : 0.6")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-3xl">{t("SPVC67S")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-black mt-6 md:mt-2   justify-center items-center">
        <ul className="mx-4 text-[#1A5F7A]">
          <li className="list-disc">
            {t("Low content of fines (easy handling and conveying)")}
          </li>
          <li className="list-disc">
            {t(
              "High bulk density (good material compacting and high production rates)"
            )}
          </li>
          <li className="list-disc">
            {t("Narrow particle size distribution (easy processing)")}
          </li>
          <li className="list-disc">
            {t(
              "High melt strength (good for fast processes like pipe and profile extrusions"
            )}
          </li>
          <li className="list-disc">
            {t("High tensile properties (good end product performance)")}
          </li>
        </ul>
        <p className="mt-4">
          {t(
            "67S is a free flowing vinyl chloride homopolymer resin designed for rigid extrusion applications. It is manufactured by suspension polymerization. 67S has following properties that make it suitable for rigid PVC extrusion with high production throughput:"
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
          <p className="text-[#57C5B6]">{t("Polyvinyl – Chloride")}</p>
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

export default Polyvinyl;
