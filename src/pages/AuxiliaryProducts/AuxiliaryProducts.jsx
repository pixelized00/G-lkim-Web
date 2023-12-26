import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const AuxiliaryProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSolver</p>
          <p>{t("Cleaning and Thinning Solvent")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "StenSolver PU is designed for cleaning and thinning of polyurethane based materials with solvent."
            )}
          </li>
          <li className="list-disc">
            {t(
              "StenSolver EP is designed for cleaning and thinning of epoxy based materials with solvent."
            )}
          </li>
          <li className="list-disc">
            {t(
              "StenSolver CL is designed to be used in cleaning of tools and surfaces smeared with all polymeric materials produced by Stenkim®."
            )}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "StenSolver is a combustible, inflammable mixture containing aromatic and aliphatic solvents. It has high solvation power; it vaporizes easily and does not mix with water."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenQuick PU</p>
          <p>{t("Reaction Accelerator for Polyurethane Materials")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "It decreases curing time of the products at low ambient temperatures."
            )}
          </li>
          <li className="list-disc">
            {t("It provides application convenience for the user.")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "StenQuick PU is produced for accelerating the reaction speed (curing speed) of polyurethane materials produced by Stenkim®."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSlow PU</p>
          <p>{t("Reaction Decelerator for Polyurethane Materials")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "It prolongs application time of the products at high ambient temperatures."
            )}{" "}
          </li>
          <li className="list-disc">
            {t("It provides application convenience for the user.")}{" "}
          </li>
          <li className="list-disc">
            {t("It does not change the final properties of the products.")}
          </li>{" "}
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "StenSlow PU is produced for decelerating the reaction speed (curing speed) of polyurethane materials produced by Stenkim®."
          )}
        </p>{" "}
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenBacker</p>
          <p>{t("Closed Cell Polyethylene Rod")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "It prevents sealants to adhere to the bottom of the joint and ensures better compensation for floor movements."
            )}
          </li>
          <li className="list-disc">
            {t(
              "It adjusts joint depth and supports proper operation of the joints."
            )}
          </li>
          <li className="list-disc">
            {t("It lowers the costs by preventing unnecessary sealant use.")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t("StenBacker is a closed cell polyethylene (PE) rod.")}{" "}
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
    <div className="bg-[#F3F3F3] w-screen overflo-hidden">
      <div className="ml-20">
        <h1 className="pt-10 text-[#247781] font-bold mb-6">
          {t("All Products")}
        </h1>
      </div>
      <div className="bg-white w-[460px] h-20 slide-in-left  ">
        <div className="md:ml-20 ml-8 lg:ml-20 xl:ml-20  ">
          {" "}
          <h1 className="text-3xl  text-[#247781] pt-2">
            {t("Auxiliary Products")}
          </h1>
          <p className="text-[#57C5B6]"> {t("Auxiliary Products")}</p>
        </div>
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

export default AuxiliaryProducts;
