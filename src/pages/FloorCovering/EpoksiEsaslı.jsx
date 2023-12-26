import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex ">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 180 </p>
          <p>{t("Epoxy Based Floor Coating Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc"> {t("Easy to clean")} </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Provides excellent adhesion to all types of substrates such as concrete, steel, cementitious surfaces"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("High chemical resistance and long service life")}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "Epoxy based, two component, decorative floor paint. It has high abrasion and contamination resistance. It can be used alone as an economical coating material on concrete floors or as a topcoat with StenCoat® branded floor coatings. It is not affected by weak acids and bases, detergents, disinfectants, hydraulic oils, many solvents and fuels. StenCoat® 2EP 180 prevents dusting, abrasion, wetting and water penetration of the surface it protects and increases its resistance to oxidation and pollution. Catalogue colours are available. It is used on concrete and metal floors, mortar type or self-levelling seamless floor coverings, to improve the abrasion, slip, chemical resistance properties of the surface, to give a decorative appearance, to rehabilitate and renew the top layer of the existing floor."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 205 </p>
          <p>{t("Epoxy Based, Thixotropic, Floor Coating Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Decorative, desired surface texture can be given")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t("Ideal for vertical and overhead applications")}
          </li>

          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>

          <li className="list-disc"> {t("Easy to clean")} </li>

          <li className="list-disc">
            {t("Excellent adhesion to all types of substrates")}
          </li>

          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>

          <li className="list-disc">{t("Catalog colors available")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, non-flowing type decorative floor paint. It has high abrasion, contamination and slip resistance. It can be used alone as an economical coating material on concrete floors or as a topcoat with StenFloor® branded floor coverings. It is not affected by weak acids and bases, detergents, disinfectants, hydraulic oils, many solvents and fuels. StenCoat® 2EP 205 prevents dusting, abrasion, wetting and water penetration of the surface it protects and increases its resistance to oxidation and contamination. Catalogue colours are available."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 210</p>
          <p>{t("Epoxy Based, Self Leveling Floor Coating Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc"> {t("Easy to clean")} </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Provides excellent adhesion to all types of substrates such as concrete, steel, cementitious surfaces"
            )}
          </li>
          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>
          <li className="list-disc">{t("Catalog colors available")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, decorative floor paint. It has high abrasion and contamination resistance. It can be used alone as an economical coating material on concrete floors or as a topcoat with StenFloor® branded floor coverings. It is not affected by weak acids and bases, detergents, disinfectants, hydraulic oils, many solvents and fuels. StenCoat® 2EP 210 prevents dusting, abrasion, wetting and water penetration of the surface it protects and increases its resistance to oxidation and contamination. Catalogue colours are available."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 211</p>
          <p>{t("Epoxy Based Thixotropic Floor Coating Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {t("Decorative, desired surface texture can be given")}
          </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t("Ideal for vertical and overhead applications")}
          </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc"> {t("Easy to clean")} </li>
          <li className="list-disc">
            {t("Excellent adhesion to all types of substrates")}
          </li>
          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>
          <li className="list-disc">{t("Catalog colors available")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, non-flowing type decorative floor paint. It has high abrasion, contamination and slip resistance. It can be used alone as an economical coating material on concrete floors or as a topcoat with StenFloor® branded floor coverings. It is not affected by weak acids and bases, detergents, disinfectants, hydraulic oils, many solvents and fuels. StenCoat® 2EP 211 prevents dusting, abrasion, wetting and water penetration of the surface it protects and increases its resistance to oxidation and contamination. Catalogue colours are available."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 220</p>
          <p>
            {t("Epoxy Based, Solvent Free, Self Leveling Floor Coating Paint")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc"> {t("Easy to clean")} </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Provides excellent adhesion to all types of substrates such as concrete, steel, cementitious surfaces"
            )}
          </li>
          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>
          <li className="list-disc">{t("Catalog colors available")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, decorative floor paint. It has high abrasion and contamination resistance. It can be used alone as an economical coating material on concrete floors or as a topcoat with StenFloor® branded floor coverings. It is not affected by weak acids and bases, detergents, disinfectants, hydraulic oils, many solvents and fuels. StenCoat® 2EP 220 prevents dusting, abrasion, wetting and water penetration of the surface it protects and increases its resistance to oxidation and contamination. It is used on concrete and metal floors, mortar type or self-levelling seamless floor coverings to improve the abrasion, slip, chemical resistance properties of the surface and to give a decorative appearance."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 250</p>
          <p>{t("Epoxy Based Floor Coating Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Self-flattens the surface")}</li>
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc"> {t("Easy to clean")} </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Provides excellent adhesion to all types of substrates such as concrete, steel, cementitious surfaces"
            )}
          </li>
          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, decorative floor paint. It has high abrasion and contamination resistance. It can be used alone as an economical coating material on concrete floors or as a topcoat with StenFloor® branded floor coverings. It is not affected by weak acids and bases, detergents, disinfectants, hydraulic oils, many solvents and fuels. StenCoat® 2EP 250 prevents dusting, abrasion, wetting and water penetration of the surface it protects and increases its resistance to oxidation and pollution. Catalogue colours are available. It is used on concrete and metal floors, mortar type or self-levelling seamless floor coverings to improve the abrasion, slip, chemical resistance properties of the surface and to give a decorative appearance."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP CC</p>
          <p>{t("Epoxy Based Conductive Coating")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Epoxy based, two component")}</li>
          <li className="list-disc">
            {t("Can be used in epoxy based floor coating applications")}
          </li>
          <li className="list-disc">
            {t(
              "Forms a continuous layer between the earthing reinforcement and the conductive or antistatic coating"
            )}
          </li>
          <li className="list-disc">{t("High conductivity")}</li>
          <li className="list-disc">{t("Applicable in any thickness")}</li>
          <li className="list-disc">
            {t(
              "An important paint and coating material for work safety in places containing flammable explosives such as fuel tanks"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, conductive coating material. It can be used as intermediate and topcoat coating material for conductive or antistatic coatings. It has high surface and volume conductivity and can be used as a load distributor.  It is not affected by moisture, fuel, oils, inorganic acids and dilute bases. It is used to create a floor that will not allow static electricity accumulation on factory floors, fuel tanks, in areas where flammable gases are processed, filled or stored, in manufacturing and storage areas of explosive materials, in areas where sensitive electronic materials are produced, transported and stored. It is preferred in areas where high thickness antistatic coatings should be made or static electricity discharge should be very fast."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 310</p>
          <p>{t("Epoxy Based Binder for Terrazzo Coatings")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Allows custom designs")} </li>
          <li className="list-disc">
            {" "}
            {t("Compatible with many types of aggregates and glass")}{" "}
          </li>
          <li className="list-disc">{t("Catalog colors available")}</li>
          <li className="list-disc">
            {t("Creates a non-slip, dust-free, hygienic and smooth surface")}
          </li>
          <li className="list-disc">
            {t(
              "Coated surfaces are non-absorbent. Easy to clean, fast drying and non-dusting"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Increases the abrasion and chemical resistance of the surface"
            )}{" "}
          </li>
          <li className="list-disc">
            {" "}
            {t("Creates a long-lasting, permanent surface")}{" "}
          </li>
          <li className="list-disc">{t("Can be polished again")} </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, resin binder for terrazzo systems. Forms long-lasting, permanent and decorative surfaces. It has high abrasion resistance. Compatible with different types of aggregates. It can be used with thin or thick mineral aggregates in different colours, coloured or transparent glasses, mirror pieces, suitable synthetic aggregates, seashells to create special design options.Suitable for use in areas with high pedestrian traffic, hygienic areas and wet floors. Not affected by water, detergents and disinfectants. With StenCoat® 2EP 310, easy-to-clean, dust-free, colourfast, seamless floors can be produced. Transparent type and catalogue colours are available."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 312</p>
          <p>{t("Epoxy Based Binder for Terrazzo Coatings")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Allows custom designs")} </li>
          <li className="list-disc">
            {" "}
            {t("Compatible with many types of aggregates and glass")}{" "}
          </li>
          <li className="list-disc">{t("Catalog colors available")}</li>
          <li className="list-disc">
            {t("Creates a non-slip, dust-free, hygienic and smooth surface")}
          </li>
          <li className="list-disc">
            {t(
              "Coated surfaces are non-absorbent. Easy to clean, fast drying and non-dusting"
            )}
          </li>
          <li className="list-disc">
            {t("Increases the abrasion and chemical resistance of the surface")}{" "}
          </li>
          <li className="list-disc">
            {t("Creates a long-lasting, permanent surface")}{" "}
          </li>
          <li className="list-disc">{t("Can be polished again")} </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, resin for terrazzo systems is a binder. Forms long-lasting, permanent and decorative surfaces. It has high abrasion resistance. Compatible with different types of aggregates. Speciality thin or thick in different colours to create design options mineral aggregates, coloured or transparent glass, mirror fragments, suitable Suitable for use in areas with high pedestrian traffic, hygienic areas and wet floors. Not affected by water, detergents and disinfectants. With StenCoat® 2EP 312, easy-to-clean, dust-free, colourfast, seamless floors can be produced."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 401</p>
          <p>{t("Epoxy Based Waterborne Floor and Wall Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Water-based epoxy based")} </li>
          <li className="list-disc">{t("Can be diluted with water")} </li>
          <li className="list-disc">
            {t("Can be applied on wet and damp surfaces.")}
          </li>
          <li className="list-disc">{t("Hygienic and odourless")} </li>
          <li className="list-disc">
            {t("Creates a breathable protective coating on concrete")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Creates a decorative, easy-to-clean coating on the concrete surface"
            )}
          </li>
          <li className="list-disc">{t("Waterproof")}</li>
          <li className="list-disc">
            {" "}
            {t("Prevents dusting and contamination of concrete pavements")}
          </li>
          <li className="list-disc">
            {t("Can be easily applied with brush and roller")}{" "}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component water dilutable epoxy based high performance odourless floor coating material. It can be applied on wet and damp surfaces with its water-based structure. It is a very good top coat coating material with its water vapour permeable breathable structure. Depending on the application thickness and system, it is resistant to weak acids and bases, detergents, disinfectants, hydraulic oils and various solvents and fuels. It increases the resistance of the protected surface against dusting, abrasion, oxidation and pollution. Catalogue colours are available. It is especially used on the floors of areas such as medium-service workplaces, maintenance and repair workshops, printing houses, social spaces, offices, waiting rooms, examination rooms and clean rooms, and on the walls of places such as food preparation places, beverage facilities, water filling facilities, dining halls. It is suitable for concrete, mosaic, tile and water resistant plywood surfaces in these places"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 402</p>
          <p>{t("Epoxy Based Waterborne Floor and Wall Paint")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Water-based epoxy based")} </li>
          <li className="list-disc">{t("Can be diluted with water")} </li>
          <li className="list-disc">
            {t("Can be applied on wet and damp surfaces.")}
          </li>
          <li className="list-disc">{t("Hygienic and odourless")} </li>
          <li className="list-disc">
            {t("Creates a smooth surface that is non-slip and dirt-repellent")}{" "}
          </li>
          <li className="list-disc">
            {t("Coated surfaces are easy to clean and dry, preventing dusting")}
          </li>
          <li className="list-disc">
            {t("Increases the abrasion and chemical resistance of the surface")}
          </li>
          <li className="list-disc">{t("Waterproof")}</li>
          <li className="list-disc">
            {t("Can be easily applied with brush and roller")}{" "}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a water-based epoxy-based floor and wall coating material consisting of two polymer components. It can be applied on wet and damp surfaces with its water-based structure. It is a very good top coat coating material with its water vapour permeable breathable structure. Depending on the application thickness and system, it is resistant to weak acids and bases, detergents, disinfectants, hydraulic oils and various solvents and fuels. It increases the resistance of the protected surface against dusting, abrasion, oxidation and pollution. Catalogue colours are available. It is especially used on the floors of areas such as medium-service workplaces, maintenance and repair workshops, printing houses, social spaces, offices, waiting rooms, examination rooms and clean rooms, and on the walls of places such as food preparation places, beverage facilities, water filling facilities, dining halls. It is suitable for concrete, mosaic, tile and water resistant plywood surfaces in these places."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP 510</p>
          <p>{t("Epoxy Based, Heavy/Medium Duty, Floor Coating Material")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Epoxy based self levelling surface")}
          </li>
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {" "}
            {t("Long lasting, robust and very durable")}
          </li>
          <li className="list-disc">
            {t("Resistant to oil, fuel, detergents and many chemicals")}
          </li>
          <li className="list-disc">
            {t("Protects the applied surface, extends its life")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Suitable for use in all hygienic facilities, chemical process areas, heavy/medium load-bearing industrial areas and workshops"
            )}
          </li>
          <li className="list-disc">
            {t(
              "With its decorative structure, it can be used in social spaces, offices, shops"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Heavy and medium duty, self-levelling, seamless, seamless, floor coating material. It is a system of solvent-free epoxy resin, pigment and solid filler. StenCoat® 2EP 510 is a seamless, long-lasting and robust coating system resistant to abrasion, chemical effects and penetration. It is resistant to inorganic acids and alkalis, oil, fuel and antifreeze and many other chemicals."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EPV 201</p>
          <p>{t("Epoxy Based, Transparent Floor Varnish")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Self-flattens the surface")}</li>
          <li className="list-disc">{t("Transparent structure")}</li>
          <li className="list-disc">
            {t(
              "Covers floor cracks and joints in wood, tile, granite, marble, natural stone and similar coatings"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "It has superior adhesion properties that are not affected by water"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc">
            {t("Easy to clean, quick drying and non-dusting")}
          </li>
          <li className="list-disc">
            {t("Creates a hygienic, clean and durable floor")}
          </li>
          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, transparent, decorative floor varnish. It has high abrasion and contamination resistance. Resistant to outdoor conditions. Unaffected by pool chemicals, weak acids and bases, detergents, disinfectants, fuels, hydraulic oils and many solvents. StenCoat® 2EPV 201 prevents dusting, abrasion, wetting and water penetration of the surface it protects, increases its resistance to oxidation and contamination. It is a varnish used to improve chemical and abrasion resistance without spoiling the floor appearance. It increases the strength of the coating by covering the cracks and joints of the floor on concrete and metal floors, mortar type floor coverings, wood, tile, granite, marble, natural stone and similar coatings and extends the life of the coating"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EPV 201 PLUS</p>
          <p>{t("Epoxy Based Transparent Floor Varnish")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Transparent structure")}</li>
          <li className="list-disc">
            {t(
              "Covers floor cracks and joints in wood, tile, granite, marble, natural stone and similar coatings"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "It has superior adhesion properties that are not affected by water"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc">
            {t("Easy to clean, quick drying and non-dusting")}
          </li>
          <li className="list-disc">
            {t("Creates a hygienic, clean and durable floor")}
          </li>
          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, transparent, decorative floor varnish. It has high abrasion and contamination resistance. Resistant to outdoor conditions. Unaffected by pool chemicals, weak acids and bases, detergents, disinfectants, fuels, hydraulic oils and many solvents. StenCoat® 2EPV 201 PLUS prevents dusting, abrasion, wetting and water penetration of the surface it protects, increases its resistance to oxidation and pollution. It is a varnish used to improve chemical and abrasion resistance without spoiling the floor appearance. It covers the cracks and joints of the floor on concrete and metal floors, mortar type floor coverings, wood, tile, granite, marble, natural stone and similar coatings, increasing the strength of the coating and extending its life."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EPV 210</p>
          <p>{t("Epoxy Based, Transparent Floor Varnish")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <p> {t("Self-flattens the surface")}</p>
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">
            {" "}
            {t(
              "Transparent structure, protects the applied surface without spoiling its appearance"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Covers floor cracks and joints in wood, tile, granite, marble, natural stone and similar coatings"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc">
            {t("Easy to clean, quick drying and non-dusting")}
          </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, transparent, decorative floor varnish. It has high abrasion, contamination and slip resistance. It is not affected by weak acids and bases, detergents, disinfectants, hydraulic oils, many solvents and fuels. StenCoat® 2EPV 210 prevents dusting, abrasion, wetting and water penetration of the surface it protects and increases its resistance to oxidation and contamination. It is a paint applied on seamless floor coating materials to improve the chemical resistance properties, slip and abrasion resistance of the surface without spoiling the appearance of the coating. In addition, it increases the strength and extends the life of the coating by covering the cracks and joints of the floor on concrete and metal floors, mortar type floor coverings, wood, tile, granite, marble, natural stone and similar coatings."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EPV 250</p>
          <p>{t("Water Based, Epoxy Based, Semi-Matt Varnish")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Self-flattens the surface")}</li>
          <li className="list-disc">
            {" "}
            {t(
              "Transparent structure, protects the applied surface without spoiling its appearance"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Covers cracks and joints in wood, tile, natural stone and similar coatings"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "It has superior adhesion properties that are not affected by water"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("High dusting and contamination resistance")}
          </li>
          <li className="list-disc"> {t("Easy to clean and quick drying")}</li>
          <li className="list-disc">
            {" "}
            {t("Water-based, can be easily applied indoors")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two-component, transparent, decorative semi-matt varnish. It has high contamination resistance. Resistant to outdoor conditions. StenCoat® 2EPV 250 prevents dusting, abrasion, wetting and water penetration of the surface it protects, increases its resistance to oxidation and contamination. It is a varnish used to increase the resistance to contamination and dusting without spoiling the coating appearance. It can be applied on natural stone, granite, marble, unglazed tiles, wood or concrete. It increases the strength of the coating by covering the cracks and joints of the coatings and extends its life."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EPV 301</p>
          <p>{t("Epoxy Based, Transparent Floor Varnish")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to many chemicals.")}</li>
          <li className="list-disc">
            {" "}
            {t(
              "Transparent structure, protects the applied surface without spoiling its appearance"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc">
            {t("Easy to clean, quick drying and non-dusting")}
          </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Creates a long-lasting, hygienic and highly chemical resistant surface."
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two component, transparent, protective floor varnish. It has high abrasion and contamination resistance. It protects the floors it is applied and provides non-slip. It has very high chemical resistance. It is not affected by many acids and bases, disinfectants, hydraulic oils, solvents and fuels. StenCoat® 2EPV 301 prevents dusting, abrasion, wetting and water penetration of the surface it protects and increases its resistance to oxidation and contamination. It is used as a topcoat coating material that can be exposed to short-term contact with aggressive chemicals. Improves the slip, abrasion and chemical resistance properties of the surface. It increases the strength of the coating by covering the existing fine cracks and joints on the applied surface and extends its life. It is especially ideal for factories, hospitals, food facilities, machinery production and sales stores, storage areas and surfaces that are constantly exposed to aggressive cleaners and disinfectants."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 3EP GRIP</p>
          <p>{t("Epoxy Based, Transparent, Non-Slip Floor Varnish")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Suitable for use in places with frequent contact with water")}
          </li>
          <li className="list-disc">
            {t(
              "Provides non-slip on wet floors such as pool sides, bathtubs, kitchens"
            )}
          </li>
          <li className="list-disc">
            {t("Comfortable, does not chafe the skin")}
          </li>
          <li className="list-disc">
            {t(
              "Covers cracks and joints in wood, tile, natural stone and similar coatings"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("It has high abrasion and contamination resistance")}{" "}
          </li>
          <li className="list-disc">
            {t("Easy to clean, quick drying and non-dusting")}
          </li>
          <li className="list-disc">
            {t(
              "Creates a hygienic, clean and durable floor with its seamless structure"
            )}
          </li>
          <li className="list-disc">
            {t("High chemical resistance and long service life")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, three component, transparent anti-slip coating. It has high abrasion, contamination and slip resistance. Resistant to outdoor conditions. Unaffected by pool chemicals, weak acids and bases, detergents, disinfectants, hydraulic oils, many solvents and fuels. StenCoat® 3EP GRIP prevents dusting, abrasion, wetting and water penetration of the surface it protects, increases its resistance to oxidation and contamination. It is a varnish used to improve the slip and abrasion resistance of the surface without spoiling the floor appearance. It is used on all floors where there is a danger of slipping, especially in wet areas, pool sides, bathtubs, bathtubs, tile floors, kitchen floors, building entrances, restaurants, shopping centres, hotels, etc. to ensure safety."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2EP YALIT</p>
          <p>
            {t("Epoxy Based, Electrically Insulating, Floor Coating Material")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Epoxy based")}</li>
          <li className="list-disc">{t("Solvent free")} </li>
          <li className="list-disc">{t("High insulator")}</li>
          <li className="list-disc">{t("Provides job security")}</li>
          <li className="list-disc">
            {t("Gives a seamless, smooth and easy-to-clean surface")}
          </li>
          <li className="list-disc">{t("High scratch resistance")}</li>
          <li className="list-disc">{t("Doesn't wear easily")}</li>
          <li className="list-disc">{t("Resistant to chemicals")}</li>
          <li className="list-disc">{t("High impact resistance")}</li>
          <li className="list-disc">
            {t("Can be produced in catalogue colours")}
          </li>
          <li className="list-disc">{t("Long lasting and robust")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a highly insulating floor covering material that can be applied to all kinds of floors in all places where electrical insulation from the floor is required in terms of occupational safety, especially switches, electrical control rooms and cabins.  It has an excellent abrasion resistance and a structure resistant to chemical effects. It consists of solvent-free epoxy resin, pigment and solid filler. StenCoat® 2EP INSULAT is a seamless, long-lasting and robust coating system resistant to abrasion, impact, chemical effects and penetration. It is resistant to organic and inorganic acids and alkalis, oil, fuel and antifreeze and many chemicals."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat GRANO 3EP</p>
          <p>{t("Epoxy Based, Heavy Duty, Floor Coating Material")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Epoxy based")}</li>
          <li className="list-disc">
            {t(
              "Adheres very well to concrete and adapts to the thermal expansion of concrete"
            )}
          </li>
          <li className="list-disc"> {t("High impact resistance")}</li>
          <li className="list-disc"> {t("Excellent abrasion resistance")}</li>
          <li className="list-disc"> {t("Fluid, easy to apply")}</li>
          <li className="list-disc"> {t("It has a self-levelling feature")}</li>
          <li className="list-disc">
            {" "}
            {t("It is non-slip, the surface can also be roughened")}
          </li>
          <li className="list-disc">{t("Solvent free")}</li>
          <li className="list-disc"> {t("Chemical resistant")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a heavy-duty, solvent-free, epoxy-based coating material that can be applied by flowing, forming a safe floor with specially sized solid fillers that provide non-slip. It has high adhesion, abrasion and impact resistance and resistance to chemical effects. The polymeric mixture adapts to the thermal expansion of concrete made of Portland cement and adheres very well to concrete. Easy to apply. It is a system consisting of solvent-free pure epoxy resin, pigments and solid filler. It is used in the repair of old concrete surfaces, broken ano and joint edges and similar small places. It can also be used as a top coating in areas where protection and anti-slip is required, deceleration and stopping areas. It is used on pedestrian walkways, floors in industrial storage tank areas, airport pedestrian roads, turning and deceleration areas in car parks. Suitable for concrete, mosaic, tile, wood, metal and asphalt surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat GRANO 3EP FLEX</p>
          <p>
            {t(
              "Epoxy Based, High Strength, Flexible Floor Coating and Repair Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Epoxy based")} </li>
          <li className="list-disc">
            {t(
              "Adheres very well to concrete and adapts to the thermal expansion of concrete"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("Resistant to thermal and mechanical loads")}
          </li>
          <li className="list-disc"> {t("Can be used without grouting")}</li>
          <li className="list-disc">
            {" "}
            {t("Suitable for use in outdoor conditions")}
          </li>
          <li className="list-disc"> {t("High impact resistance")}</li>
          <li className="list-disc"> {t("Excellent abrasion resistance")}</li>
          <li className="list-disc"> {t("Fluid, easy to apply")}</li>
          <li className="list-disc"> {t("It has a self-levelling feature")}</li>
          <li className="list-disc">
            {" "}
            {t("It is non-slip, the surface can also be roughened")}
          </li>
          <li className="list-disc"> {t("Solvent free")}</li>
          <li className="list-disc"> {t("Chemical resistant")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a heavy-duty, solvent-free, epoxy-based coating material that can be applied by flowing, forming a safe floor with specially sized solid fillers that provide non-slip. It has high adhesion, abrasion and impact resistance and resistance to chemical effects. The polymeric mixture adapts to the thermal expansion of concrete made of Portland cement and adheres very well to concrete. Thanks to its elastic structure, it meets thermal and dynamic movements without peeling or cracking.  It does not require joints in places exposed to minor movements. Easy to apply. It is a system consisting of solvent-free pure epoxy resin, pigments and solid filler. It is used in the repair of old concrete surfaces, broken ano and joint edges, similar small places. It is also suitable for repairing weak surfaces or surfaces under high thermal or mechanical loads. It can also be used as a top coating in areas where protection and anti-slip is required, deceleration and stopping areas. It is used on pedestrian walkways, floors in industrial storage tank areas, airport pedestrian roads, turning and deceleration areas in car parks. Suitable for concrete, mosaic, tile, wood, metal and asphalt surfaces."
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
            {t("Epoxy Based Floor Coating Materials")}
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

export default Products;
