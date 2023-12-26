import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const BitumenJoint = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal ASR</p>
          <p>
            {t(
              "Bitumen Rubber Based, Hot Applied, Crack Repair and Joint Filling Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Asphalt polymer based hot applied")}</li>
          <li className="list-disc">{t("Ready for use")}</li>
          <li className="list-disc">
            {t(
              "Maintains its flexibility even at very low temperatures; does not become brittle, does not crack"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It becomes suitable for heavy traffic conditions shortly after application"
            )}
          </li>
          <li className="list-disc">
            {t("Used for filling joints and repairing cracks in asphalt areas")}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "Modified asphalt is a hot applied crack repair, joint filling and insulation material consisting of polymers, plasticisers and fillers. It is suitable for joints, cracks and small repairs in concrete and asphalt areas, especially joints that are constantly under water in dams and water channels. It can be used on horizontal and vertical surfaces. Thanks to its plasto elastic structure, it easily meets the movements. It is applied without high temperatures and allows use shortly after application. It is used to provide impermeability on all kinds of concrete and asphalt surfaces, filling joints and cracks, isolating joints, filling duct and pipe joints, covering cable ducts and small-scale ground repair. Especially designed for underwater joints where dynamic movements are low. Due to its salt, clean and waste water resistance and its feature that does not allow the formation of microbiological factors, it is suitable for use in all kinds of infrastructure without solvent and fuel contact. It is preferred in places exposed to continuous water contact such as water channels, waste water pools, dams, hydroelectric power plants. It can also be used in concrete areas and joints between concrete and asphalt. Suitable for horizontal and vertical joints."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal ASR-E</p>
          <p>
            {t(
              "Bitumen Rubber Based, Hot Applied, Economic Type Crack Repair and Joint Filling Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Asphalt polymer based hot applied")}</li>
          <li className="list-disc">{t("Ready for use")}</li>
          <li className="list-disc">
            {t(
              "Maintains its flexibility even at very low temperatures; does not become brittle, does not crack"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It becomes suitable for heavy traffic conditions shortly after application"
            )}
          </li>
          <li className="list-disc">
            {t("Used for filling joints and repairing cracks in asphalt areas")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Modified asphalt is a hot applied crack repair, joint filling and insulation material consisting of polymers, plasticisers and fillers. It is suitable for joints, cracks and small repairs in concrete and asphalt areas, especially joints that are constantly under water in dams and water channels. It can be used on horizontal and vertical surfaces. Thanks to its plasto elastic structure, it easily meets the movements. It is applied without high temperatures and allows use shortly after application. It is used to provide impermeability on all kinds of concrete and asphalt surfaces, filling joints and cracks, isolating joints, filling duct and pipe joints, covering cable ducts and small-scale ground repair. Especially designed for underwater joints where dynamic movements are low. Due to its salt, clean and waste water resistance and its feature that does not allow the formation of microbiological factors, it is suitable for use in all kinds of infrastructure without solvent and fuel contact. It is preferred in places exposed to continuous water contact such as water channels, waste water pools, dams, hydroelectric power plants. It can also be used in concrete areas and joints between concrete and asphalt. Suitable for horizontal and vertical joints."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal ATR</p>
          <p>
            {t("Hot Applied Elastic Joint Filling and Crack Repair Material")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Asphalt polymer based hot applied")}</li>
          <li className="list-disc">{t("Ready for use")}</li>
          <li className="list-disc">
            {t(
              "Easily applied by hand, does not require heating to high temperatures"
            )}
          </li>
          <li className="list-disc">{t("Can be used in vertical joints")}</li>
          <li className="list-disc">{t("Suitable for continuous water contac")} </li>
          <li className="list-disc">
            {t(
              "It becomes suitable for heavy traffic conditions shortly after application"
            )}
          </li>
          <li className="list-disc">
            {t("Used for filling joints and repairing cracks in asphalt areas")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Modified asphalt is a hot applied crack repair, joint filling and insulation material consisting of polymers, plasticisers and fillers. It is suitable for joints, cracks and small repairs in concrete and asphalt areas, especially joints that are constantly under water in dams and water channels. It can be used on horizontal and vertical surfaces. Thanks to its plasto elastic structure, it easily meets the movements. It is applied without high temperatures and allows use shortly after application. It is used to provide impermeability on all kinds of concrete and asphalt surfaces, filling joints and cracks, isolating joints, filling duct and pipe joints, covering cable ducts and small-scale ground repair. Especially designed for underwater joints where dynamic movements are low. Due to its salt, clean and waste water resistance and its feature that does not allow the formation of microbiological factors, it is suitable for use in all kinds of infrastructure without solvent and fuel contact. It is preferred in places exposed to continuous water contact such as water channels, waste water pools, dams, hydroelectric power plants. It can also be used in concrete areas and joints between concrete and asphalt. Suitable for horizontal and vertical joints."
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
          <p className="text-[#57C5B6]">
            {t("Bitumen Rubber Based Joint Sealants")}
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
export default BitumenJoint;
