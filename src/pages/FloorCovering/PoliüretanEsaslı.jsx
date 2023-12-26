import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const PoliüretanEsaslı = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat SD 601</p>
          <p>
            {" "}
            {t(
              "General Purpose, Indoor - Outdoor, Flexible Floor Coating Material"
            )}{" "}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based, flexible material")} </li>
          <li className="list-disc"> {t("Suitable for indoor and outdoor use")} </li>
          <li className="list-disc"> {t("Self-levelling surface, easily applied by pouring")} </li>
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
          <li className="list-disc"> {t("Resistant to outdoor conditions.")} </li>
          <li className="list-disc"> {t("Resistant to physical stresses and floor movements")} </li>
          <li className="list-disc">
            {t(
              "It can be used as a protective coating or binder according to the system structure."
            )}
          </li>
          <li className="list-disc">
            {t(
              "It has a wide range of uses from children's play halls to weight halls."
            )}
          </li>{" "}
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "It is a polyurethane-based, two-component, solvent-free, solvent-free, pigment filler surface coating material used in flexible, self-levelling, seamless floor applications produced for open and closed areas. It has a structure resistant to chemical effects, physical stresses and ground movements with high slip and excellent abrasion resistance. It is a material with high impact absorption, return, sinking, tearing and abrasion resistance. It is resistant to outdoor conditions. It is one of the most important materials in the creation of synthetic floors in outdoor areas. According to the system structure; It can be used as a protective coating of shock absorbing layers, as a binder of EPDM particles in the wear layer and as a topcoat protective layer. In addition, when used alone, it is also used in places such as sports halls, skating, dance, gymnastics halls, health-sports centres, children's playgrounds where weight training is performed. It is suitable for concrete, mosaic, tile, wood, parquet and asphalt surfaces in these places."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenScreed 400S</p>
          <p>
            {t(
              "Polyurethane Based, Very High Performance, Floor Coating Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t(
              "Ideal for load-bearing floors due to excellent wear resistance"
            )}
          </li>
          <li className="list-disc"> {t("Unaffected by heavy traffic conditions")} </li>
          <li className="list-disc"> {t("Resistant to many chemicals")}</li>
          <li className="list-disc"> {t("Excellent thermal compatibility with concrete")} </li>
          <li className="list-disc"> {t("Resistant to thermal shocks (+700C)")} </li>
          <li className="list-disc">
            {t(
              "Thanks to its very high impact resistance, it does not crack, detach from the surface and does not disintegrate"
            )}
          </li>
          <li className="list-disc">
            {t(
              "With its water-based structure, it can be applied on concrete for 7 days and can be used in wet cleaning areas"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Solvent-free and odourless, it can be used in hygiene areas such as all food processing facilities, hospitals, laboratories"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Creates safe usage areas with its non-slip surface structure"
            )}{" "}
          </li>
          <li className="list-disc">
            {t(
              "It has a wide usage area with its easy-to-clean structure that does not allow bacterial growth"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can follow concrete joints and does not require additional expansion joints"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, solvent free, water based, cement and aggregate added, high performance, fast curing, self levelling polymer concrete floor coating material. It is resistant to thermal shocks, solvents and chemical effects, has excellent abrasion and impact resistance, does not allow bacterial growth, easy to clean, long-lasting, durable and decorative coating system. StenScreed® 400S protects the floor it covers from external influences with its excellent physical properties and impermeable structure and allows maintenance such as pressurised cold-hot water, steam cleaning. With its water-based and solvent-free structure, it is an environmentally friendly product suitable for contemporary expectations. It is suitable for use in all indoor areas where forklift, pallet truck and vehicle traffic is in question. It is especially preferred in environments with frequent cleaning, thermal shocks, solvents and chemicals that will cause corrosion."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenScreed 400S CC</p>
          <p>
            {" "}
            {t(
              "Polyurethane Based, High Performance, Conductive Coating Material"
            )}{" "}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Ideal for load-bearing floors due to excellent wear resistance"
            )}
          </li>
          <li className="list-disc"> {t("High conductivity")} </li>
          <li className="list-disc"> {t("Resistant to many chemicals")}</li>
          <li className="list-disc"> {t("Excellent thermal compatibility with concrete")} </li>
          <li className="list-disc"> {t("Resistant to thermal shocks (+700C)")} </li>
          <li className="list-disc">
            {t(
              "Thanks to its very high impact resistance, it does not crack, detach from the surface and does not disintegrate"
            )}
          </li>
          <li className="list-disc">
            {t(
              "With its water-based structure, it can be applied on concrete for 7 days and can be used in wet cleaning areas"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Creates safe usage areas with its non-slip surface structure"
            )}{" "}
          </li>
          <li className="list-disc">
            {t(
              "It has a wide usage area with its easy-to-clean structure that does not allow bacterial growth"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can follow concrete joints and does not require additional expansion joints"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, solvent free, water based, cement and aggregate added, high performance, fast curing, self leveling polymer concrete conductive floor coating material. StenScreed® 400S CC is a durable and decorative coating system with high surface and volume conductivity, resistant to thermal shocks, solvents and chemical effects, excellent abrasion and impact resistance, does not allow bacterial growth, easy to clean, long-lasting, durable and decorative. StenScreed® 400S CC protects the floor it covers from external influences with its excellent physical properties and impermeable structure and allows maintenance such as pressurised cold-hot water, steam cleaning. With its water-based and solvent-free structure, it is an environmentally friendly product that meets modern expectations. It is used to create a floor that will not allow static electricity accumulation in factory floors, fuel tanks, areas where flammable gases are processed, filled or stored, in manufacturing and storage areas of explosive materials, in areas where sensitive electronic materials are produced, transported and stored. It is preferred in areas where high thickness antistatic coatings should be made or static electricity discharge should be very fast."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenScreed 600G</p>
          <p>
            {t(
              "Polyurethane Based, Very High Performance, Floor Coating Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Ideal for load-bearing floors due to excellent wear resistance"
            )}
          </li>
          <li className="list-disc"> {t("Unaffected by heavy traffic conditions")} </li>
          <li className="list-disc"> {t("Resistant to many chemicals")}</li>
          <li className="list-disc">
            {t(
              "Excellent thermal compatibility with concrete and unaffected by thermal cycles"
            )}
          </li>
          <li className="list-disc"> {t("Resistant to thermal shocks (+160 0C)")} </li>
          <li className="list-disc">
            {t(
              "Thanks to its very high impact resistance, it does not crack, detach from the surface and does not disintegrate"
            )}
          </li>
          <li className="list-disc">
            {t(
              "With its water-based structure, it can be applied on concrete for 7 days and can be used in wet cleaning areas"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Solvent-free and odourless, it can be used in hygiene areas such as all food processing facilities, hospitals, laboratories"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Creates safe usage areas with its non-slip surface structure"
            )}{" "}
          </li>
          <li className="list-disc">
            {t(
              "It has a wide usage area with its easy-to-clean structure that does not allow bacterial growth"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can follow concrete joints and does not require additional expansion joints"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, solvent-free, water-based, cement and aggregate reinforced, high performance, fast curing, self leveling polymer concrete floor coating material. StenScreed® 600G is a long-lasting, durable and decorative coating system that is resistant to thermal shocks, solvents and chemical effects, has excellent abrasion and impact resistance, does not allow bacterial growth, easy to clean, long-lasting, durable and decorative. With its excellent physical properties and impermeable structure, StenScreed® 600G protects the floor it covers from external influences and allows maintenance such as pressurized cold and hot water, steam cleaning. With its water-based and solvent-free structure, it is an environmentally friendly product that meets modern expectations. Suitable for use in all indoor areas where forklifts, pallet trucks and vehicle traffic are involved. It is especially preferred in environments with frequent cleaning, thermal shocks, solvents and chemicals that can cause corrosion."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat PUR 6000</p>
          <p> {t("Polyurea based, Heavy duty, Surface Coating Material")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurea based")} </li>
          <li className="list-disc"> {t("Solvent free")} </li>
          <li className="list-disc">
            {t(
              "It can be easily applied in a very short time with the application machine"
            )}{" "}
          </li>
          <li className="list-disc">
            {t(
              "After the application, it cures in a very short time and becomes ready for use."
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can be applied even at very low temperatures and high ambient humidity"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Very high mechanical and chemical resistance, long service life"
            )}{" "}
          </li>
          <li className="list-disc"> {t("Very high thermal resistance")} </li>
          <li className="list-disc">
            {" "}
            {t(
              "It does not lose its flexibility and does not become brittle even at very low temperatures."
            )}{" "}
          </li>
          <li className="list-disc"> {t("Resistant to UV rays")} </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Heavy-duty, flexible, solvent-free, fast curing, seamless protective coating and floor coating system. It has high slip and excellent abrasion, tear and tensile resistance and is resistant to chemical effects, physical stresses, minor and moderate ground movements. It is a system consisting of solvent-free polyurea resin, pigment and solid filler. It is a long-lasting and robust coating system with a slightly grainy texture, seamless structure, resistant to abrasion, impact, chemical effects and penetration. Maintains its excellent flexibility even in cold conditions. Resistant to organic and inorganic acids and alkalis, oil, fuel and antifreeze and many chemicals."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PUV 203</p>
          <p>
            {" "}
            {t(
              "Polyurethane Based, Two Component, Transparent, Protective Varnish"
            )}{" "}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Fully resistant to outdoor conditions")} </li>
          <li className="list-disc">{t("Not affected by UV rays")} </li>
          <li className="list-disc">
            {t(
              "Protects the applied surface against water, rain and sun rays, prevents abrasion"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Creates a smooth layer covering cracks, ground defects and joints"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Protects the appearance of coatings such as wood, tile, granite, marble, natural stone"
            )}
          </li>
          <li className="list-disc">{t("Ideal for facades, terraces, balconies and wet areas")}</li>
          <li className="list-disc"> {t("Easy to clean")} </li>
          <li className="list-disc">
            {t("Long lasting, does not lose elasticity, does not change color")}{" "}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two-component, transparent, decorative varnish. It is UV resistant; does not lose its flexibility and does not change color. StenCoat® 2PUV 203 prevents the surface it protects from getting wet and water penetration, increases its resistance to sunlight, oxidation and prevents abrasion. It can be used to waterproof any horizontal or vertical surface. It is especially used for facades, terraces, balconies and wet floors. Surfaces coated with StenCoat® 2PUV 203 are easy to clean, easy to dry and dust-free. The coating retains its flexibility and abrasion resistance for a long time. It covers cracks, defects and joints of the floor, giving it a smooth top layer."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PUV 204</p>
          <p>{t("Polyurethane Based, Transparent and Matt Floor Varnish")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based")} </li>
          <li className="list-disc">
            {t("Solvent-free, can be easily applied in closed environments")}{" "}
          </li>
          <li className="list-disc">{t("Fully resistant to outdoor conditions")} </li>
          <li className="list-disc">{t("Not affected by UV rays")} </li>
          <li className="list-disc">
            {t(
              "Protects the applied surface against water, rain and sun rays, prevents abrasion"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Creates a smooth layer covering cracks, ground defects and joints"
            )}
          </li>
          <li className="list-disc">{t("Ideal for facades, terraces, balconies and wet areas")}</li>
          <li className="list-disc"> {t("Easy to clean")} </li>
          <li className="list-disc">
            {t("Long lasting, does not lose elasticity, does not change color")}{" "}
          </li>
        </ul>

        <p className="mt-20 text-[black]">
          {t(
            "Polyurethane based, two-component, matt, transparent, decorative varnish. It is UV resistant; does not lose its flexibility and does not change color. StenCoat® 2PUV 204 prevents the surface it protects from getting wet and water penetration, increases its resistance to sunlight, oxidation and prevents abrasion. It can be used to waterproof any horizontal or vertical surface. It is especially used for facades, terraces, balconies and wet floors. Surfaces coated with StenCoat® 2PUV 204 are easy to clean, easy to dry and dust-free. The coating retains its flexibility and abrasion resistance for a long time. It provides a smooth top layer, covering cracks, defects and joints of the floor."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PUV 205</p>
          <p>
            {t(
              "Polyurethane Based, Two Component, Transparent, Protective Varnish"
            )}{" "}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Fully resistant to outdoor conditions")} </li>
          <li className="list-disc">{t("Not affected by UV rays")} </li>
          <li className="list-disc">
            {t(
              "Protects the applied surface against water, rain and sun rays, prevents abrasion"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Creates a smooth layer covering cracks, ground defects and joints"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Protects the appearance of coatings such as wood, tile, granite, marble, natural stone"
            )}
          </li>
          <li className="list-disc">{t("Ideal for facades, terraces, balconies and wet areas")} </li>
          <li className="list-disc"> {t("Easy to clean")} </li>
          <li className="list-disc">
            {t("Long lasting, does not lose elasticity, does not change color")}{" "}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two-component, transparent, decorative varnish. It is UV resistant; does not lose its flexibility and does not change color. StenCoat® 2PUV 205 prevents the surface it protects from getting wet and water penetration, increases its resistance to sunlight, oxidation and prevents abrasion. It can be used to waterproof any horizontal or vertical surface."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PU EXT</p>
          <p>{t("Polyurethane Based, Two Component, Exterior Paint")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Resistant to outdoor conditions.")} </li>
          <li className="list-disc">
            {t(
              "Resistant to UV radiation, color does not deteriorate over time"
            )}{" "}
          </li>
          <li className="list-disc">{t("Protects the surface against water penetration")} </li>
          <li className="list-disc">
            {t("Excellent adhesion on many surfaces such as concrete, metal")}{" "}
          </li>
          <li className="list-disc">{t("Easy to apply")} </li>
          <li className="list-disc">{t("Provides long application time")} </li>
          <li className="list-disc">{t("Fast hardening after application")} </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two component, decorative topcoat paint. Available in catalog colors. Resistant to chemical effects, external conditions and UV radiation; does not lose its resistance and color. Protects the applied surface against water penetration and increases its resistance against oxidation and abrasion. Can be used on all kinds of horizontal and vertical concrete and metal surfaces. It is especially ideal for use on exterior facades. Surfaces coated with StenCoat® 2PU EXT are easily cleaned and dry easily. It prevents dusting of the surface it covers. The coating maintains its color, elasticity, abrasion resistance, water impermeability and UV resistance for a long time. It covers cracks, defects and joints in the floor and provides a smooth top coat and stops water penetration."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PU TOP HD</p>
          <p>{t("Polyurethane Based, Heavy Duty, Protective Floor Paint")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Resistant to indoor and outdoor conditions")} </li>
          <li className="list-disc"> {t("Not adversely affected by vehicle traffic")} </li>
          <li className="list-disc">{t("Protects the surface against water penetration")} </li>
          <li className="list-disc"> {t("Does not lose its color over time with UV resistance")} </li>
          <li className="list-disc"> {t("Ideal for protecting epoxy floors from adverse effects")} </li>
          <li className="list-disc">{t("Easy to apply")} </li>
          <li className="list-disc"> {t("Provides long application window")} </li>
          <li className="list-disc"> {t("Hardens quickly after application")} </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two component, protective topcoat paint. Available in catalog colors. It is resistant to chemical effects, external conditions and UV radiation; does not lose its resistance and color. It protects the applied surface against water penetration and increases its resistance against oxidation and abrasion. Protects epoxy floor systems against sunlight, scratches, abrasion and impacts. Can be used as a protective layer in all types of floor systems.  Surfaces coated with StenCoat® 2PU TOP HD are easy to clean, easy to dry and do not generate dust. The coating retains its color, abrasion resistance, water impermeability and UV resistance for a long time. It covers cracks, defects and joints in the floor and provides a smooth top coat and stops water penetration."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PU TOP FX</p>
          <p>{t("Polyurethane Based, UV Resistant, Elastic Floor Paint")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to indoor and outdoor conditions")} </li>

          <li className="list-disc">{t("Does not lose its color over time with UV resistance")} </li>

          <li className="list-disc">{t("Protects the surface against water penetration")} </li>

          <li className="list-disc">{t("Flexible, adapts to the movement of the floor")} </li>

          <li className="list-disc">
            {t("Ideal for protecting polymeric floors from adverse effects")}{" "}
          </li>

          <li className="list-disc">{t("Provides high protection with low consumption")} </li>

          <li className="list-disc">{t("Easy to apply")} </li>

          <li className="list-disc"> {t("Provides long application window")} </li>

          <li className="list-disc">{t("Cures quickly after application")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two component, decorative topcoat material. Available in catalog colors. Resistant against chemical effects, external conditions and UV radiation; does not lose its elasticity and color. Protects the applied surface against water penetration and increases its resistance against oxidation and abrasion. It is applied on polymeric floor coverings to improve the strength properties of the coating. It protects the applied surface thanks to its flexibility, UV resistance, abrasion and slip resistance. It is also preferred as decorative paint on various surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCoat 2PU TOP UV</p>
          <p>{t("Polyurethane Based, UV Resistant, Elastic Floor Paint")} </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Suitable for indoor and outdoor use")} </li>

          <li className="list-disc">
            {t(
              "Not affected by UV rays emitted from sources such as sun, halogen lamps"
            )}
          </li>

          <li className="list-disc">{t("Fully resistant to cleaning chemicals")} </li>

          <li className="list-disc">{t("Flexible, adapts to the movement of the subfloor")} </li>

          <li className="list-disc">
            {t(
              "Can be used as a protective topcoat on all polymeric coatings such as polyurea, epoxy and polyurethane"
            )}
          </li>

          <li className="list-disc">{t("Can be used on any horizontal and vertical surface")} </li>

          <li className="list-disc">{t("Easy to clean and quick drying")} </li>

          <li className="list-disc">{t("Long lasting, no cracking, no peeling, no peeling")} </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two component, protective floor paint. Available in catalog colors. Resistant to abrasion, ground movements and UV rays; does not lose its flexibility and does not change color. It is applied on polymeric floor coatings such as epoxy, polyurethane and polyurea to improve the strength properties of the coating. Protects the applied surface thanks to its flexibility, UV resistance, abrasion and slip resistance."
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
            {t("Floor Coating")}{" "}
          </h1>
          <p className="text-[#57C5B6]">
            {t("Polyurethane Based Floor Coating Materials")}
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

export default PoliüretanEsaslı;
