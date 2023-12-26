import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const ChemicalsProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Acetone")}</p>
          <p className="font-bold text-4xl">{t("2110")}</p>
          <p className="font-bold text-md">{t("Solvent, Industrial use")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Form Liquid")}</li>
          <li className="list-disc">{t("State of matter Liquid")}</li>

          <li className="list-disc">{t("Colour Colourless")}</li>
          <li className="list-disc">{t("Odour Pungent")}</li>
          <li className="list-disc">{t("Melting point/range -95.35 °C")}</li>
          <li className="list-disc">
            {t("Boiling point/boiling range 56.2 °C")}
          </li>
          <li className="list-disc">{t("Flash point -20 °C")}</li>
          <li className="list-disc">{t("Autoignition temperature 465 °C")}</li>
          <li className="list-disc">{t("Lower explosion limit 2.6 %(V)")}</li>
          <li className="list-disc">{t("Upper explosion limit 12.8 %(V)")}</li>
          <li className="list-disc">
            {t("Vapour pressure 307.974 hPa; 25 °C")}
          </li>
          <li className="list-disc">{t("Density 0.79 g/cm3")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Ethanol 99.9 DB")}</p>
          <p className="font-bold text-4xl">{t("2019")}</p>
          <p className="font-bold text-md">
            {t(
              "In the event of fire, wear self-contained breathing apparatus. Use personal protective equipment."
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Form Liquid")}</li>
          <li className="list-disc">{t("Colour Colourless")}</li>
          <li className="list-disc">{t("pH Neutral")}</li>
          <li className="list-disc">{t("Melting point/range -114.1 °C")}</li>
          <li className="list-disc">
            {t("Boiling point/boiling range 78.4 °C")}
          </li>
          <li className="list-disc">{t("Flash point 16 °C; closed cup")}</li>
          <li className="list-disc">{t("Autoignition temperature 363 °C")}</li>
          <li className="list-disc">{t("Lower explosion limit 3.3 %(V)")}</li>
          <li className="list-disc">{t("Upper explosion limit 19 %(V)")}</li>
          <li className="list-disc">{t("Density 0.791 g/cm3; 20 °C")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Ethylol 95")}</p>
          <p className="font-bold text-4xl">{t("2050")}</p>
          <p className="font-bold text-md">
            {t(
              "Raw material for aerosol propellants, printing ink additive, For industrial use only."
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Form Liquid")}</li>
          <li className="list-disc">
            {t("State of matter Liquid; at 20 °C; 1,013 hPa")}
          </li>
          <li className="list-disc">{t("Colour Colourless")}</li>
          <li className="list-disc">{t("Odour Alcohol-like")}</li>
          <li className="list-disc">{t("pH Neutral")}</li>
          <li className="list-disc">{t("Melting point/range -88.5 °C")}</li>
          <li className="list-disc">
            {t("Boiling point/boiling range 78.4 °C")}
          </li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Iso-propylol")}</p>
          <p className="font-bold text-md">
            {t("Solvent, For industrial use only.")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Form Liquid")}</li>
          <li className="list-disc">{t("Colour Colourless")}</li>
          <li className="list-disc">
            {t("Odour Aromatic pleasant acetone-like")}
          </li>
          <li className="list-disc">{t("pH Neutral")}</li>
          <li className="list-disc">
            {t("Boiling point/boiling range 82.1 – 83 °C")}
          </li>
          <li className="list-disc">{t("Flash point 14 °C; Closed cup")}</li>
          <li className="list-disc">{t("Autoignition temperature 363 °C")}</li>
          <li className="list-disc">{t("Lower explosion limit 3.3 %(V)")}</li>
          <li className="list-disc">{t("Upper explosion limit 19 %(V)")}</li>
          <li className="list-disc">{t("Density 0.785 g/cm3; 20 °C")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Iso-Propylol (tg)B")}</p>
          <p className="font-bold text-4xl">{t("2136")}</p>

          <p className="font-bold text-md">
            {t(
              "General advice Victim to lie down in the recovery position, cover and keep him warm."
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">
            {t("State of matter liquid; at 20 °C; 1,013 hPa")}
          </li>
          <li className="list-disc">{t("Colour Colourless")}</li>
          <li className="list-disc">{t("Odour characteristic")}</li>
          <li className="list-disc">
            {t("Boiling point/boiling range 83 °C")}
          </li>
          <li className="list-disc">
            {t("Flash point 14 °CFlash point 14 °C")}
          </li>
          <li className="list-disc">{t("Density 0.800 g/cm3")}</li>
          <li className="list-disc">
            {t("Water solubility completely soluble, completely miscible")}
          </li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">
            {t("Methyl Isobutyl Ketone")}
          </p>
          <p className="font-bold text-4xl">{t("2111")}</p>

          <p className="font-bold text-md">
            {t(
              "Highly flammable.Harmful by inhalation.Irritating to eyes and respiratory system.Repeated exposure may cause skin dryness or cracking."
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Form Liquid")}</li>
          <li className="list-disc">
            {t("State of matter Liquid; at 20 °C; 1,013 hPa")}
          </li>
          <li className="list-disc">{t("Colour Colourless")}</li>
          <li className="list-disc">{t("Odour pleasant")}</li>
          <li className="list-disc">{t("Melting point/range -84 °C")}</li>
          <li className="list-disc">
            {t("Boiling point/boiling range 115.9 °C")}
          </li>
          <li className="list-disc">{t("Flash point 14 °C; Closed cup")}</li>
          <li className="list-disc">{t("Autoignition temperature 448 °C")}</li>
          <li className="list-disc">{t("Lower explosion limit 1.4 %(V)")}</li>
          <li className="list-disc">{t("Upper explosion limit 7.5 %(V)")}</li>
          <li className="list-disc">{t("Vapour pressure 15.7 hPa; 20 °C")}</li>
          <li className="list-disc">{t("Density 0.80 g/cm3; 20 °C")}</li>
          <li className="list-disc">{t("Water solubility immiscible")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Prop BH")}</p>
          <p className="font-bold text-md">
            {t(
              "Flammable.Irritating to respiratory system and skin.Risk of serious damage to eyes.Vapours may cause drowsiness and dizziness."
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Form Liquid")}</li>
          <li className="list-disc">
            {t("State of matter Liquid; at 20 °C; 1,013 hPa")}
          </li>
          <li className="list-disc">{t("Colour Colourless")}</li>
          <li className="list-disc">{t("Odour Alcohol-like")}</li>
          <li className="list-disc">{t("pH 7")}</li>
          <li className="list-disc">{t("Melting point/range -89.5 °C")}</li>
          <li className="list-disc">
            {t("Boiling point/boiling range 99 – 103 °C")}
          </li>
          <li className="list-disc">{t("Flash point 30 °C")}</li>
          <li className="list-disc">{t("Autoignition temperature 343 °C")}</li>
          <li className="list-disc">{t("Lower explosion limit 2.1 %(V)")}</li>
          <li className="list-disc">{t("Upper explosion limit 13.5 %(V)")}</li>
          <li className="list-disc">{t("Density 0.804 g/cm3")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("Sabutol")}</p>
          <p className="font-extrabold text-4xl">{t("2051")}</p>

          <p className="font-bold text-md">
            {t(
              "Raw material for printing inks and printing ink additives, Paint related material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">{t("Specification")}</p>
        <ul className="mx-4 mt-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Colour Colourless")}</li>
          <li className="list-disc">{t("Odour Alcohol-like")}</li>
          <li className="list-disc">{t("pH 7; Neutral")}</li>
          <li className="list-disc">{t("Melting point/range -89 °C")}</li>
          <li className="list-disc">
            {t("Boiling point/boiling range 117 °C")}
          </li>
          <li className="list-disc">{t("Flash point 32 °C; Closed cup")}</li>
          <li className="list-disc">{t("Autoignition temperature 343 °C")}</li>
          <li className="list-disc">{t("Lower explosion limit 1.4 %(V)")}</li>
          <li className="list-disc">{t("Upper explosion limit 11.2 %(V)")}</li>
          <li className="list-disc">{t("Vapour pressure 5.31 hPa")}</li>
          <li className="list-disc">{t("Density 0.808 g/cm3; 20 °C")}</li>
          <li className="list-disc">
            {t("Water solubility Completely soluble")}
          </li>
          <li className="list-disc">
            {t("Solubility in other solvents Partly soluble")}
          </li>
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
          <p className="text-[#57C5B6]">{t("Chemical Products")}</p>
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

export default ChemicalsProducts;
