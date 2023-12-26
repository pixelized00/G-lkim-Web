import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const WaterOilMaterials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSilan M</p>
          <p>
            {t(
              "Water and Oil Repellent Impregnation Material for Surfaces such as Marble, Granite and Travertine"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}
          </li>
          <li className="list-disc">
            {t("It is a transparent, low viscosity liquid")}
          </li>
          <li className="list-disc">
            {t(
              "It does not prevent the applied surface from breathing, does not change its natural appearance"
            )}
          </li>
          <li className="list-disc">
            {t("Can be used in many different types of natural stone types")}
          </li>
          <li className="list-disc">
            {t("Provides effective solution on difficult surfaces")}
          </li>
          <li className="list-disc">
            {t(
              "Forms hydrophobic and oleophobic structure in depth without forming a film layer on the surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Liquids remaining on the surface can be easily cleaned by wiping and do not leave stains"
            )}
          </li>
          <li className="list-disc">{t("Resistant to UV rays")}</li>
          <li className="list-disc">
            {t(
              "Prevents the phenomenon of salt vomiting on the surface during drying, which is seen on water-absorbing surfaces"
            )}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "One component, silane based, water and oil impermeability and impregnation material for natural stone and marble surfaces. It chemically binds to mineral surfaces, making them hydrophobic (water repellent) and oleophobic (oil repellent). Surfaces treated with StenSilan M do not get wet and contaminated with water, oil and many similar liquids. It is a transparent liquid with very low viscosity, has high surface covering and diffusion to the material. It does not form a separate layer from the surface, instead it enables the surface to gain water and oil repellency. In this way, the oil and water repellent properties remain until the upper surface of the stone is completely worn away, and there is no danger of peeling, separation, brittleness or slipperiness of the coating over time, which is common in impregnated type materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSilan M PLUS</p>
          <p>
            {t(
              "Water and Oil Repellent Impregnation Material with Increased Efficiency for Surfaces such as Marble, Granite and Travertine"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}
          </li>
          <li className="list-disc">
            {t("It is a transparent, low viscosity liquid")}
          </li>
          <li className="list-disc">
            {t(
              "It does not prevent the applied surface from breathing, does not change its natural appearance"
            )}
          </li>
          <li className="list-disc">
            {t("Can be used in many different types of natural stone types")}
          </li>
          <li className="list-disc">
            {t("Provides effective solution on difficult surfaces")}
          </li>
          <li className="list-disc">
            {t(
              "Forms hydrophobic and oleophobic structure in depth without forming a film layer on the surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Liquids remaining on the surface can be easily cleaned by wiping and do not leave stains"
            )}
          </li>
          <li className="list-disc">{t("Resistant to UV rays")}</li>
          <li className="list-disc">
            {t(
              "Prevents the phenomenon of salt vomiting on the surface during drying, which is seen on water-absorbing surfaces"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "One component, silane based, water and oil impermeability and impregnation material for natural stone and marble surfaces. It chemically binds to mineral surfaces and provides hydrophobic (water repellent) and oleophobic (oil repellent) properties to these surfaces. Surfaces treated with StenSilan M PLUS do not get wet and contaminated with water, oil and many similar liquids. It is a transparent liquid with very low viscosity, has high surface covering and diffusion to the material. It does not form a separate layer from the surface, instead it enables the surface to gain water and oil repellency. In this way, the oil and water repellent properties remain until the upper surface of the stone is completely worn off and there is no danger of peeling, separation, brittleness or slipperiness of the coating over time, which is encountered in impregnated type materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSilan M PLUS</p>
          <p>
            {t(
              "Water and Oil Repellent Impregnation Material with Increased Efficiency for Surfaces such as Marble, Granite and Travertine"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}
          </li>
          <li className="list-disc">
            {t("It is a transparent, low viscosity liquid")}
          </li>
          <li className="list-disc">
            {t(
              "It does not prevent the applied surface from breathing, does not change its natural appearance"
            )}
          </li>
          <li className="list-disc">
            {t("Can be used in many different types of natural stone types")}
          </li>
          <li className="list-disc">
            {t("Provides effective solution on difficult surfaces")}
          </li>
          <li className="list-disc">
            {t(
              "Forms hydrophobic and oleophobic structure in depth without forming a film layer on the surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Liquids remaining on the surface can be easily cleaned by wiping and do not leave stains"
            )}
          </li>
          <li className="list-disc">{t("Resistant to UV rays")}</li>
          <li className="list-disc">
            {t(
              "Prevents the phenomenon of salt vomiting on the surface during drying, which is seen on water-absorbing surfaces"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "One component, silane based, water and oil impermeability and impregnation material for natural stone and marble surfaces. It chemically binds to mineral surfaces and provides hydrophobic (water repellent) and oleophobic (oil repellent) properties to these surfaces. Surfaces treated with StenSilan M PLUS do not get wet and contaminated with water, oil and many similar liquids. It is a transparent liquid with very low viscosity, has high surface covering and diffusion to the material. It does not form a separate layer from the surface, instead it enables the surface to gain water and oil repellency. In this way, the oil and water repellent properties remain until the upper surface of the stone is completely worn off and there is no danger of peeling, separation, brittleness or slipperiness of the coating over time, which is encountered in impregnated type materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSilan T</p>
          <p>
            {t(
              "Water Repellent Impregnation for Brick, Tile and Other Terracotta Surfaces"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}
          </li>
          <li className="list-disc">
            {t("It is a transparent liquid with low viscosity")}
          </li>
          <li className="list-disc">
            {t(
              "It does not prevent the applied surface from breathing, does not change its natural appearance"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can be used in many different types of terracotta and prefabricated construction"
            )}
          </li>
          <li className="list-disc">
            {t(
              "The ability to cover the surface and diffuse into the material is very high"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It is impregnated, it creates a deep hydrophobic structure without forming a film layer on the surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Liquids remaining on the surface can be easily cleaned by wiping and do not leave stains"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It is resistant to UV rays and increases the strength of the surface it covers"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Prevents the phenomenon of salt vomiting on the surface during drying, which is seen on water-absorbing surfaces"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a one-component, silane-based, water impermeability and impregnation material for surfaces such as bricks, tiles, all kinds of unglazed ceramic surfaces, gas concrete building elements, prefabricated concrete panels, tiles. It chemically binds to mineral surfaces and provides hydrophobic (water repellent) properties to these surfaces. Surfaces treated with StenSilan T do not get wet with water and do not retain water-soluble dirt. It is a transparent liquid with very low viscosity, has high surface covering and diffusion to the material. It does not form a separate layer from the surface, instead it enables the surface to gain water repellency. In this way, the water-repellent properties remain until the upper surface of the coating is completely worn off, and there is no danger of peeling, separation, brittleness or slipperiness of the coating over time, which is encountered in impregnated type materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSilan WO</p>
          <p>
            {t(
              "Silane Based, Water and Oil Repellent Impregnation and Protection Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}
          </li>
          <li className="list-disc">
            {t("It is a transparent liquid with low viscosity")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "It does not prevent the applied surface from breathing, does not change its natural appearance"
            )}
          </li>
          <li className="list-disc">
            {t(
              "The ability to cover the surface and diffuse into the material is very high"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It is impregnated, it creates a deep hydrophobic structure without forming a film layer on the surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Liquids remaining on the surface can be easily cleaned by wiping and do not leave stains"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It is resistant to UV rays and increases the strength of the surface it covers"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Prevents the phenomenon of salt vomiting on the surface during drying, which is seen on water-absorbing surfaces"
            )}
          </li>
          <li className="list-disc">
            {t("The paintability of the applied surface increases")}
          </li>
          <li className="list-disc">
            {t("Can be applied by spraying or by hand with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a one-component, silane-based, water and oil impermeability and impregnation material that chemically binds to all surfaces such as concrete, plaster and some mineral surfaces and enables these surfaces to gain hydrophobic (water repellent) and oleophobic (oil repellent) properties. Surfaces treated with StenSilan WO do not get wet and contaminated with water, oil and many similar liquids. It is a transparent liquid with very low viscosity, has high surface covering and diffusion to the material. It does not form a separate layer from the concrete, instead it enables the concrete to gain water and oil repellency. In this way, the oil and water repellent properties remain until the upper layers of the concrete are completely eroded, and there is no danger of peeling, separation, brittleness or slipperiness of the coating over time, which is encountered in impregnation-type materials"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSilan WW</p>
          <p>
            {t(
              "Silane Based, Water Repellent Impregnation and Protection Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}
          </li>
          <li className="list-disc">
            {t("It is a transparent liquid with low viscosity")}
          </li>
          <li className="list-disc">
            {t(
              "It does not prevent the applied surface from breathing, does not change its natural appearance"
            )}
          </li>
          <li className="list-disc">
            {t(
              "The ability to cover the surface and diffuse into the material is very high"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It is impregnated, it creates a deep hydrophobic structure without forming a film layer on the surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Liquids remaining on the surface can be easily cleaned by wiping and do not leave stains"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It is resistant to UV rays and increases the strength of the surface it covers"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Prevents the phenomenon of salt vomiting on the surface during drying, which is seen on water-absorbing surfaces"
            )}
          </li>
          <li className="list-disc">
            {t("The paintability of the applied surface increases")}
          </li>
          <li className="list-disc">
            {t("Can be applied by spraying or by hand with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "One component, silane based, waterproofing and impregnation material. It has active chemical groups against mineral surfaces. These groups are chemically bonded to the surface and provide the surface to gain hydrophobic (water repellent) character. It has high surface covering and diffusion to the material. It is a water-based liquid with a milky appearance and forms an imperceptible layer after application. It is resistant to ultraviolet rays and increases the strength of the surface it covers."
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
          <h1 className="text-2xl  text-[#247781] pt-2">
            {t("Water and Oil Repellent Materials")}
          </h1>
          <p className="text-[#57C5B6]">
            {t("Water and Oil Repellent Materials")}
          </p>
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

export default WaterOilMaterials;
