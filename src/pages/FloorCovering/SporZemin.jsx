import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const SporZemin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(5);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSport 2PU TOP</p>
          <p>{t("Polyurethane Based, Two Component, Sports Floor Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Fully resistant to indoor and outdoor conditions and cleaning chemicals"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Not affected by UV rays emitted from sources such as sun, halogen lamps"
            )}
          </li>
          <li className="list-disc">
            {t("Flexible, adapts to the movement of the subfloor")}
          </li>
          <li className="list-disc">
            {t("Can be used on any horizontal and vertical surface")}
          </li>
          <li className="list-disc">{t("Resistant to sports activities")} </li>
          <li className="list-disc">{t("Easy to clean and quick drying")} </li>
          <li className="list-disc">
            {t("Long lasting, no cracking, no peeling, no peeling")}{" "}
          </li>
        </ul>

        <p className="mt-20  text-[black]">
          {t(
            "Polyurethane based, two component, sports floor and line paint. Catalog colors are available. Resistant to abrasion, detergents and UV rays; does not lose its flexibility and does not change color. Especially developed for indoor and outdoor sports grounds. It is applied over StenSport® SD601 applications. It can be used either as a line paint or for complete coverage of the field.  It can also be used as a traffic or decorative paint on any surface where flexibility and abrasion resistance are required."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSport SD 601</p>
          <p>{t("Flooring Material for Indoor - Outdoor Sports Fields")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based, flexible material")}
          </li>
          <li className="list-disc">
            {t("Suitable for indoor and outdoor use")}{" "}
          </li>
          <li className="list-disc">
            {t("Self-levelling surface, easily applied by pouring")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Its mechanical strength and life span is longer than other coating types thanks to its seamless floor formation"
            )}
          </li>
          <li className="list-disc">
            {t(
              "High impact absorption, return, penetration, tear and abrasion resistance"
            )}
          </li>
          <li className="list-disc">
            {t("Resistant to outdoor conditions.")}{" "}
          </li>
          <li className="list-disc">
            {t("Resistant to physical stresses and floor movements")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "It can be used as a protective coating or binder for different purposes according to the system structure"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It has a wide range of uses from children's playrooms to weight rooms"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a polyurethane-based, two-component, solvent-free, solvent-free, pigment filler surface coating material used in flexible, self-leveling, seamless floor applications produced for indoor and outdoor sports fields. It has a structure resistant to chemical effects, physical stresses and ground movements with high slip and excellent abrasion resistance. It is a material with high impact absorption, return, sinking, tearing and abrasion resistance. It is resistant to outdoor conditions. It can be used in fields where various sports branches can be practiced. It is one of the most important materials in the creation of synthetic tracks in outdoor areas. Depending on the system structure; it is used as a protective coating for the shock absorbing layer, as a binder of EPDM particles in the wear layer and as the final protective layer. In addition, due to its relatively hard structure when used alone, it is also used in places such as gyms, skating, dance, gymnastics halls, health-sports centers, children's playgrounds where weight training is performed. It is suitable for concrete, mosaic, tile, wood, parquet and asphalt surfaces in these places."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSport SEALER</p>
          <p>
            {t("Mattress Covering Material for Indoor - Outdoor Sports Fields")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based, two-component")}{" "}
          </li>
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {t(
              "Used to close the pores of mattresses and provide a smooth application surface"
            )}
          </li>
          <li className="list-disc">
            {t("Resistant to physical stresses and minor ground movements")}
          </li>
          <li className="list-disc">
            {t(
              "High impact absorption, return, penetration, tear and abrasion resistance"
            )}
          </li>
          <li className="list-disc">{t("Easy to apply")} </li>
          <li className="list-disc">{t("Does not flow")} </li>
          <li className="list-disc">{t("Provides excellent adhesion.")}</li>
          <li className="list-disc">
            {t("It freezes quickly, pre-hardening time is short.")}{" "}
          </li>
          <li className="list-disc">{t("Catalog colors available")} </li>
          <li className="list-disc">
            {t(
              "Suitable for use in all kinds of sports fields, indoors and outdoors"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a polyurethane-based, two-component, solvent-free, pigment and filler surface coating material designed to close the pores of mattresses used in flexible, non-flowable, seamless floor applications produced for sports fields and to help the layer to be applied on it to adhere and give a smooth surface. It has a structure resistant to chemical effects, physical stresses and minor ground movements. It is a material with high impact absorption, return, sinking and tear resistance. It can be used in all kinds of sports fields. It is used to fill the pores of the shock absorbing layer formed by bonding rubber granules with polyurethane binder in outdoor synthetic track applications or indoor field coatings. Where a separate shock absorbing layer is not used, it is used as a shock absorbing layer or to ensure that the ground surface is smooth. Suitable for rubber, polyurethane, concrete, terrazzo, tile, wood parquet and asphalt surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSport BINDER PU</p>
          <p>
            {t(
              "Granule and Mattress Bonding Material for Indoor - Outdoor Sports Fields"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Polyurethane based, one component")}{" "}
          </li>
          <li className="list-disc"> {t("Solvent free")} </li>
          <li className="list-disc">
            {t(
              "Used as a binder of rubber granules inside the shock absorbing layer"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Used for bonding mattresses used in seamless floor applications to the floor"
            )}
          </li>
          <li className="list-disc">
            {t(
              "The surface structures of the bonded surfaces may be similar or different"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It has a structure resistant to chemical effects, physical stresses and minor ground movements"
            )}
          </li>
          <li className="list-disc">
            {t("Can be easily applied on floors with underfloor heating")}{" "}
          </li>
          <li className="list-disc">{t("Elastic")} </li>
          <li className="list-disc">{t("Multi-purpose")} </li>
          <li className="list-disc">
            {t("Can be used on all types of floors and indoors/outdoors")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a polyurethane-based, two-component, solvent-free adhesive material designed for bonding mattresses used in flexible, seamless floor applications produced for sports fields. It has a structure resistant to chemical effects, physical stresses and minor ground movements. It is used for bonding materials with similar or different surface structures. Suitable for rooms with underfloor heating. Allows bonding of all major floor covering materials and shock absorbing mats and plates to all kinds of floors with a solid but elastic structure. It is used for bonding heat and sound insulation plates, rubber coatings, wooden parquet and laminated plates to all kinds of floors and to each other."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSport ADHESIVE 2PU</p>
          <p>
            {t("Mattress Bonding Material for Indoor - Outdoor Sports Fields")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based, two-component")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Used for bonding mattresses used in seamless floor applications to the floor"
            )}
          </li>
          <li className="list-disc">
            {t(
              "The surface structures of the bonded surfaces may be similar or different"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can also be used as a binder of rubber granules inside the shock absorbing layer"
            )}
          </li>
          <p>{t("Solvent free")} </p>
          <li className="list-disc">
            {t(
              "Resistant to chemical effects, physical stresses and minor ground movements"
            )}
          </li>
          <li className="list-disc">
            {t("It can be easily applied on floors with underfloor heating.")}
          </li>
          <li className="list-disc">
            {t(
              "Can be used on all types of grounds and indoor/outdoor sports fields"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a polyurethane based, single component, solvent-free adhesive material designed for bonding mattresses used in flexible, seamless floor applications produced for sports fields. It has a structure resistant to chemical effects, physical stresses and minor ground movements. It is used for bonding materials with similar or different surface structures. Suitable for rooms with underfloor heating. Allows bonding of all major floor covering materials and shock absorbing mats and plates to all kinds of floors with a solid but elastic structure. It is used for bonding heat and sound insulation plates, rubber coatings, wooden parquet and laminated plates to all kinds of floors and to each other."
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
            {t("Floor Coating")}
          </h1>
          <p className="text-[#57C5B6]">
            {t("Sports Field Flooring Materials")}
          </p>
        </div>{" "}
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

export default SporZemin;
