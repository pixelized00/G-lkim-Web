import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const ConcreteRepair = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2EP 110</p>
          <p>
            {t(
              "Epoxy Based, Low Viscosity, Injection Mouldable Structural Repair Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <li className="list-disc">{t("100% compatible with concrete.")}</li>
        <li className="list-disc">{t("Fluid")} </li>
        <li className="list-disc">
          {t("Penetrates very well into fine cracks")}
        </li>
        <li className="list-disc">
          {t("Flexible; easily accommodates minor movements")}{" "}
        </li>
        <li className="list-disc">
          {t(
            "Prevents water leaks, prevents structural and visual damages caused by water to the structure"
          )}
        </li>
        <li className="list-disc">{t("Resistant to UV rays")}</li>
        <li className="list-disc">
          {t("It is a long-lasting and easy to apply material")}
        </li>

        <p className="mt-10  text-[black]">
          {t(
            "Epoxy based, two component, very low viscosity, structural crack repair material that can be applied with low pressure or by flowing. It is used for crack repair in concrete and brick walls. Thanks to its high adhesion and bearing properties, it permanently repairs cracks in such facades and floors. It prevents water leaks, discolouration and damages caused by water freezing in concrete. StenCare® 2EP 110 is produced by adding fluidity enhancing and adhesion strength enhancing additives to epoxy resin with high adhesion to concrete. Thanks to this, it penetrates very well into fine cracks even at low pressures and bonds the surfaces together. It is flexibilised, so it can accommodate minor movements of buildings without breaking and separating from the surface."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2EP 230</p>
          <p>
            {t(
              "Epoxy based, flexible, self-levelling repair and coating material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <li className="list-disc">
          {t("It is a flexible material with high mechanical strength")}
        </li>
        <li className="list-disc">
          {t(
            "It can be applied by pouring and thus provides ease of application"
          )}
        </li>
        <li className="list-disc">{t("Self levelling of the surface")}</li>
        <li className="list-disc">
          {t(
            "Can be used for sprout planting, anchoring and repair applications"
          )}{" "}
        </li>
        <li className="list-disc">{t("Resistant to heavy conditions.")}</li>
        <li className="list-disc">{t("100% compatible with concrete.")}</li>
        <li className="list-disc">
          {t("Fast curing, does not disrupt traffic")}{" "}
        </li>
        <li className="list-disc">
          {t("It is a long-lasting and easy to apply material")}{" "}
        </li>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two-component, cold applied, chemically hardening, flowable and self-levelling, high mechanical strength and adhesion strength, coating and anchorage material suitable for heavy traffic conditions. It is resistant to organic and inorganic acids and alkalis, oil, fuel and antifreeze and many chemicals. It is especially produced for places that are likely to be exposed to movement during or after repair. It can be used for bonding aggregates to the concrete surface where anti-slip is required, for planting sprouts, for anchoring or repairing surfaces that are exposed to traffic or otherwise exposed to movement. It provides a permanent and solid repair by adhering very well to concrete, metal, wood and similar materials. It is also used as a filler or adhesive between two different surfaces. With its flexibility, it partially isolates the movement of these two surfaces from each other."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2EP 231</p>
          <p>
            {t(
              "Epoxy Based, Flexible, Non-flowable Repair and Coating Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <li className="list-disc">
          {t("It is a flexible material with high mechanical strength")}
        </li>
        <li className="list-disc">
          {t("Designed for inverted, vertical and inclined repairs.")}
        </li>
        <li className="list-disc">{t("Resistant to heavy conditions.")}</li>
        <li className="list-disc">{t("100% compatible with concrete.")}</li>
        <li className="list-disc">
          {t("Fast curing, does not disrupt traffic")}{" "}
        </li>
        <li className="list-disc">
          {t("It is a long-lasting and easy to apply material")}{" "}
        </li>

        <p className="mt-10 text-[black]">
          {t(
            "Epoxy based, two-component, cold applied, chemically hardening, flowable and self-levelling, high mechanical strength and adhesion strength, coating and anchorage material suitable for heavy traffic conditions. It is resistant to organic and inorganic acids and alkalis, oil, fuel and antifreeze and many chemicals. It is especially produced for places that are likely to be exposed to movement during or after repair. It can be used for bonding aggregates to the concrete surface where anti-slip is required, for planting sprouts, for anchoring or repairing surfaces that carry traffic and are otherwise exposed to movement. It is also suitable for repairs on sloping, vertical or downward facing surfaces. It adheres very well to concrete, metal, wood and similar materials, providing a permanent and solid repair. It is also used as a filler or adhesive between two different surfaces. With its flexibility, it partially isolates the movement of these two surfaces from each other."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2EP 310</p>
          <p>
            {t(
              "Epoxy Based Self Leveling, Adhesion Enhancing Coating, Anchorage and Repair Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to heavy conditions.")}</li>
          <li className="list-disc">
            {" "}
            {t(
              "Curing speed can be increased according to weather and work conditions"
            )}{" "}
          </li>
          <li className="list-disc"> {t("High carrying capacity")} </li>
          <li className="list-disc">{t("100% compatible with concrete.")}</li>
          <li className="list-disc"> {t("Resistant to chemicals")} </li>
          <li className="list-disc">
            {" "}
            {t("It is a long-lasting and easy to apply material")}{" "}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Heavy duty, solvent-free, flowable, epoxy based coating and repair material. It has high adhesion and abrasion resistance and resistance to chemical effects. It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals. It is used in the repair of old concrete surfaces, broken ano and joint edges and similar places, as an adherence enhancer in casting new concrete on old concrete coatings, in rigid assembly works and in sprout planting. It is used indoors and outdoors in all kinds of repairs where high flexibility is not required. It provides a permanent and solid repair by adhering very well to concrete, metal, wood and similar materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2EP 311</p>
          <p>
            {t(
              "Epoxy Based, Non-Flowable Type Anchorage, Repair and Coating Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to heavy conditions.")}</li>
          <li className="list-disc">
            {t("Designed for inverted, vertical and inclined repairs.")}
          </li>
          <li className="list-disc">
            {t("It has high mechanical strength and flexibility.")}
          </li>
          <li className="list-disc">{t("100% compatible with concrete.")}</li>
          <li className="list-disc">
            {t("Fast curing, does not disrupt traffic")}{" "}
          </li>
          <li className="list-disc">
            {t("It is a long-lasting and easy to apply material.")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Heavy duty, solvent-free, flowable, epoxy based coating and repair material. It has high adhesion and abrasion resistance and resistance to chemical effects. It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals. It is used for repairing old concrete surfaces, broken ano and joint edges and similar places, rigid assembly works and sprout planting. It is used indoors and outdoors in all kinds of repairs where high flexibility is not required. It provides a permanent and solid repair by adhering very well to concrete, metal, wood and similar materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2EP 311 ANK</p>
          <p>{t("Epoxy Based Repair and Anchorage Material")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Epoxy based")}</li>
          <li className="list-disc">
            {t("Designed for inverted, vertical and inclined repairs.")}
          </li>
          <li className="list-disc">{t("Resistant to heavy conditions.")}</li>
          <li className="list-disc">{t("High load carrying capacity")}</li>
          <li className="list-disc">{t("100% compatible with concrete.")}</li>
          <li className="list-disc">{t("Chemical resistant")}</li>
          <li className="list-disc">{t("Long lasting and easy to apply.")}</li>
        </ul>{" "}
        <p className="mt-10 text-[black]">
          {t(
            "Heavy duty, solvent-free, non-flowable epoxy based repair and anchorage material. It has high adhesion and abrasion resistance and resistance to chemical effects. It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2MA 210</p>
          <p>{t("Methyl Methacrylate Based Repair and Coating Material")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A]">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Very fast curing and can be used in all emergency repairs")}
          </li>
          <li className="list-disc">
            {t("Resistant to heavy traffic conditions")}
          </li>
          <li className="list-disc">{t("High load bearing capacity")}</li>
          <li className="list-disc">{t("Creates a non-slip surface")}</li>
          <li className="list-disc">{t("Resistant to chemicals")}</li>
          <li className="list-disc">
            {t("It is a long-lasting and easy to apply material")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Heavy duty, solvent-free, flowable, methacrylate based coating and repair material. It has fast curing, high adhesion and abrasion resistance and resistance to chemical effects.  It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals. With its very fast curing structure, it is suitable for use in airports, runways and aprons, blast sites, motorways, bridges and car parks where fast concrete repair is needed. It creates a non-slip surface and allows all kinds of traffic. It is used for repairing old concrete surfaces, broken ano and joint edges and similar places. It can be used indoors and outdoors in all kinds of repairs where flexibility is not needed. It provides a permanent and solid repair by adhering very well to concrete, metal, wood and similar materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2MA ANK</p>
          <p>{t("Methyl Methacrylate Based Anchoring Material ")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Used for anchoring")} </li>
          <li className="list-disc">
            {t("Can be used in inverted, vertical and inclined applications")}
          </li>
          <li className="list-disc">{t("High mechanical strength")}</li>
          <li className="list-disc">{t("Resistant to heavy conditions.")}</li>
          <li className="list-disc">{t("100% compatible with concrete.")}</li>
          <li className="list-disc">{t("Cures fast")}</li>
        </ul>{" "}
        <p className="mt-10 text-[black]">
          {t(
            "It is a heavy duty, solvent-free, non-flowable, methacrylate based anchorage material. Provides high adhesion, resistant to concrete conditions, suitable for heavy loads. Fast curing. Application surfaces must be dry and clean. It is recommended to clean the holes drilled on concrete surfaces with dry, oil-free compressed air and brush. Air handling alone may be insufficient to remove dust from the hole surface. Metal surfaces should be cleaned with solvent and brush. It adheres very well to dry concrete surfaces and mechanically adheres to oil-free metal surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2MA 310</p>
          <p>{t("Methacrylate Based Repair and Coating Material")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Very fast curing and can be used in all emergency repairs")}
          </li>
          <li className="list-disc">
            {t("Resistant to heavy traffic conditions")}
          </li>
          <li className="list-disc">{t("High load bearing capacity")}</li>
          <li className="list-disc">{t("Creates a non-slip surface")}</li>
          <li className="list-disc">{t("Resistant to chemicals")}</li>
          <li className="list-disc">
            {t("It is a long-lasting and easy to apply material")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Heavy duty, solvent-free, flowable, epoxy based coating and repair material. It has high adhesion and abrasion resistance and resistance to chemical effects. It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals. It is used in the repair of old concrete surfaces, broken ano and joint edges and similar places, as an adherence enhancer in casting new concrete on old concrete coatings, in rigid assembly works and in sprout planting. It is used indoors and outdoors in all kinds of repairs where high flexibility is not required. It provides a permanent and solid repair by adhering very well to concrete, metal, wood and similar materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2MA 314</p>
          <p>{t("Methacrylate Based Concrete Repair Material")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Very fast curing and can be used in all emergency repairs")}
          </li>
          <li className="list-disc">
            {t("Resistant to heavy traffic conditions")}{" "}
          </li>
          <li className="list-disc">{t("High load bearing capacity")} </li>
          <li className="list-disc">{t("Creates a non-slip surface")}</li>
          <li className="list-disc">{t("Resistant to chemicals")} </li>
          <li className="list-disc">{t("Used for deep repairs")} </li>
          <li className="list-disc">
            {t("It is a long-lasting and easy to apply material")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Heavy duty, solvent-free, flowable, methacrylate based coating and repair material. It has fast curing, high adhesion and abrasion resistance and resistance to chemical effects.  It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals. With its very fast curing structure, it is suitable for use in airports, runways and aprons, blast sites, motorways, bridges and car parks where fast concrete repair is needed. It creates a non-slip surface and allows all kinds of traffic. It is used for repairing old concrete surfaces, broken ano and joint edges and similar places. It can be used indoors and outdoors in all kinds of repairs where flexibility is not needed. Provides a permanent and solid repair by adhering very well to concrete, metal, wood and similar materials."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 3EP</p>
          <p>
            {t(
              "Epoxy Based, 3 Component, High Strength Concrete Repair Mortar"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to heavy conditions.")}</li>
          <li className="list-disc">{t("Not slippery")}</li>
          <li className="list-disc">{t("100% compatible with concrete.")}</li>
          <li className="list-disc">
            {t("Ideal for all kinds of small, large concrete repairs")}
          </li>
          <li className="list-disc">{t("Resistant to chemicals")}</li>
          <li className="list-disc">
            {t("It is a long-lasting and easy to apply material")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Heavy-duty, solvent-free, epoxy-based coating and repair material that can be applied by flowing, forming a high bearing strength floor with specially sized solid fillers that provide non-slip. It is used as two or three component. It has high adhesion and abrasion resistance and resistance to chemical effects. The polymeric mixture adapts to the thermal expansion of concrete made of Portland cement and adheres very well to concrete. Since its binder is flexible, it is resistant to thermal and mechanical movements. It does not require joints in places subject to minor movements. It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals. It is used in the repair of old concrete surfaces, broken ano and joint edges and similar places. It is suitable for use on pedestrian walkways, floors in industrial storage tank areas, airport pedestrian walkways, turning and deceleration zones in parking areas and concrete, mosaic, tile, wood, metal and asphalt surfaces in these places."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 3EP FLEX</p>
          <p>
            {t(
              "Epoxy Based, Flexible, 3 Component, Repair and Coating Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to heavy conditions.")}</li>
          <li className="list-disc">{t("Can be used without grouting")}</li>
          <li className="list-disc">{t("Resistant to movement")}</li>
          <li className="list-disc">{t("Not slippery")}</li>
          <li className="list-disc">{t("100% compatible with concrete.")}</li>
          <li className="list-disc">
            {t("Ideal for all kinds of small, large concrete repairs")}
          </li>
          <li className="list-disc">{t("Resistant to chemicals")}</li>
          <li className="list-disc">{t("Long lasting and easy to apply.")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Heavy-duty, solvent-free, epoxy-based coating and repair material that can be applied by flowing, forming a high bearing strength floor with specially sized solid fillers that provide non-slip. It is used as two or three component. It has high adhesion and abrasion resistance and resistance to chemical effects. The polymeric mixture adapts to the thermal expansion of concrete made of Portland cement and adheres very well to concrete. Since its binder is flexible, it is resistant to thermal and mechanical movements. It does not require joints in places subject to minor movements. It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals. It is used in the repair of old concrete surfaces, broken ano and joint edges and similar places. It is suitable for use on pedestrian walkways, floors in industrial storage tank areas, airport pedestrian walkways, turning and deceleration zones in parking areas and concrete, mosaic, tile, wood, metal and asphalt surfaces in these places."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 3EP QC</p>
          <p>
            {t(
              "Epoxy Based, 3 Component, Fast Curing Repair and Coating Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to heavy conditions.")} </li>
          <li className="list-disc">
            {t("Cures much faster than standard epoxies")}
          </li>
          <li className="list-disc">{t("Not slippery")}</li>
          <li className="list-disc">{t("100% compatible with concrete.")}</li>
          <li className="list-disc">{t("Resistant to chemicals")}</li>
          <li className="list-disc">
            {t("It is a long-lasting and easy to apply material")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Heavy-duty, solvent-free, epoxy-based coating and repair material that can be applied by flowing, forming a high bearing strength floor with specially sized solid fillers that provide non-slip. It is used as two or three component. It has high adhesion and abrasion resistance and resistance to chemical effects. The polymeric mixture adapts to the thermal expansion of concrete made of Portland cement and adheres very well to concrete. It is resistant to weak organic and inorganic acids and alkalis; oil, fuel and antifreeze and many chemicals. It is used in the repair of old concrete surfaces, broken ano and joint edges and similar places. It is suitable for use on pedestrian walkways, floors in industrial storage tank areas, airport pedestrian walkways, turning and deceleration zones in parking areas and concrete, mosaic, tile, wood, metal and asphalt surfaces in these places."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 3EP ANK</p>
          <p>
            {t(
              "Epoxy Based, 3 Component, Very High Strength, Anchorage and Mounting Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to heavy conditions.")} </li>
          <li className="list-disc">{t("Solvent free")}</li>
          <li className="list-disc">{t("100% compatible with concrete.")}</li>
          <li className="list-disc">
            {t("Ideal for all kinds of small, large concrete repairs")}
          </li>
          <li className="list-disc">
            {t("Adheres very well to concrete, metal and many other surfaces")}{" "}
          </li>
          <li className="list-disc">
            {t("It is a long-lasting and easy to apply material")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Heavy duty, solvent-free, flowable anchorage material with high bearing strength and abrasion resistance. It is especially designed to be used in places exposed to high abrasion and in luminaire installation works. It can also be used for minor repairs on concrete. It has excellent abrasion and impact resistance and resistance to chemical and atmospheric effects. The polymeric mixture adapts to the thermal expansion of concrete made of Portland cement and adheres very well to concrete, metal and many other surfaces. It is produced for use in concrete paved runways exposed to high abrasion and for armature installation and other anchorage works. Impact absorption, flexing properties and abrasion properties make it suitable for use in track repairs."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 3EP ANK QC</p>
          <p>
            {t(
              "Epoxy Based, Very High Strength, Anchoring and Mounting Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Resistant to heavy conditions.")} </li>

          <li className="list-disc">{t("Solvent free")}</li>

          <li className="list-disc">
            {t("Can be used as an anchor and repair material.")}
          </li>

          <li className="list-disc">{t("100% compatible with concrete.")}</li>

          <li className="list-disc">
            {t("Ideal for all kinds of small, large concrete repairs")}
          </li>

          <li className="list-disc">
            {t("Adheres very well to concrete, metal and many other surfaces")}
          </li>

          <li className="list-disc">
            {t("It is a long-lasting and easy to apply material")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a heavy duty, solvent-free, flowable anchorage material with high bearing strength and abrasion resistance. It is especially designed to be used in places exposed to high abrasion and in luminaire installation works. It can also be used for minor repairs on concrete. It has excellent abrasion and impact resistance and resistance to chemical and atmospheric effects. The polymeric mixture adapts to the thermal expansion of concrete made of Portland cement and adheres very well to concrete, metal and many other surfaces."
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
          <h1 className="text-xl  text-[#247781] pt-2">
            {t("Concrete Curing-Admixture-Repair")}{" "}
          </h1>
          <p className="text-[#57C5B6]">{t("Concrete Repair Materials")}</p>{" "}
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

export default ConcreteRepair;
