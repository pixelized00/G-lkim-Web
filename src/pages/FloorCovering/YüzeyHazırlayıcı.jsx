import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const YüzeyHazırlayıcı = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(4);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst 2EP</p>
          <p>{t("General Purpose, Epoxy Primer and Surface Protector")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Self-flattens the surface")} </li>
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {t(
              "A strong primer material that can be used as a moisture barrier"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can be used as a surface hardener and anti-dusting agent for concrete coatings"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Fills the capillary cracks on the concrete surface and forms a water impermeable layer"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can be used as a surface hardener and anti-dusting agent for concrete coatings"
            )}
          </li>
          <li className="list-disc">
            {t("Can be applied with brush and roller")}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "It is a two-component, solvent-free, epoxy-based primer prepared for all polymer-based surface coating materials, topcoats and joint sealants. Thanks to its special hardener, its wetting property and adhesion strength are very high. With these properties, it is a very good primer, surface hardener and anti-dusting product. It prevents water and moisture penetration into the top coating by penetrating deeply into the concrete, prevents separation and dusting that may occur on the coating surface over time. It is a two-component solvent-free epoxy-based primer material prepared especially for coatings and topcoats to be applied on concrete, asphalt, steel, wood, epoxy, polyurethane etc. surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst 2EP-F</p>
          <p>{t("Epoxy Based, Two Component Filled Primer")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <li className="list-disc">{t("Self-flattens the surface")} </li>
        <li className="list-disc">{t("Solvent free")}</li>
        <li className="list-disc">
          {t("A strong primer material that can be used as a moisture barrier")}
        </li>
        <li className="list-disc">
          {t(
            "Provides excellent adhesion and moisture barrier for topcoat applications on various substrates"
          )}
        </li>
        <li className="list-disc">
          {t(
            "Fills the capillary cracks on the concrete surface and forms a water impermeable layer"
          )}
        </li>
        <li className="list-disc">
          {t(
            "Can be used as a surface hardener and anti-dusting agent for concrete coatings"
          )}
        </li>
        <li className="list-disc">
          {t("Can be applied with brush and roller")}
        </li>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, solvent-free, epoxy-based primer prepared for all polymer-based surface coating materials, topcoats and joint sealants. Thanks to its special hardener, its wetting property and adhesion strength are very high. With these properties, it is a very good primer, surface hardener and anti-dusting product. It prevents water and moisture penetration into the top coating by penetrating deeply into the concrete, prevents separation and dusting that may occur on the coating surface over time. It is a two-component solvent-free epoxy-based primer material prepared especially for coatings and topcoats to be applied on concrete, asphalt, steel, wood, epoxy, polyurethane etc. surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst 2EP CC</p>
          <p>{t("Epoxy Based, Antistatic Primer")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Light non-flowing structure")} </li>
          <li className="list-disc">
            {t("Can be applied under epoxy based floor coatings and paints")}
          </li>
          <li className="list-disc">
            {t(
              "Forms a continuous layer between the earthing reinforcement and the conductive or antistatic coating"
            )}
          </li>
          <li className="list-disc">
            {t("Can be used where static electricity can accumulate")}
          </li>
          <li className="list-disc">{t("Can be used as a paint primer")} </li>
          <li className="list-disc">
            {t(
              "It is an important lining for occupational safety in places containing flammable explosives such as fuel tanks"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, conductive primer. It can be applied under epoxy based floor coatings and paints. It is designed to form a continuous and conductive layer between the grounding reinforcement and the top coating under conductive or antistatic coatings. In this way, it prevents defects such as breakage, cracking that may occur in the top coating or non-contacts that may occur in the equipment connected to the ground line from causing insulating zones in the coating.  It is not affected by moisture, fuel, oils, inorganic acids and dilute bases."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst 2EP OR</p>
          <p>{t("Epoxy Primer and Surface Protector for Oily Surfaces")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Prevents oil stains from resurfacing")}{" "}
          </li>
          <li className="list-disc">
            {t("Gives a clean surface for subsequent applications")}{" "}
          </li>
          <li className="list-disc">{t("Provides excellent adhesion")}</li>
          <li className="list-disc">
            {t("Fills capillary cracks on the concrete surface")}
          </li>
          <li className="list-disc">
            {t("Creates a water impermeable layer")}
          </li>
          <li className="list-disc">
            {t(
              "Can be used as a surface hardener and anti-dusting agent for concrete coatings"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, epoxy-based primer designed especially for applications on oily surfaces. Thanks to its special formula, it provides strong adhesion on oily surfaces and prevents oil stains from resurfacing over time. Protects the applied surface and prevents dusting. Designed for surfaces where oil contamination cannot be completely cleaned. With its superior adhesion, it forms an excellent primer layer especially for floor coating, repair and joint filling applications on concrete surfaces. It ensures adhesion of polymer modified cement based materials to be applied on old concrete for repair or coating purposes. It is also used for filling capillary cracks on the concrete surface and as a surface hardener and anti-dusting agent for concrete coatings."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst 2EP MB</p>
          <p>{t("Moisture Barrier Epoxy Primer and Surface Protector")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Creates a moisture barrier")}</li>
          <li className="list-disc">{t("Can be applied on damp concrete")}</li>
          <li className="list-disc">{t("Solvent free")}</li>
          <li className="list-disc">
            {t("Gives a clean surface for subsequent applications")}
          </li>
          <li className="list-disc">{t("Provides excellent adhesion")}</li>
          <li className="list-disc">
            {t("Fills capillary cracks on the concrete surface")}
          </li>
          <li className="list-disc">
            {t("Creates a water impermeable layer")}
          </li>
          <li className="list-disc">
            {t("Prevents dusting of concrete surfaces")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, epoxy-based primer designed especially for applications on damp concrete surfaces. It is suitable for use with all polymer-based surface coating materials, topcoats and joint sealants. Thanks to its special formula, it provides strong adhesion on damp concrete surfaces and prevents the passage of moisture vapor. Protects the applied surface and prevents dusting. Designed to create a moisture barrier between the surface and the coating. Can be applied on 3-day old concrete. With its superior adhesion, it forms an excellent primer layer especially for floor coating, repair and joint filling applications on concrete surfaces. Provides adhesion of polymer modified cement based materials to be applied on old concrete for repair or coating purposes. It is also used for filling capillary cracks on the concrete surface and as a surface hardener and anti-dusting agent for concrete coatings."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst 2EP MT</p>
          <p>
            {t(
              "Moisture Tolerant, Water Based Epoxy Primer and Surface Protector"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Water-based epoxy based")}</li>
          <li className="list-disc">{t("Can be diluted with water")}</li>
          <li className="list-disc">
            {t("Can be applied on wet and damp surfaces.")}
          </li>
          <li className="list-disc">
            {t(
              "Penetrates the concrete very well and prevents diffusion of water to the top coating"
            )}
          </li>
          <li className="list-disc">
            {t(
              "A strong primer material that can be used as a moisture barrier"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Provides excellent adhesion and moisture barrier for topcoat applications on various substrates"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Fills the capillary cracks on the concrete surface and forms a water impermeable layer"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can be used as a surface hardener and anti-dusting agent for concrete coatings"
            )}
          </li>
          <li className="list-disc">
            {t("Can be applied with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component epoxy based primer that can be diluted with water. It can be applied on wet and damp surfaces with its water-based structure. It is a very good primer material with its moisture tolerant structure and water vapor permeable breathable structure. It can be used as surface protector and hardener with its surface penetration feature. It prevents water diffusion to the top coating by penetrating deeply into the concrete. It is the most suitable primer to be used as a moisture barrier on asphalt and concrete floors indoors and outdoors. Provides adhesion of polymer modified cement based materials to be applied on old concrete for repair or coating purposes. It is also used for filling capillary cracks on the concrete surface and as a surface hardener and anti-dusting agent for concrete coatings."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst LTX</p>
          <p>
            {t(
              "Polymer Emulsion Based Surface Coating Primer for Asphalt Pavements"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Very strong adhesion to any surface")}
          </li>
          <li className="list-disc">{t("Water based.")}</li>
          <li className="list-disc">
            {t("Forms a water impermeable layer when cured")}
          </li>
          <li className="list-disc">
            {t("Resistant to salty and chemically contaminated water.")}
          </li>
          <li className="list-disc">
            {t("Can be used on concrete, asphalt, steel or wood surfaces")}
          </li>
          <li className="list-disc">
            {t(
              "Can be applied with pressurized spray application equipment, brush or roller"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a polymer emulsion designed to adhere strongly to all types of surfaces and to act as a primer for the tar emulsion to be applied on these surfaces. StenAst® LTX is water based. When dry, it forms a water impermeable layer. Resistant to salty and chemically contaminated water. It can be used on concrete, asphalt, steel or wood surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst PU</p>
          <p>{t("One Component, Elastic Polyurethane Primer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based and single component")}
          </li>
          <li className="list-disc">
            {t(
              "Provides excellent adhesion for topcoat applications on concrete, steel, wood, epoxy, polyurethane etc. surfaces"
            )}
          </li>
          <li className="list-disc">
            {t(
              "With its crack bridging structure, it prevents the reflection of shrinkage/micro cracks in concrete to the top coating"
            )}
          </li>
          <li className="list-disc">
            {t("Can be applied with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "One component polyurethane based primer material prepared for polymer surface coating materials, topcoats and joint sealants. It is a one-component polyurethane based primer material prepared especially for coatings and topcoats to be applied on concrete, steel, wood, epoxy, polyurethane etc. surfaces. With its crack bridging feature, it prevents the reflection of shrinkage cracks in concrete to the top coating."
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
          <p className="text-[#57C5B6]">{t("Surface Preparation Primers")}</p>
        </div>
      </div>
      <div className="md:px-20 px-4 lg:px-28">
        {currentDivs.map((div, index) => (
          <div key={index}>{div}</div>
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

export default YüzeyHazırlayıcı;
