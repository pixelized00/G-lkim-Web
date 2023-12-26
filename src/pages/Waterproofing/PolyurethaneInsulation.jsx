import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const PolyurethaneInsulation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(5);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat PU AIRBLOCK</p>
          <p>
            {t(
              "Polyurethane Based One Component Thixotropic Air, Water and Vapour Barrier"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based, elastomeric coating")}</li>
          <li className="list-disc"> {t("Creates an air and vapour barrier")}</li>
          <li className="list-disc"> {t("Seamless, provides long-lasting insulation")}</li>
          <li className="list-disc"> {t("Has crack bridging properties")}</li>
          <li className="list-disc"> {t("Ready for use")}</li>
          <li className="list-disc"> {t("Resistant to mould growth")}</li>
          <li className="list-disc"> {t("Catalog colors available")}</li>
          <li className="list-disc">{t("Easy to apply")}</li>
        </ul>
        <p className="mt-10  text-[black]">
          {t(
            "One component, polyurethane based, highly flexible, thixotropic, easily applied, liquid membrane. Used as air, water and vapour barrier It is applied as a liquid and forms a flexible, air, water and vapour impermeable coating. It has crack bridging properties thanks to its high flexibility. No change in mechanical properties due to outdoor conditions. Available in catalogue colours.StenCoat® PU AIRBLOCK conforms to ASTM C 836 and meets the permeability requirements of ASTM E2178."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat DURPLUS</p>
          <p>
            {t(
              "Polyurethane Based, Double Component, Heavy Duty, Coloured Waterproofing Membrane"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based and two component")}
          </li>
          <li className="list-disc">
            {t("Forms a heavy-duty coloured waterproof layer")}
          </li>
          <li className="list-disc">
            {t(
              "Protects the coated surface from all external factors, easy to clean, easy to dry and dust-free"
            )}
          </li>
          <li className="list-disc">{t("Resistant to UV rays")}</li>
          <li className="list-disc">
            {t("Maintains its flexibility and wear resistance for many years")}
          </li>
          <li className="list-disc">
            {t(
              "Covers cracks, faults and joints of the floor, giving it a smooth top layer"
            )}
          </li>
          <li className="list-disc">
            {t("Can be applied by spraying or by hand with brush and roller")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two-component, heavy duty, coloured waterproofing membrane. Protects the coated surface from all external environment effects. Resistant to ultraviolet rays. It can be used to waterproof all kinds of horizontal or slightly inclined surfaces. Especially used for walkways, terraces, multi-storey car parks, open garages and similar areas. Surfaces coated with StenCoat® DURPLUS are not affected by water, easy to clean, easy to dry and dust-free. The coating retains its flexibility and abrasion resistance for a long time. It provides a smooth top layer by covering cracks, defects and joints of the floor."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat PUM 110</p>
          <p>
            {t(
              "Polyurethane Based One Component Solvent Free Waterproofing Membrane"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Elastomeric")} </li>

          <li className="list-disc">
            {t("Single component and ready to use")}
          </li>
          <li className="list-disc">
            {t("Seamless, provides long-lasting insulation")}
          </li>
          <li className="list-disc">
            {t(
              "It has crack bridging properties thanks to its high flexibility"
            )}
          </li>
          <li className="list-disc">
            {t(
              "High chemical resistance, does not hydrolyse, does not separate from the surface"
            )}
          </li>
          <li className="list-disc">
            {t("Easy to apply, no joints, no need for shaloma")}
          </li>
          <li className="list-disc">
            {t(
              "Very economical, saves labour in application and long life in use."
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "One component, polyurethane based, highly flexible, easily applied, decorative insulation and protection coating. It is used for terrace, roof and wall insulation. It is applied as a liquid and forms a flexible, breathable and waterproof coating. It is highly flexible and has crack bridging feature. In this way, it is not affected by cracks and movements that may occur on the ground over time. There is no change in mechanical properties due to outdoor conditions. Catalogue colours are available. It is used under terraces and roofs, bathrooms and similar wet areas, industrial facilities, prefabricated buildings. It can be applied vertically or horizontally on concrete, asphalt, steel or wooden surfaces"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat PUM 300</p>
          <p>
            {t("Polyurethane Based, One Component, Water Isolation Membrane")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polyurethane based, elastomeric, liquid waterproofing membrane"
            )}
          </li>
          <li className="list-disc">{t("One-component and ready to use")}</li>
          <li className="list-disc">
            {t(
              "Seamless, provides long lasting insulation. It has crack bridging feature thanks to its high flexibility."
            )}
          </li>
          <li className="list-disc">
            {t(
              "High chemical resistance, does not hydrolyse, does not separate from the surface"
            )}
          </li>
          <li className="list-disc">
            {t("Easy to apply, no joints, no need for shaloma")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Very economical, saves labour in application and long life in use."
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "One component, polyurethane based, highly flexible, self-surfacing, easily applied, decorative insulation and protection coating. It is used for terrace and roof insulation. It is applied as a liquid and forms a flexible, breathable and waterproof coating. It is highly flexible and has crack bridging properties.  There is no change in its mechanical properties due to outdoor conditions. Catalogue colours are available. It is used under terraces and roofs, bathrooms and similar wet areas, industrial facilities, prefabricated structures. It can be applied horizontally on concrete, asphalt, steel or wooden surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat PUM 301</p>
          <p>
            {t("Polyurethane Based, One Component, Water Isolation Membrane")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polyurethane based, elastomeric, liquid waterproofing membrane"
            )}
          </li>
          <li className="list-disc">{t("One-component and ready to use")}</li>
          <li className="list-disc">
            {t(
              "Seamless, provides long lasting insulation. It has crack bridging feature thanks to its high flexibility."
            )}
          </li>
          <li className="list-disc">
            {t(
              "High chemical resistance, does not hydrolyse, does not separate from the surface"
            )}
          </li>
          <li className="list-disc">
            {t("Easy to apply, no joints, no need for shaloma")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Very economical, saves labour in application and long life in use."
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "One component, polyurethane based, highly flexible, self-surfacing, easily applied, decorative insulation and protection coating. It is used for terrace and roof insulation. It is applied as a liquid and forms a flexible, breathable and waterproof coating. It is highly flexible and has crack bridging properties.  There is no change in its mechanical properties due to outdoor conditions. Catalogue colours are available. It is used under terraces and roofs, bathrooms and similar wet areas, industrial facilities, prefabricated structures. It can be applied horizontally on concrete, asphalt, steel or wooden surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PUM 210</p>
          <p>
            {t(
              "Polyurethane Based, Two Component Waterproofing Membrane for Horizontal Surfaces"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Elastomeric")} </li>
          <li className="list-disc">
            {t("Seamless, provides long-lasting insulation")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "It has crack bridging properties thanks to its high flexibility"
            )}
          </li>
          <li className="list-disc">
            {t(
              "High chemical resistance, does not hydrolyse, does not separate from the surface"
            )}
          </li>
          <li className="list-disc">
            {t("Easy to apply, no joints, no need for shaloma")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Very economical, saves labour in application and long life in use."
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Two-component, polyurethane based, highly flexible, easily applied, decorative insulation and protection coating. It is used for floor insulation. It is applied as a liquid and forms a flexible, breathable and waterproof coating. It is highly flexible and has crack bridging feature. In this way, it is not affected by cracks and movements that may occur on the floor over time. There is no change in its mechanical properties due to outdoor conditions. It is used in places such as terrace and roof bottoms, foundation and curtain walls, municipal infrastructures, industrial facilities, highway culverts and tunnels. It can be applied horizontally on concrete, asphalt, steel or wooden surfaces."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PUM 211</p>
          <p>
            {t(
              "Polyurethane Based, Two Component Waterproofing Membrane for Vertical Surfaces"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Elastomeric")} </li>
          <li className="list-disc">
            {t("Seamless, provides long-lasting insulation")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "It has crack bridging properties thanks to its high flexibility"
            )}
          </li>
          <li className="list-disc">
            {t(
              "High chemical resistance, does not hydrolyse, does not separate from the surface"
            )}{" "}
          </li>
          <li className="list-disc">
            {t("Easy to apply, no joints, no need for shaloma")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Very economical, saves labour in application and long life in use."
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Two-component, polyurethane based, highly flexible, easily applied, decorative insulation and protection coating. It is used for terrace, roof and wall insulation. It is applied as a liquid and forms a flexible, breathable and waterproof coating. It is highly flexible and has crack bridging feature. In this way, it is not affected by cracks and movements that may occur on the ground over time. There is no change in its mechanical properties due to outdoor conditions. It is used in places such as terrace and roof bottoms, foundation and curtain walls, municipal infrastructures, industrial facilities, highway culverts and tunnels. It can be applied vertically and inclined on concrete, asphalt, steel or wooden surfaces."
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
          <h1 className="text-3xl  text-[#247781] pt-2">
            {t("Water Isolation")}
          </h1>
          <p className="text-[#57C5B6]">
            {t("Polyurethane Based Insulation Materials")}
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

export default PolyurethaneInsulation;
