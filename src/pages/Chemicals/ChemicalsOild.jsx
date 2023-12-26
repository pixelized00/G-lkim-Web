import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const ChemicalsOild = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("A-5300")}</p>
          <p className="font-bold text-4xl">{t("A5300")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="text-black">
          {t(
            "Get medical attention immediately. Call a poison center or physician. Immediately flush the eye(s) continuously with lukewarm, gently flowing water for at least 20-60 minutes while holding the eyelid(s) open. Check for and remove any contact lenses. Chemical burns must be treated promptly by a physician."
          )}
        </p>
        <p className=" text-[black] mt-2">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">
            {t("Physical state: Liquid. [Clear to hazy.]")}
          </li>
          <li className="list-disc">{t("Color: Amber.")}</li>
          <li className="list-disc">{t("Odor: Acidic. [Strong]")}</li>
          <li className="list-disc">
            {t("pH: 3. 5% of product in 75% isopropanol / 25% water solution")}
          </li>
          <li className="list-disc">
            {t("Melting/freezing point: Not available.")}
          </li>
          <li className="list-disc">{t("Burning time: Not applicable.")}</li>
          <li className="list-disc">{t("Density: 9.79 (lbs/gal)")}</li>
          <li className="list-disc">{t("Solubility in water : Soluble")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("A-5369")}</p>
          <p className="font-bold text-3xl">{t("A5369")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="text-black">
          {t(
            "Get medical attention immediately. Call a poison center or physician. Immediately flush the eye(s) continuously with lukewarm, gently flowing water for at least 20-60 minutes while holding the eyelid(s) open. Check for and remove any contact lenses. Chemical burns must be treated promptly by a physician."
          )}
        </p>
        <p className=" text-[black] mt-2">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Physical state: Liquid.")}</li>
          <li className="list-disc">{t("Color: Amber.")}</li>
          <li className="list-disc">{t("Odor: Alcohol-like.")}</li>
          <li className="list-disc">{t("Boiling point: Not available.")}</li>
          <li className="list-disc">
            {t("Flash point: Closed cup: 18°C (64.4°F) [PMCC]")}
          </li>
          <li className="list-disc">{t("Burning time: Not applicable.")}</li>
          <li className="list-disc">{t("Relative Density: 0.92 (20°C)")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("A264")}</p>
          <p className="font-bold text-3xl">{t("A264")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="text-black">
          {t(
            "Get medical attention immediately. Immediately flush eyes with plenty of water, occasionally lifting the upper and lower eyelids. Check for and remove any contact lenses. Continue to rinse for at least 15 minutes."
          )}
        </p>
        <p className=" text-[black] mt-2">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Physical state: Liquid.")}</li>
          <li className="list-disc">{t("Colour: Amber.")}</li>
          <li className="list-disc">{t("Odour: Alcohol-like.")}</li>
          <li className="list-disc">{t("pH: 3.1")}</li>
          <li className="list-disc">{t("Boiling point: >=65°C (>=149°F)")}</li>
          <li className="list-disc">
            {t("Melting point/freezing: Not available.")}
          </li>
          <li className="list-disc">{t("Vapour pressure: Not available.")}</li>
          <li className="list-disc">{t("Relative density: 0.93 (16°C)")}</li>
        </ul>
      </div>
    </div>,
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("AQUET™ 943C FOAMER")}</p>
          <p className="font-bold text-3xl">{t("AQT943C")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="text-black">
          {t(
            "Immediately flush eyes with plenty of water, occasionally lifting the upper and lower eyelids. Continue to rinse for at least 10 minutes. Check for and remove any contact lenses. Get medical attention."
          )}
        </p>
        <p className=" text-[black] mt-2">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Physical state: Liquid. [Clear.]")}</li>
          <li className="list-disc">{t("Color: Amber. [Light]")}</li>
          <li className="list-disc">{t("Ph:5 to 7[Conc. (% w/w): 10%]")}</li>
          <li className="list-disc">
            {t("Melting/freezing point: <-12°C (<10.4°F)")}
          </li>
          <li className="list-disc">{t("Boiling point:100°C (212°F)")}</li>
          <li className="list-disc">{t("Burning time: Not applicable.")}</li>
          <li className="list-disc">
            {t(
              "Vapor pressure:2.2 kPa (16.8 mm Hg) @ 21.1°C (Calculated Value for all Components.)"
            )}
          </li>
          <li className="list-disc">{t("Solubility in water: soluble")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("CRONOX™ 263SC")}</p>
          <p className="font-bold text-3xl">{t("CRO263SC")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="text-black">
          {t(
            "Get medical attention immediately. Call a poison center or physician. Immediately flush the eye(s) continuously with lukewarm, gently flowing water for at least 20-60 minutes while holding the eyelid(s) open. Check for and remove any contact lenses. Chemical burns must be treated promptly by a physician."
          )}
        </p>
        <p className=" text-[black] mt-2">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Physical state:Liquid. [Clear.]")}</li>
          <li className="list-disc">{t("Color: Yellow to light amber")}</li>
          <li className="list-disc">{t("pH: 9.5 to 10.5 Melting/freezing")}</li>
          <li className="list-disc">{t("point: -37°C (-34.6°F)")}</li>
          <li className="list-disc">{t("Boiling point: Not available.")}</li>
          <li className="list-disc">{t("Burning time: Not applicable.")}</li>
          <li className="list-disc">
            {t(
              "Vapor pressure: 3.3 kPa (24.6 mm Hg) @ 21°C (Calculated Value for all Components.)"
            )}
          </li>
          <li className="list-disc">{t("Solubility in water: soluble")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("CRONOX™ 284ES")}</p>
          <p className="font-bold text-3xl">{t("CRO284ES")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="text-black">
          {t(
            "Get medical attention immediately. Immediately flush eyes with plenty of water, occasionally lifting the upper and lower eyelids. Check for and remove any contact lenses. Continue to rinse for at least 15 minutes. Chemical burns must be treated promptly by a physician."
          )}
        </p>
        <p className=" text-[black] mt-2">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Physical state: Liquid. [Clear.]")}</li>
          <li className="list-disc">{t("Color: Amber. [Dark]")}</li>
          <li className="list-disc">
            {t("pH: 2.9[Conc. (%w/w): 5% – (75%IPA:25%H2O)]")}
          </li>
          <li className="list-disc">
            {t("Melting/freezing point: Not available")}
          </li>
          <li className="list-disc">{t("Boiling point: Not available")}</li>
          <li className="list-disc">{t("Vapor pressure: Not available")}</li>
          <li className="list-disc">
            {t("Solubility in water: Not available")}
          </li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Surfasol P-720")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="text-black">
          {t(
            "Show this safety data sheet to the doctor in attendance. First aider needs to protect himself/herself. Place affected clothing in a sealed bag for subsequent decontamination."
          )}
        </p>
        <p className=" text-[black] mt-2">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Physical State: Liquid.")}</li>
          <li className="list-disc">{t("Color: Light Yellow")}</li>
          <li className="list-disc">{t("Odor: Characteristic Odor")}</li>
          <li className="list-disc">{t("pH: Not applicable")}</li>
          <li className="list-disc">{t("Boiling Point: >=150 °C")}</li>
          <li className="list-disc">{t("Flash Point: >=100 °C")}</li>
          <li className="list-disc">{t("Vapor Pressure: < 5 mm Hg")}</li>
          <li className="list-disc">{t("Vapor Density: Heavier than air")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("U108")}</p>
          <p className="font-bold text-3xl">{t("U108")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="text-black">
          {t(
            "Remove victim immediately from source of exposure. Provide rest, warmth and fresh air. Get medical attention if any discomfort continues. If respiratory problems, artificial respiration/oxygen."
          )}
        </p>
        <p className=" text-[black] mt-2">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("PAPPEARANCE: Liquid")}</li>
          <li className="list-disc">{t("COLOUR: Dark Amber")}</li>
          <li className="list-disc">{t("ODOUR: Moderate")}</li>
          <li className="list-disc">
            {t("PHYSICAL DATA COMMENTS: Non flammable liquid")}
          </li>
          <li className="list-disc">{t("BOILING POINT: (°C) Initial 88")}</li>
          <li className="list-disc">{t("MELTING POINT: (°C) -23.3")}</li>
          <li className="list-disc">{t("VISCOSITY: < 1000 cps @ 20 °c")}</li>
        </ul>
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
          <h1 className="text-2xl  text-[#247781] pt-2">{t("Chemicals")}</h1>
          <p className="text-[#57C5B6]">{t("Oil field Chemicals")}</p>
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

export default ChemicalsOild;
