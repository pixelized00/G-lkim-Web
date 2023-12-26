import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const SiliconeJoint = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PS 110</p>
          <p>{t("Self Surface Levelling Silicone Joint Sealant")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Silicone based, one component")}</li>
          <li className="list-disc"> {t("Low stiffness and high stretch")}</li>
          <li className="list-disc">{t("+100/-50 movement capacity")}</li>
          <li className="list-disc">{t("Suitable for horizontal joints")}</li>
          <li className="list-disc"> {t("Application without primer")}</li>
          <li className="list-disc"> {t("Adhesion to asphalt and concrete surfaces")}</li>
          <li className="list-disc"> {t("Longevity")}</li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemicals"
            )}
          </li>
          <li className="list-disc">{t("UV resistant, colourfast")}</li>
          <li className="list-disc">{t("Resistant to jet exhaust and high temperature")} </li>
          <li className="list-disc">{t("Ready to use, easy implementation")}</li>
          <li className="list-disc">{t("Ideal for airport, motorway and large outdoor floors")}</li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "One-component, cold applied, self-levelling, low hardness grouting material. Designed for outdoor concrete floors. Suitable for environments with heavy traffic conditions, high temperatures and short-term chemical contact. Resistant to dynamic movements, UV radiation and sudden temperature changes. StenSeal® SI 110 fully complies with ASTM D 5893 and is classified as Type A, SL, S according to EN 14188-2. Suitable for horizontal joints and cracks. Can be used in indoor and outdoor applications. Suitable for joint applications in airports, motorways, bridges, refineries and chemical plants. Used in expansion and contraction joints. Can be applied on asphalt or concrete floors. Adheres to properly prepared joints without the need for primer."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal SI 111</p>
          <p>{t("Non-flow Type Silicone Joint Sealant")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Silicone based, one component")}</li>
          <li className="list-disc"> {t("Low stiffness and high stretch")}</li>
          <li className="list-disc">{t("+100/-50 movement capacity")}</li>
          <li className="list-disc">
            {" "}
            {t("Suitable for use in inclined, vertical and reverse joint")}
          </li>
          <li className="list-disc"> {t("Application without primer")}</li>
          <li className="list-disc"> {t("Adhesion to asphalt and concrete surfaces")}</li>
          <li className="list-disc"> {t("Longevity")}</li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemicals"
            )}
          </li>
          <li className="list-disc">{t("UV resistant, colourfast")}</li>
          <li className="list-disc">{t("Resistant to jet exhaust and high temperature")} </li>
          <li className="list-disc">{t("Ready to use, easy implementation")}</li>
          <li className="list-disc">{t("Ideal for airport, motorway and large outdoor floors")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "One component, cold applied, non-flowable, low hardness joint filling material. It can be used in inclined, vertical and reverse joints. Designed for outdoor concrete floors. Suitable for environments with heavy traffic conditions, high temperatures and short-term chemical contact. Resistant to dynamic movements, UV radiation and sudden temperature changes. StenSeal® SI 111 fully complies with ASTM D 5893 and is classified as Type A, SL, S according to EN 14188-2. It should be considered especially for sloping, vertical and inverted joints in ceilings. Can be used in indoor and outdoor applications. Suitable for joint applications in airports, motorways, bridges, refineries and chemical plants. Used in expansion and contraction joints. Can be applied on asphalt or concrete floors. Adheres to properly prepared joints without the need for primer."
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
        <div className="md:ml-20 ml-8 lg:ml-20 xl:ml-20  ">
          <h1 className="text-3xl  text-[#247781] pt-2">{t("Joint Filler")}</h1>
          <p className="text-[#57C5B6]">{t("Silicone Based Joint Sealants")}</p>
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

export default SiliconeJoint;
