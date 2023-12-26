import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const PolysulfiteJoint = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PS 110</p>
          <p>
            {t(
              "Water and Chemical Resistant, Polysulphide Based, Self Leveling Type Joint Filler and Insulation Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Polysulphite-based, two-component")}
          </li>
          <li className="list-disc"> {t("Cold applied")}</li>
          <li className="list-disc">
            {t(
              "Chemically hardens and gives a smooth surface by itself (self-levelling)"
            )}
          </li>
          <li className="list-disc"> {t("High adhesion strength")}</li>
          <li className="list-disc">
            {" "}
            {t("Resistant to static and dynamic movements")}
          </li>
          <li className="list-disc">
            {t(
              "Resistant to fresh, salt and waste water, solvents, fuels, oils, acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "It can also be used for the repair of cracks in concrete floors"
            )}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "It is a two-component, cold applied, chemically hardening polysulphide based, elastomeric, high adhesion, resistant to dynamic movements, not affected by waste water, solvents, fuels, hydraulic fluids and oils, suitable for heavy traffic conditions. It also adapts to permanent movements caused by building or infrastructure movements. It is designed for inclined, vertical and inverted joints and formulated in such a way that it does not flow during application. It is especially produced for applications that will be under water and where chemical resistance is important. In addition, it is a very suitable joint filling material for motorways, parking areas, secondary roads, bridge connections, stadiums, industrial floors, pavements, fuel stations, roads and concrete areas in petrochemical and other industrial facilities exposed to all kinds of traffic. It is suitable for all kinds of vertical and horizontal joints in open and closed areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PS 111</p>
          <p>
            {t(
              "Water and Chemical Resistant, Polysulphide Based, Non-Flowing Type Joint Filling and Insulation Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Polysulphite-based, two-component")}
          </li>
          <li className="list-disc"> {t("Cold applied")}</li>
          <li className="list-disc"> {t("Chemically hardens")}</li>
          <li className="list-disc">
            {" "}
            {t("Can be applied vertically and overhead")}
          </li>
          <li className="list-disc"> {t("High adhesion strength")}</li>
          <li className="list-disc">
            {" "}
            {t("Resistant to static and dynamic movements")}
          </li>
          <li className="list-disc">
            {t(
              "Resistant to fresh, salt and waste water, solvents, fuels, oils, acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It can also be used for the repair of cracks in concrete floors"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, cold applied, chemically hardening polysulphide based, elastomeric, high adhesion, resistant to dynamic movements, not affected by waste water, solvents, fuels, hydraulic fluids and oils, suitable for heavy traffic conditions. It also adapts to permanent movements caused by building or infrastructure movements. It is designed for inclined, vertical and inverted joints and formulated in such a way that it does not flow during application. It is especially produced for applications that will be under water and where chemical resistance is important. In addition, it is a very suitable joint filling material for motorways, parking areas, secondary roads, bridge connections, stadiums, industrial floors, pavements, fuel stations, roads and concrete areas in petrochemical and other industrial facilities exposed to all kinds of traffic. It is suitable for all kinds of vertical and horizontal joints in open and closed areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PS JFR</p>
          <p>
            {t(
              "Jet Fuel Resistant, Cold Applied, Polysulphide Based, Self Leveling Type Joint Filler and Insulation Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Polysulphite-based, two-component")}
          </li>
          <li className="list-disc"> {t("Cold applied")}</li>
          <li className="list-disc">
            {" "}
            {t("Chemically hardens and gives a smooth surface by itself")}
          </li>
          <li className="list-disc">
            {" "}
            {t("Abrasion resistance and adhesion strength are very high")}
          </li>
          <li className="list-disc"> {t("Resistant to dynamic movements")}</li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "It can also be used for the repair of cracks in concrete floors"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, cold applied, chemically hardening, smooth surface, polysulphide based, coal tar added, elastomeric, high abrasion resistance and adhesion strength, especially resistant to jet fuels, hydraulic fluids and oils, suitable for heavy traffic conditions, resistant to dynamic movements. It is produced especially for underwater applications where high chemical resistance is required and for runways, parking areas, terminals and ramps, cargo areas and roads at airports. In addition, it is a very suitable joint filling material for motorways, parking areas, secondary roads, bridge connections, ramps, stadiums, industrial floors, pavements, fuel stations, roads and concrete areas in petrochemical and other industrial facilities exposed to all kinds of traffic. It can be used in indoor and outdoor applications."
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
          {" "}
          {t("All Products")}
        </h1>
      </div>
      <div className="bg-white w-[460px] h-20 slide-in-left  ">
        <div className="md:ml-20 ml-8 lg:ml-20 xl:ml-20  ">
          <h1 className="text-3xl  text-[#247781] pt-2">
            {" "}
            {t("Joint Filler")}
          </h1>
          <p className="text-[#57C5B6]">
            {t("Polysulphite Based Joint Sealants")}
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

export default PolysulfiteJoint;
