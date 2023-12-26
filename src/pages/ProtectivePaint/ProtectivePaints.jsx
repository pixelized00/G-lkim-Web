import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const ProtectivePaints = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat ACV-1</p>
          <p>{t("Surface Protector and Anti-Dusting")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polyacrylate based")} </li>
          <li className="list-disc">
            {t("Prevents dusting on the concrete surface")}
          </li>
          <li className="list-disc">
            {t("Increases the abrasion resistance of concrete")}
          </li>
          <li className="list-disc">{t("Can be used indoors and outdoors")}</li>
          <li className="list-disc">
            {t("It has water repellent properties")}
          </li>
          <li className="list-disc">
            {t(
              "Increases the resistance of concrete against carbonation and ion permeability"
            )}
          </li>
          <li className="list-disc">
            {t("Can be applied to old concrete surfaces")}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "It is a polyacrylate-based surface protector and anti-dusting material that forms an insulated layer on concrete surfaces. It is used to prevent abrasion and dusting that may occur on the cured concrete surface. It forms a protective layer on the concrete surface. Increases the resistance of concrete against carbonation and ion permeability. Increases concrete strength by impregnating concrete surfaces. It is also used to prevent dusting that may occur on the concrete surface with its special chemical structure."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat PT 102</p>
          <p>{t("Heavy Duty Protective Coating for Asphalt Surfaces")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Modified coal tar based")}</li>
          <li className="list-disc">
            {t(
              "Does not allow microbiological formations and vegetative growth"
            )}
          </li>
          <li className="list-disc">{t("Forms a waterproof layer")}</li>
          <li className="list-disc">
            {t(
              "Provides high chemical resistance to fuels, hydraulic oils and antifreezes"
            )}
          </li>
          <li className="list-disc">
            {t("Resistant to salt water and water contaminated with chemicals")}
          </li>
          <li className="list-disc">
            {t(
              "Can be applied with pressurised spray application equipment or by brush and roller"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a heavy duty protective coating consisting of modified coal tar and solvents with increased adhesion and abrasion resistance with necessary additives and fillers. In particular, it does not allow microbiological formations and plant growth (vegetation). It forms a water impermeable layer. It is resistant to salt water and water contaminated with chemicals, organic and inorganic acids and bases, hydraulic oils, fuel, antifreeze and many chemicals. It is used in the protection, repair and beautification of the appearance of all kinds of asphalt surfaces such as airports, highways, parking areas, motorways and similar surfaces against corrosive chemicals"
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP GPC</p>
          <p>{t("Epoxy Based Coating for Gas Pipes")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Single layer applicable")}</li>
          <li className="list-disc">{t("Has high wear resistance")}</li>
          <li className="list-disc">
            {t("Does not form pores on the surface")}
          </li>
          <li className="list-disc">{t("Cures fast")}</li>
          <li className="list-disc">{t("Provides long-lasting protection")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component epoxy based protective paint for the inner surfaces of gas pipes. While protecting gas pipes against abrasion, it helps flow with the smooth surface it creates. It is a protective paint applied in one coat for pipes carrying natural gas. It is designed to accelerate the in-pipe flow and protect the applied surface"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP CT</p>
          <p>{t("Epoxy Based, Tar Added, Solvent Free Protective Coating")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Based on epoxy and treated tar")}</li>
          <li className="list-disc">{t("Solvent free")}</li>
          <li className="list-disc">
            {t("Mechanical and chemical resistance is very high")}
          </li>
          <li className="list-disc">
            {t(
              "Protects the coated surface against the corrosive effects of sea water"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Does not allow microbiological formations and vegetative growth (vegetation)"
            )}
          </li>
          <li className="list-disc">
            {t("Can be applied by airless spray, brush or roller")}
          </li>
          <li className="list-disc">{t("It has a very long life")}</li>
          <li className="list-disc">
            {t("Can be applied by spraying or by hand with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Heavy duty corrosion prevention and waterproofing coating made of treated tar, additives and epoxy resin. Solvent free. It forms a non-brittle, water impermeable protection layer with very high mechanical and chemical resistance. Protects surfaces exposed to sea water against corrosion. It does not allow microbiological formations and vegetation. It is used for corrosion protection of surfaces exposed to sea water contact, exposed to damage caused by salt water, protection of internal and external surfaces in waste water, sewerage systems, external surface protection in clean water facilities, terrace and roof bottoms, foundation and curtain walls, municipal infrastructure, industrial facilities, water works, dams, underground channels, foundations, pipelines, highway culverts and water channels, underground foundation isolations of all kinds of construction. It can be applied vertically or horizontally on concrete, asphalt, steel or wooden surfaces."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP WT</p>
          <p>
            {t(
              "Epoxy Based, Solvent Free, Harmless, Harmless Waterproof Protective Paint"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Epoxy based")}Epoksi esaslı</li>
          <li className="list-disc">
            {" "}
            {t("Solvent-free, can be easily used in closed areas")}
          </li>
          <li className="list-disc">
            {" "}
            {t("The cured material is harmless to human health")}
          </li>
          <li className="list-disc">
            {t(
              "Can be used to protect concrete and steel surfaces and all storage areas"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Prevents corrosion and protects the surface in areas constantly exposed to water"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("Can be used in horizontal, vertical and overhead applications")}
          </li>
          <li className="list-disc">
            {" "}
            {t("High mechanical and chemical resistance")}
          </li>
          <li className="list-disc">
            {t(
              "Long service life, retains its mechanical properties, flexibility and impact resistance for a long time"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is an epoxy-based, two-component, harmless to human health coating especially designed to protect concrete and steel surfaces. It protects metal and concrete water tanks, liquid storage areas, swimming pools, etc. that are constantly exposed to water by preventing the surface it protects from getting wet and passing water, and protects the floor it covers against corrosion and other damages caused by water contact. It has high mechanical and chemical resistance. Since it does not contain solvents, it can be easily used indoors. After curing, it is harmless to health; it can be used safely at points that will come into contact with foodstuffs and drinking water. It is produced in various colors. It can be used to protect all kinds of horizontal and vertical surfaces from water contact or to make them waterproof. It can be used as a gas and vapor permeability inhibitor resistant to various chemical substances, especially on facades and walls. It is especially used for interior protection of liquid storage areas, drinking water tanks, swimming pools and areas where materials such as oil and fuel are stored. The coating maintains its high mechanical properties, flexibility and impact resistance for a long time and is resistant to weak acids and bases, chlorine, salt water, oil and fuels."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat ANTI UV</p>
          <p>
            {t(
              "Polyurethane Based Ultraviolet Resistant Protective Clear Topcoat"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based, two-component")}
          </li>
          <li className="list-disc">{t("Transparent")}</li>
          <li className="list-disc">{t("High ultraviolet absorption")}</li>
          <li className="list-disc">
            {" "}
            {t(
              "Can be applied on all plastic, painted, natural stone surfaces, especially polyurethane surface coatings and paints"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Protects the coated surface from discoloration, brittleness and softening caused by ultraviolet rays"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("Can be applied by spraying or by hand with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two-component, transparent, protective paint with high ultraviolet absorption. It adheres very well to many surfaces, especially polyurethane surface coatings and paints, and protects the substrate from discoloration, brittleness and softening caused by ultraviolet rays. By creating a seamless and durable coating, it also partially isolates the substrate from other atmospheric effects. It is used as a protective topcoat on exterior facades or interior facade coatings exposed to UV rays. It prevents damage from sunlight as well as other UV sources such as halogen lamps and welding arcs. Although its main use is to prevent discoloration of floors, terraces and similar coatings, it can be applied on all plastic, painted, natural stone surfaces as a general purpose UV protector."
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
          <p className="text-[#57C5B6]">{t("Protective Paints")}</p>
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

export default ProtectivePaints;
