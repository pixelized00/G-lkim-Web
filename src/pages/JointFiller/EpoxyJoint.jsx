import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const EpoxyJoint = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:flex w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2EP 130</p>
          <p>
            {t(
              "Cold Applied, Epoxy Based, Heavy Duty and Traffic Type Joint Filler and Crack Repair Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Two component epoxy based")}</li>
          <li className="list-disc">
            {" "}
            {t("Cold applied, very easy to apply")}
          </li>
          <li className="list-disc"> {t("Takes chemical cure")} </li>
          <li className="list-disc"> {t("Spontaneously takes surface")}</li>
          <li className="list-disc"> {t("Very high adhesion to concrete")}</li>
          <li className="list-disc"> {t("Has high wear resistance")}</li>
          <li className="list-disc">
            {t(
              "Suitable for use in all joints and concrete cracks requiring high bearing strength and limited elasticity"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Resistant to dilute acids and bases, solvents and many chemicals"
            )}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "It is a two-component, cold applied, chemically hardening epoxy based joint filling material with high adhesion strength, suitable for heavy traffic conditions. It is resistant to organic and inorganic acids and alkalis as well as many chemicals. It is especially produced to be used in the joints of concrete pavements under heavy load and traffic. With its low viscosity structure, it can be filled and used even in narrow joints. StenSeal® 2EP 130 is especially suitable for use in roads, stadiums, industrial plants, harbour areas, dam platforms, warehouses, warehouses and warehouses, market and cargo areas and all similar indoor and outdoor concrete."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2EP 230</p>
          <p>
            {t(
              "Cold Applied, Epoxy Based, Heavy Duty and Traffic Type Joint Filler and Crack Repair Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Two component epoxy based")}</li>
          <li className="list-disc"> {t("Cold applied, very easy to apply")}</li>
          <li className="list-disc"> {t("Takes chemical cure")} </li>
          <li className="list-disc"> {t("Spontaneously takes surface")}</li>
          <li className="list-disc"> {t("Very high adhesion to concrete")}</li>
          <li className="list-disc"> {t("Has high wear resistance")}</li>
          <li className="list-disc">
            {t(
              "Suitable for use in all joints and concrete cracks requiring high bearing strength and limited elasticity"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Resistant to dilute acids and bases, solvents and many chemicals"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, cold applied, chemically hardening epoxy based joint filling material with high adhesion strength, suitable for heavy traffic conditions. It is resistant to organic and inorganic acids and alkalis as well as many chemicals. It is especially produced to be used in the joints of concrete pavements under heavy load and traffic. With its low viscosity structure, it can be filled and used even in narrow joints. StenSeal® 2EP 130 is especially suitable for use in roads, stadiums, industrial plants, harbour areas, dam platforms, warehouses, warehouses and warehouses, market and cargo areas and all similar indoor and outdoor concrete."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2EP 231</p>
          <p>
            {t(
              "Cold Applied, Epoxy Based, Non-Flowable, Joint Filling and Crack Repair Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Two component epoxy based")}</li>
          <li className="list-disc"> {t("Ideal for vertical and overhead applications")}</li>
          <li className="list-disc"> {t("Cold applied, very easy to apply")}</li>
          <li className="list-disc"> {t("Takes chemical cure")} </li>
          <li className="list-disc"> {t("Very high adhesion to concrete")}</li>
          <li className="list-disc"> {t("Has high wear resistance")}</li>
          <li className="list-disc">
            {t(
              "Suitable for use in all joints and concrete cracks requiring high bearing strength and limited elasticity"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Resistant to dilute acids and bases, solvents and many chemicals"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, cold applied, chemically curing epoxy based, elastomeric, high adhesion, joint filling material suitable for heavy traffic conditions. It is designed for inclined, vertical and inverted joints and is produced in such a way that it does not flow during application. It is resistant to organic and inorganic acids and alkalis, oil, fuel and antifreeze and many chemicals. It is especially produced for use in the joints of concrete pavements under heavy load and traffic. With its low viscosity structure, it can be filled and used even in narrow joints. StenSeal® 2EP 231 is especially suitable for use on roads, stadiums, industrial plants, harbour areas, dam platforms, warehouses, warehouses and warehouses, market and cargo areas and all similar indoor and outdoor concretes."
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
          <h1 className="text-2xl  text-[#247781] pt-2">{t("Joint Filler")}</h1>
          <p className="text-[#57C5B6]">{t("Epoxy Based Joint Fillers")}</p>
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

export default EpoxyJoint;
