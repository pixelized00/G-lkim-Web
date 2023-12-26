import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const PolyurethaneJoint = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal PU JFR</p>
          <p>
            {t(
              "Resistant to Jet Fuels, Single Component, Cold Applied, Polyurethane Based, Joint Filling Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based, one component")}
          </li>
          <li className="list-disc">{t("Cold applied")}</li>
          <li className="list-disc">{t("Gives a smooth surface by itself")}</li>
          <li className="list-disc">
            {t("Abrasion resistance and adhesion strength are very high")}
          </li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {t("Suitable for indoors and outdoors")}{" "}
          </li>
          <li className="list-disc">{t("Resistant to UV rays")} </li>
          <li className="list-disc">{t("Easy and practical to use")}</li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "Polyurethane based, single component, cold applied, polyurethane based, jet fuel and chemical resistant joint sealant. StenSeal® PU JFR, produced with Stenkim®'s special advanced polymer technology, is a material suitable for heavy traffic conditions and resistant to dynamic movements with its elastomeric structure, high abrasion resistance and adhesion strength, excellent chemical resistance. It is completely resistant to ultraviolet rays. It is especially produced for runways, parking areas, terminals and ramps, cargo areas and roads in airports. In addition, it is a very suitable and economical joint filling material for motorways, parking areas, secondary roads, bridge connections, ramps, stadiums, industrial floors, pavements, fuel stations, roads and concrete areas in petrochemical and other industrial facilities exposed to all kinds of traffic. It is suitable for all kinds of horizontal joints in open areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal PU JFR-NS</p>
          <p>
            {t(
              "Resistant to Jet Fuels, Single Component, Cold Applied, Non-flowable, Polyurethane Based, Joint Filling Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based, one component")}
          </li>
          <li className="list-disc">{t("Cold applied")}</li>
          <li className="list-disc">{t("Semi-Dry Type")} </li>
          <li className="list-disc">
            {t("Ideal for vertical and overhead joints")}
          </li>
          <li className="list-disc">
            {t("Abrasion resistance and adhesion strength are very high")}
          </li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {t("Suitable for indoors and outdoors")}{" "}
          </li>
          <li className="list-disc">{t("Resistant to UV rays")}</li>
          <li className="list-disc">{t("Easy and practical to use")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, single component, cold applied, non-flowable, polyurethane based, jet fuel and chemical resistant joint sealant. StenSeal® PU JFR-NS, produced with Stenkim®'s special advanced polymer technology, is an elastomeric structure, high abrasion resistance and adhesion strength, excellent chemical resistance, suitable for heavy traffic conditions and resistant to dynamic movements. It is completely resistant to ultraviolet rays. Especially produced for inclined, vertical and overhead joints. It is a very suitable and economical joint filling material for inclined or vertical joints in airports, motorways, parking areas, ramps, stadiums, pavements, fuel stations, petrochemical and other industrial facilities. It provides effective adhesion to both surfaces in joints between different surfaces. It is suitable for walls, stairs, precast panels, prefabricated structures, channels, wells, concrete pipe connections."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal PU JFR-LV</p>
          <p>
            {t(
              "Jet Fuels Resistant, One Component, Cold Applied, Semi-Fluid Type, Polyurethane Based, Joint Filling Material"
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
          <li className="list-disc">{t("Cold applied")} </li>
          <li className="list-disc">{t("Semi-Dry Type")} </li>
          <li className="list-disc">
            {t("Ideal for horizontal and inclined joints")}
          </li>
          <li className="list-disc">
            {t("Abrasion resistance and adhesion strength are very high")}{" "}
          </li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {t("Suitable for indoors and outdoors")}{" "}
          </li>
          <li className="list-disc">{t("Resistant to UV rays")}</li>
          <li className="list-disc">{t("Easy and practical to use")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, single component, cold applied, semi-fluid, polyurethane based, jet fuel and chemical resistant joint sealant. StenSeal® PU JFR-LV, produced with Stenkim®'s special advanced polymer technology, is a material suitable for heavy traffic conditions and resistant to dynamic movements with its elastomeric structure, high abrasion resistance and adhesion strength, excellent chemical resistance. It is completely resistant to ultraviolet rays. It is especially produced for horizontal and maximum 15% inclined joints. It is a very suitable and economical joint filling material for joints in airports, motorways, parking areas, ramps, stadiums, pavements, fuel stations, petrochemical and other industrial facilities. In joints between different surfaces, it provides effective adhesion to both surfaces."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PT 210</p>
          <p>
            {t(
              "Jet Fuel Resistant, Cold Applied, Polyurethane Based, Coal Tar Additive, Self Leveling Type Joint Filler and Insulation Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyurethane based, two-component")}{" "}
          </li>
          <li className="list-disc">{t("Cold applied")} </li>
          <li className="list-disc">
            {t("Chemically hardens and gives a smooth surface by itself")}
          </li>
          <li className="list-disc">
            {t("Abrasion resistance and adhesion strength are very high")}
          </li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It can also be used for the repair of cracks in concrete floors"
            )}
          </li>
          <li className="list-disc">{t("Completely resistant to UV rays")}</li>
          <li className="list-disc">
            {t(
              "Faster or slower curing can be achieved according to user needs"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, cold applied, chemically hardening, smooth surface, polyurethane based, coal tar added, elastomeric, high abrasion resistance and adhesion strength, especially not affected by jet fuels, hydraulic fluids and oils, suitable for heavy traffic conditions, resistant to dynamic movements. It is completely resistant to ultraviolet rays. It is especially produced for runways, parking areas, terminals and ramps, cargo areas and roads in airports. In addition, it is a very suitable and economical joint filling material for motorways, parking areas, secondary roads, bridge connections, ramps, stadiums, industrial floors, pavements, fuel stations, roads and concrete areas in petrochemical and other industrial facilities exposed to all kinds of traffic. It is suitable for all kinds of horizontal joints in open areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PT 211</p>
          <p>
            {t(
              "Jet Fuel Resistant, Cold Applied, Polyurethane Based, Coal Tar Added, Non-spill Type Joint Filler and Insulation material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polyurethane based, two-component")} </li>
          <li className="list-disc">{t("Cold applied")} </li>
          <li className="list-disc">
            {t(
              "Non-flowing type. Can be used in vertical and overhead applications"
            )}
          </li>
          <li className="list-disc">{t("Abrasion resistance and adhesion strength are very high")} </li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It can also be used for the repair of cracks in concrete floors"
            )}
          </li>
          <li className="list-disc">{t("Completely resistant to UV rays")}</li>
          <li className="list-disc">
            {t(
              "Faster or slower curing can be achieved according to user needs"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, cold applied, chemically hardening, smooth surface, polyurethane based, coal tar added, elastomeric, high abrasion resistance and adhesion strength, especially not affected by jet fuels, hydraulic fluids and oils, suitable for heavy traffic conditions, resistant to dynamic movements. It is designed for inclined, vertical and inverted joints and is designed not to flow during application. It is completely resistant to ultraviolet rays. It should be considered especially for inclined, vertical and inverted joints on the ceiling. It is used outdoors. It is suitable for non-horizontal joints in places such as airports, refineries, chemical plants where petroleum-based fuels and substances such as oil, antifreeze, battery acid are frequently encountered. It provides an effective adhesion to both surfaces of the seals with different or similar surface structures. It is used in curtain walls, expansion and control joints, inclined walls, pre-cast panels, prefabricated structures, around the holes where the installation pipes pass in walls, floors and floors, stairs and inclined exits, ducts, drains, concrete pipe connections, connections of prefabricated concrete building elements and similar places."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PT 210 MU</p>
          <p>
            {t(
              "Machine Applied, Jet Fuel Resistant, Polyurethane Based, Self Leveling Type Joint Filler and Insulation Materia"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polyurethane based, two-component")}</li>
          <li className="list-disc">{t("Special design for machine application")}</li>
          <li className="list-disc">{t("Chemically hardens, gives smooth surface")}</li>
          <li className="list-disc">{t("Fast curing, no manual labour required")}</li>
          <li className="list-disc">{t("Abrasion resistance and adhesion strength are very high")}</li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">
            {t(
              "Resistant to jet fuels, oils, dilute acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">
            {t(
              "It can also be used for the repair of cracks in concrete floors"
            )}
          </li>
          <li className="list-disc">{t("Completely resistant to UV rays")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a machine-applied, two-component, cold-applied, chemically hardening, smooth surface, polyurethane-based, coal tar-added, elastomeric, high abrasion resistance and adhesion strength, especially not affected by jet fuels, hydraulic fluids and oils, suitable for heavy traffic conditions, resistant to dynamic movements. It is completely resistant to ultraviolet rays. It is especially produced for runways, parking areas, terminals and ramps, cargo areas and roads in airports. In addition, it is a very suitable and economical joint filling material for motorways, parking areas, secondary roads, bridge connections, ramps, stadiums, industrial floors, pavements, fuel stations, roads and concrete areas in petrochemical and other industrial facilities exposed to all kinds of traffic. It is suitable for all kinds of horizontal joints in open areas.It is especially ideal for application areas requiring fast workmanship and application."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PT 110</p>
          <p>
            {t(
              "Tar Modified Polyurethane Based, High Elasticity, Crack Repair and Joint Sealant"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based, two-component")}</li>
          <li className="list-disc">{t("Cold applied")}</li>
          <li className="list-disc">{t("Chemically hardens and gives smooth surface")}</li>
          <li className="list-disc">{t("Abrasion resistance and adhesion strength are very high")}</li>
          <li className="list-disc">{t("Resistant to dynamic movements")}</li>
          <li className="list-disc">
            {t(
              "Ideal for all joint and crack repairs where high flexibility is required"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Provides superior adhesion and flexibility in joints between Asphalt - Concrete and Asphalt - Asphalt"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Resistant to hydraulic oils, dilute acids and bases, various chemical substances"
            )}
          </li>
          <li className="list-disc">{t("Completely resistant to UV rays")}</li>
          <li className="list-disc">
            {t(
              "Faster or slower curing can be achieved according to user needs"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, cold applied, chemically curing, chemically hardening, smooth surface polyurethane based, coal tar added, elastomeric, high abrasion resistance and adhesion strength, especially not affected by fuels, hydraulic fluids and oils, suitable for heavy traffic conditions, highly flexible, resistant to dynamic movements. It is resistant to ultraviolet rays. It is produced for parking areas, cargo areas, bridges and roads. It is suitable for all joints and cracks where high flexibility is required. It provides superior adhesion and flexibility in concrete - concrete, asphalt - concrete joints and asphalt - asphalt joints. Suitable for all kinds of horizontal joints in open areas."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PU 210</p>
          <p>
            {t(
              "Cold Applied, Polyurethane Based, Self Leveling Type, Heavy Duty and Traffic Joint Filling and Insulation Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based, two-component")}</li>
          <li className="list-disc">{t("Cold applied")}</li>
          <li className="list-disc">{t("Chemically hardens and gives smooth surface")}</li>
          <li className="list-disc">{t("Adhesion strength is very high")}</li>
          <li className="list-disc"> {t("Can be used in indoor and outdoor applications")}</li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">{t("Resistant to oil, fuel and many chemicals")}</li>
          <li className="list-disc">{t("UV resistant")}</li>
          <li className="list-disc">
            {t(
              "Faster or slower curing can be achieved according to user needs"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two-component, cold applied, chemically hardening, non-flowable, elastomeric, high working flexibility and adhesion strength, resistant to dynamic movements, joint filling and insulation material suitable for heavy traffic conditions. Catalogue colours are available. Resistant against organic and inorganic acids and alkalis, oil, fuel and antifreeze, many chemicals. Resistant to ultraviolet rays. Especially produced for vertical and overhead joint applications. It has a very wide range of usage area in indoor and outdoor areas where load-bearing resistance and elasticity are sought together. It can also respond to visually important requests with various colour possibilities. Some of the places of use are motorways, bridge connections, stadiums, floors in industrial facilities, warehouses, warehouses, port areas, dam platforms, markets, bazaars, pedestrian areas, pavements, runways, parking areas, terminals and ramps, cargo areas and similar open or closed areas and roads. Likewise, it is used to provide sealing and adhesion on the edges of manhole covers and under covers on city roads. In short, it is suitable for all kinds of vertical and overhead joints and joints in indoor and outdoor areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PU 211</p>
          <p>
            {t(
              "Cold Applied, Polyurethane Based, Non-Flowable, Heavy Duty and Traffic Joint Filling and Insulation Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based, two-component")}</li>
          <li className="list-disc">{t("Cold applied")}</li>
          <li className="list-disc">{t("Chemically hardens")} </li>
          <li className="list-disc">
            {t(
              "Non-flowing type. Can be used in vertical and overhead applications"
            )}
          </li>
          <li className="list-disc">{t("Adhesion strength is very high")}</li>
          <li className="list-disc"> {t("Can be used in indoor and outdoor applications")}</li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">{t("Resistant to oil, fuel and many chemicals")} </li>
          <li className="list-disc">{t("UV resistant")}</li>
          <li className="list-disc">
            {t(
              "Faster or slower curing can be achieved according to user needs"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two-component, cold applied, chemically hardening, non-flowable, elastomeric, high working flexibility and adhesion strength, resistant to dynamic movements, joint filling and insulation material suitable for heavy traffic conditions. Catalogue colours are available. Resistant against organic and inorganic acids and alkalis, oil, fuel and antifreeze, many chemicals. Resistant to ultraviolet rays. Especially produced for vertical and overhead joint applications. It has a very wide range of usage area in indoor and outdoor areas where load-bearing resistance and elasticity are sought together. It can also respond to visually important requests with various colour possibilities. Some of the places of use are motorways, bridge connections, stadiums, floors in industrial facilities, warehouses, warehouses, port areas, dam platforms, markets, bazaars, pedestrian areas, pavements, runways, parking areas, terminals and ramps, cargo areas and similar open or closed areas and roads. Likewise, it is used to provide sealing and adhesion on the edges of manhole covers and under covers on city roads. In short, it is suitable for all kinds of vertical and overhead joints and joints in indoor and outdoor areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PU 310</p>
          <p>
            {t(
              "Cold Applied, Polyurethane Based, Self Leveling Type, Heavy Duty and Traffic Joint Filling and Insulation Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based, two-component")}</li>
          <li className="list-disc">
            {t(
              "Due to its fluidity, it can be easily applied even to very thin joints"
            )}
          </li>
          <li className="list-disc">{t("Chemically hardens and gives a smooth surface by itself")}</li>
          <li className="list-disc">{t("Adhesion strength is very high")}</li>
          <li className="list-disc"> {t("Can be used in indoor and outdoor applications")}</li>
          <li className="list-disc">
            {t(
              "Ideal for wide designed joints with high hardness and for floors with low joint movement carrying heavy traffic"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Due to its fluidity, it can be easily applied even to very thin joints"
            )}
          </li>
          <li className="list-disc">{t("Resistant to oil, fuel and many chemicals")}</li>
          <li className="list-disc">{t("UV resistant")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two component, cold applied, chemically curing, chemically hardening, smooth surface, elastomeric, high working flexibility and adhesion strength, resistant to dynamic movements, joint filling and insulation material suitable for heavy traffic conditions. Catalogue colours are available. Resistant against organic and inorganic acids and alkalis, oil, fuel and antifreeze, many chemicals. Resistant to ultraviolet rays. Produced to give a smooth surface for horizontal joints. It has a very wide usage area in indoor and outdoor areas where transport resistance and elasticity are sought together. It can also respond to visually important requests with various colour possibilities. Some of the places of use are motorways, bridge connections, stadiums, floors in industrial facilities, warehouses, warehouses, port areas, dam platforms, markets, bazaars, pedestrian areas, pavements, runways, parking areas, terminals and ramps, cargo areas and similar open or closed areas and roads. Likewise, it is used to provide sealing and adhesion on the edges of manhole covers and under covers on city roads. In short, it is suitable for all kinds of horizontal or less than 2% inclined joints and joints in indoor and outdoor areas"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PU 311</p>
          <p>
            {t(
              "Cold Applied, Polyurethane Based, Non-Flowable, Heavy Duty and Traffic Joint Filling and Insulation Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based, two-component")}</li>
          <li className="list-disc">{t("Cold applied")}</li>
          <li className="list-disc"> {t("Chemically hardens")}</li>
          <li className="list-disc">
            {t(
              "Non-flowing type. Can be used in vertical and overhead applications"
            )}
          </li>
          <li className="list-disc">{t("Adhesion strength is very high")}</li>
          <li className="list-disc"> {t("Can be used in indoor and outdoor applications")}</li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc"> {t("Resistant to oil, fuel and many chemicals")}</li>
          <li className="list-disc">{t("UV resistant")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two-component, cold applied, chemically hardening, non-flowable, elastomeric, high working flexibility and adhesion strength, resistant to dynamic movements, joint filling and insulation material suitable for heavy traffic conditions. Catalogue colours are available. Resistant against organic and inorganic acids and alkalis, oil, fuel and antifreeze, many chemicals. Resistant to ultraviolet rays. Especially produced for vertical and overhead joint applications. It has a very wide range of usage area in indoor and outdoor areas where load-bearing resistance and elasticity are sought together. It can also respond to visually important requests with various colour possibilities. Some of the places of use are motorways, bridge connections, stadiums, floors in industrial facilities, warehouses, warehouses, port areas, dam platforms, markets, bazaars, pedestrian areas, pavements, runways, parking areas, terminals and ramps, cargo areas and similar open or closed areas and roads. Likewise, it is used to provide sealing and adhesion on the edges of manhole covers and under covers on city roads. In short, it is suitable for all kinds of vertical and overhead joints and joints in indoor and outdoor areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PU CRT 310</p>
          <p>
            {t(
              "Cold Applied, Cartridge Type, Polyurethane Based, Heavy Duty and Traffic Joint Filling Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane-based, two-component cartridge")}</li>
          <li className="list-disc"> {t("Very fast curing time")}</li>
          <li className="list-disc"> {t("Mixing channel ensures proper mixing")}</li>
          <li className="list-disc">{t("Adhesion strength is very high")}</li>
          <li className="list-disc"> {t("Can be used in indoor and outdoor applications")}</li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc"> {t("Resistant to oil, fuel and many chemicals")}</li>
          <li className="list-disc">{t("UV resistant")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two component, cold applied, chemically curing, chemically hardening, smooth surface, elastomeric, high working flexibility and adhesion strength, resistant to dynamic movements, joint filling and insulation material suitable for heavy traffic conditions. Catalogue colours are available. Resistant against organic and inorganic acids and alkalis, oil, fuel and antifreeze, many chemicals. Resistant to ultraviolet rays. Produced to provide fast curing solutions for horizontal joints. It has a very wide range of use in indoor and outdoor areas where transport resistance and elasticity are sought together. It can also respond to visually important requests with various colour possibilities. Some of the places of use are motorways, bridge connections, stadiums, floors in industrial facilities, warehouses, warehouses, port areas, dam platforms, markets, bazaars, pedestrian areas, pavements, runways, parking areas, terminals and ramps, cargo areas and similar open or closed areas and roads in airports. Likewise, it is used to provide sealing and adhesion on the edges of manhole covers and under covers on city roads. In short, it is suitable for all kinds of horizontal or less than 2% inclined joints and joints in indoor and outdoor areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal 2PU CRT 320</p>
          <p>
            {t(
              "Cold Applied, Cartridge Type, Polyurethane Based, Heavy Duty and Traffic Joint Filling Material"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane-based, two-component cartridge")}</li>
          <li className="list-disc"> {t("Very fast curing time")}</li>
          <li className="list-disc"> {t("Mixing channel ensures proper mixing")}</li>
          <li className="list-disc">{t("Adhesion strength is very high")}</li>
          <li className="list-disc"> {t("Can be used in indoor and outdoor applications")}</li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc"> {t("Resistant to oil, fuel and many chemicals")}</li>
          <li className="list-disc">{t("UV resistant")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, two component, cold applied, chemically curing, chemically hardening, smooth surface, elastomeric, high working flexibility and adhesion strength, resistant to dynamic movements, joint filling and insulation material suitable for heavy traffic conditions. Catalogue colours are available. Resistant against organic and inorganic acids and alkalis, oil, fuel and antifreeze, many chemicals. Resistant to ultraviolet rays. Produced to provide fast curing solutions for horizontal joints. It has a very wide range of use in indoor and outdoor areas where transport resistance and elasticity are sought together. It can also respond to visually important requests with various colour possibilities. Some of the places of use are motorways, bridge connections, stadiums, floors in industrial facilities, warehouses, warehouses, port areas, dam platforms, markets, bazaars, pedestrian areas, pavements, runways, parking areas, terminals and ramps, cargo areas and similar open or closed areas and roads in airports. Likewise, it is used to provide sealing and adhesion on the edges of manhole covers and under covers on city roads. In short, it is suitable for all kinds of horizontal or less than 2% inclined joints and joints in indoor and outdoor areas."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal PU 102</p>
          <p>
            {t(
              "Low Hardness, Polyurethane Based, One Component, Sausage Type, Joint Sealant"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane based, one component")}</li>
          <li className="list-disc">{t("Cold-applied, flexible")}</li>
          <li className="list-disc">{t("Chemically hardens")} </li>
          <li className="list-disc">
            {t(
              "Thanks to its non-flowing structure, it can be applied without any problems in vertical joints"
            )}
          </li>
          <li className="list-disc"> {t("Can be used in indoor and outdoor applications")}</li>
          <li className="list-disc">{t("Can be used where joint movements are high")} </li>
          <li className="list-disc">{t("Ideal for narrowly opened joints")} </li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">{t("UV resistant")}</li>
          <li className="list-disc"> {t("Easy and practical to use")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, one component, cold applied, chemically hardening, non-flowable, elastomeric, high working flexibility, resistant to dynamic movements joint filling and insulation material. It is resistant to organic and inorganic acids and alkalis, oil, fuel and many chemicals in short-term contact. Resistant to ultraviolet rays. It can be used in all kinds of interior and exterior joints. Due to its high bearing capacity and elasticity, it is suitable for use in industrial facilities, warehouses, workshops, roads and parking areas with heavy traffic conditions, parapet joints of roofs and terraces, connection points of prefabricated elements and joints of exterior claddings. It is used on floors exposed to heavy traffic conditions where high bearing resistance is preferred to elasticity. It can also be used for sealing marble, tile, tile joints, joinery-wall joints, pipe penetrations and similar places used in floor coverings."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal PU 202</p>
          <p>
            {t(
              "Polyurethane Based, One Component, Sausage Type, Joint Sealant"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Polyurethane based, one component")}
          </li>
          <li className="list-disc">{t("Cold-applied, flexible")}</li>
          <li className="list-disc">{t("Chemically hardens")} </li>
          <li className="list-disc">
            {t(
              "Thanks to its non-flowing structure, it can be applied without any problems in vertical joints"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("Can be used in indoor and outdoor applications")}
          </li>
          <li className="list-disc">
            {t("Can be used where joint movements are high")}{" "}
          </li>
          <li className="list-disc">
            {t("Ideal for narrowly opened joints")}{" "}
          </li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc">{t("Resistant to UV rays")}</li>
          <li className="list-disc"> {t("Easy and practical to use")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, one component, cold applied, chemically hardening, non-flowable, elastomeric, high working flexibility, resistant to dynamic movements joint filling and insulation material. It is resistant to organic and inorganic acids and alkalis, oil, fuel and many chemicals in short-term contact. Resistant to ultraviolet rays. It can be used in all kinds of interior and exterior joints. Due to its high elasticity, it is especially recommended in places where connection and joint movements are high, in joints made narrower than necessary. It is used on floors exposed to light vehicle and pedestrian traffic where high elasticity is preferred to bearing resistance. It can also be used for sealing marble, tile, tile joints, joinery-wall joints, pipe penetrations and similar places used in floor coverings."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenSeal PU 300</p>
          <p>
            {t(
              "High Hardness, Fast Curing Polyurethane Based,  Elastomeric Sausage Type Joint Sealant"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t("Polyurethane based, one component")}
          </li>
          <li className="list-disc">{t("Cold-applied, flexible")}</li>
          <li className="list-disc"> {t("Chemically hardens")} </li>
          <li className="list-disc">
            {t(
              "Thanks to its non-flowing structure, it can be applied without any problems in vertical joints"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("Can be used in indoor and outdoor applications")}
          </li>
          <li className="list-disc"> {t("High carrying capability")}</li>
          <li className="list-disc">
            {" "}
            {t("Ideal for narrowly opened joints")}
          </li>
          <li className="list-disc">{t("Resistant to dynamic movements")} </li>
          <li className="list-disc"> {t("UV resistant")} </li>
          <li className="list-disc"> {t("Easy and practical to use")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polyurethane based, one component, cold applied, chemically hardening, non-flowable, elastomeric, high working flexibility, resistant to dynamic movements joint filling and insulation material. It is resistant to organic and inorganic acids and alkalis, oil, fuel and many chemicals in short-term contact. Resistant to ultraviolet rays. It can be used in all kinds of interior and exterior joints. Due to its high elasticity, it is especially recommended in places where connection and joint movements are high, in joints made narrower than necessary. It is used on floors exposed to light vehicle and pedestrian traffic where high elasticity is preferred to bearing resistance. It can also be used for sealing marble, tile, tile joints, joinery-wall joints, pipe penetrations and similar places used in floor coverings."
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
    <div className="bg-[#F3F3F3] h-full w-screen overflow-hidden ">
      <div className="ml-20">
        <h1 className="pt-10 text-[#247781] font-bold mb-6">
          {t("All Products")}
        </h1>
      </div>
      <div className="bg-white md:w-[460px] h-20 slide-in-left lg:md:w-[460px] xl:md:w-[460px]">
        <div className="md:ml-20 ml-8 lg:ml-20 xl:ml-20  ">
          <h1 className="text-3xl  text-[#247781] pt-2">{t("Joint Filler")}</h1>
          <p className="text-[#57C5B6]">
            {t("Polyurethane Based Joint Sealants")}
          </p>
        </div>
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

export default PolyurethaneJoint;
