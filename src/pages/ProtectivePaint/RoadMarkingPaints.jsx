import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const RoadMarkingPaints = () => {
  const { t, i18n } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PU -Y</p>
          <p>
            {t(
              "Polyurethane Based, Two Component, UV Resistant, Road Marking Paint"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Based on two-component polyurethane")}
          </li>
          <li className="list-disc">
            {" "}
            {t("Fully resistant to ultraviolet rays")}
          </li>
          <li className="list-disc">
            {" "}
            {t("Resistant to outdoor conditions.")}
          </li>
          <li className="list-disc">
            {t(
              "Used as marking and line paint on asphalt, concrete, epoxy and polyurethane surfaces"
            )}
          </li>
          <li className="list-disc"> {t("Solvent free")}</li>
          <li className="list-disc"> {t("Does not damage asphalt")}</li>
          <li className="list-disc"> {t("No chalking")}</li>
          <li className="list-disc">{t("Resistant to abrasion")}</li>
          <li className="list-disc">{t("Long service life")}</li>
        </ul>
        <p className="mt-10  text-[black]">
          {t(
            "Polyurethane based, two-component, abrasion resistant, solvent-free road marking paint. Catalog colors are available. Resistant to outdoor conditions and traffic. Thanks to its UV resistance feature, it does not change color and does not lose its mechanical properties under UV sources. It is used as marking and line paint on surfaces such as asphalt, concrete, epoxy or polyurethane flooring. Since it does not contain solvents, it is especially preferred on sensitive asphalt surfaces such as airstrips. It can be used in all kinds of marking applications where lifetime is important."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PU-Y PLUS</p>
          <p>
            {t(
              "Polyurethane Based Two Component, UV Resistant, Road Marking Paint"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Based on two-component polyurethane")}
          </li>
          <li className="list-disc">
            {t("Fully resistant to ultraviolet rays")}{" "}
          </li>
          <li className="list-disc">{t("Resistant to outdoor conditions.")}</li>
          <li className="list-disc">
            {t(
              "Used as marking and line paint on asphalt, concrete, epoxy and polyurethane surfaces"
            )}
          </li>
          <li className="list-disc">{t("Solvent free")}</li>
          <li className="list-disc"> {t("Does not damage asphalt")}</li>
          <li className="list-disc"> {t("No chalking")}</li>
          <li className="list-disc">{t("Resistant to abrasion")}</li>
          <li className="list-disc">{t("Long service life")}</li>
        </ul>{" "}
        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two-component, abrasion resistant, solvent-free road marking paint. Catalog colors are available. Resistant to outdoor conditions and traffic. Thanks to its UV resistance feature, it does not change color and does not lose its mechanical properties under UV sources. It is used as marking and line paint on surfaces such as asphalt, concrete, epoxy or polyurethane flooring. Since it does not contain solvents, it is especially preferred on sensitive asphalt surfaces such as airstrips. It can be used in all kinds of marking applications where lifetime is important."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat CR-Y</p>
          <p>{t("Alkyd Based Road Marking Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("One component alkyd based")}</li>
          <li className="list-disc">
            {" "}
            {t("Can be used on asphalt and concrete surfaces")}
          </li>
          <li className="list-disc">
            {" "}
            {t("Resistant to outdoor conditions.")}
          </li>
          <li className="list-disc"> {t("Fast drying")}</li>
          <li className="list-disc"> {t("Practical to implement")}</li>
          <li className="list-disc"> {t("Economical")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Alkyd based road line and marking paint. Solvent additive, single component. Easy to apply and dries quickly. Catalogue colours are available. Resistant to outdoor conditions and traffic. It is used as marking and line paint on asphalt and concrete surfaces. It can be used in all kinds of marking applications where economy and ease of application come to the fore."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat CR-L</p>
          <p>{t("Acrylic Latex Based Road Marking Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("One-component acrylic latex resin")}
          </li>
          <li className="list-disc">{t("Water based")}</li>
          <li className="list-disc">{t("Provides high appearance")}</li>
          <li className="list-disc">
            {t("Can be used with glass beads to add reflective properties")}
          </li>
          <li className="list-disc">{t("Resistant to outdoor conditions")}</li>
          <li className="list-disc">{t("Fast drying")}</li>
          <li className="list-disc">{t("Practical to implement")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Acrylic latex based road line and marking paint. Water based, single component. Easy to apply and dries quickly. Catalogue colours are available. StenCoat® CR-L is resistant to outdoor conditions and traffic. It complies with TS EN 1871 and FS TT-P-1952. It is used as marking and line paint on asphalt and concrete surfaces. It is preferred in applications where water-based, low solvent materials are required in car parks, pavements and other areas where marking is required. StenCoat® CR-L is suitable for use in car parks, airports and motorways. Under most environmental conditions, when applied correctly, it dries completely within 60 minutes."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat CR-LID</p>
          <p>{t("Acrylic Latex Based High Strength Road Marking Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("One-component acrylic latex resin")}
          </li>
          <li className="list-disc"> {t("Solvent free")}</li>
          <li className="list-disc"> {t("Provides high appearance")}</li>
          <li className="list-disc">
            {t("Can be used with glass beads to add reflective properties")}
          </li>
          <li className="list-disc">
            {" "}
            {t("Resistant to outdoor conditions.")}
          </li>
          <li className="list-disc">{t("Fast drying")} </li>
          <li className="list-disc">{t("Long service life")}</li>
          <li className="list-disc">{t("Practical to implement")} </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Acrylic latex based road line and marking paint. Single component, solvent free. Easy to apply and dries quickly. Catalogue colours are available. Resistant to outdoor conditions and traffic. Fully meets the requirements of TT-P-1952F Type III, increased durability."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat MCTE</p>
          <p>
            {t(
              "Polymer Modified, Coal Tar Emulsion Based Surface Coating Material for Asphalt Pavements"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Emulsion based on polymer modified refined coal tar")}
          </li>
          <li className="list-disc">
            {t("Increases the impermeability of asphalt surfaces")}
          </li>
          <li className="list-disc">
            {t(
              "Provides ultraviolet and ozone resistance, also provides resistance to oxidation"
            )}
          </li>
          <li className="list-disc">
            {t("Prevents peeling on asphalt surfaces, protects the coating")}
          </li>
          <li className="list-disc">
            {t(
              "Reduces the need for maintenance and repair of asphalt pavements and increases their lifetime"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It can be applied with pressurised spray application equipment and gauging equipment or manually."
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Designed for asphalt surfaces to protect, improve and enhance the appearance of pavements. It is a concentrated refined coal tar based emulsion modified with polymers prepared with stabilised special emulsifiers, with increased adhesion and abrasion resistance with necessary additives and fillers. It is prepared to be used after adding anti-slip sand. It is used together with special sized silica aggregate to form a non-slip surface. It increases the impermeability of asphalt surfaces, provides ultraviolet and ozone resistance, and also provides resistance against oxidation. It prevents peeling that starts in the upper layers due to the effect of oxidation, which is common especially in asphalt pavements that are used less frequently, and causes the surface to deteriorate rapidly, or it is used to recover the surfaces that have become like this. It reduces the need for maintenance and repair of asphalt pavements and significantly increases their lifetime."
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
    <div className="bg-[#F3F3F3] w-screen">
      <div className="ml-20">
        <h1 className="pt-10 text-[#247781] font-bold mb-6">
          {t("All Products")}
        </h1>
      </div>
      <div className="bg-white w-[460px] h-20 slide-in-left  ">
        <div className="ml-20">
          <h1 className="text-2xl  text-[#247781] pt-2">
            {t("Protective Paints and Coatings")}
          </h1>
          <p className="text-[#57C5B6]">{t("Road Marking Paints")}</p>
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

export default RoadMarkingPaints;
