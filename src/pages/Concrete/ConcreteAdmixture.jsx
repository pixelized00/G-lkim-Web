import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const ConcreteAdmixture = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix AER</p>
          <p>{t("Air Entrainer, Concrete Admixture")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {" "}
            {t(
              "Controlled micro-pores of the air in the concrete in the form of a distribution"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Increases the resistance of concrete against freeze/thaw cycle"
            )}
          </li>
          <li className="list-disc">
            {t("Reduces the risk of concrete segregation")}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Allows the production of concrete with high workability and durability"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Used in places exposed to winter conditions and in waterproof mass concretes"
            )}
          </li>
          <li className="list-disc">
            {t("It is used where air-blocked concrete is required")}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Can be used in the production of reinforced/unreinforced, light/normal weight concrete and concrete blocks"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t(
              "Ideal for concrete roads, airports, runways, aprons, dams, water reservoirs, etc."
            )}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "It is an air entraining admixture that provides controlled distribution of the air in the concrete in the form of micropores and increases the resistance of the concrete against freezing / thawing cycle. StenMix® AER complies with TS EN 934-2 Ç5 (Air Entraining Concrete Admixture Standard) and ASTM C 260 (Air Entraining Concrete Admixture Standard) standards. It is used in concrete roads, airports, runways and aprons, dams and water reservoirs and waterproof mass concrete. It can also be used in the production of reinforced and unreinforced, light or normal weight concrete and mass concrete production. It can be used especially in the production of concrete with high workability and durability, in concrete masses exposed to winter conditions and solution salts, in places where freeze / thaw cycles in concrete are frequent, and in places where it is desired to obtain air-tight concrete."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix ANTIFREEZE</p>
          <p>
            {t("Frost Protection, Setting Accelerator, Concrete Admixture")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Liquid concrete admixture for pouring quality concrete at low temperatures"
            )}
          </li>
          <li className="list-disc">
            {t("Allows pouring concrete in cold weather")}
          </li>
          <li className="list-disc"> {t("Increases frost resistance.")}</li>
          <li className="list-disc">
            {t(
              "With its setting accelerator feature, it enables the frost resistance limit of concrete to be passed quickly"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Can be used in all reinforced and unreinforced, light and normal weight concrete production"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a concrete admixture that protects freshly poured concrete from frost effect in cold weather conditions, accelerates setting in concrete and provides high quality concrete casting at low temperatures. It does not contain chloride and similar corrosive substances. StenMix® ANTIFREEZE complies with TS EN 934-2 Ç7 (Standard for Setting Accelerator Admixtures) and ASTM C 494-81 Type C (Standard for Setting Accelerator Concrete Admixture) standards. It provides protection of the poured concrete from frost effect in concrete, plaster and injection works to be carried out in cold weather conditions, where there is a risk of frost. It also prevents the negative effects of cold weather conditions on concrete by providing fast setting of concrete. It allows safe concrete pouring below freezing temperature. It enables the concrete to quickly exceed the strength threshold (5 Mpa) required for the concrete not to be affected by frost. Since it does not contain chloride and similar corrosive substances in its structure, it does not cause corrosion in reinforcement. For this reason, it can be used safely in reinforced concrete structures."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix DEFOAMER</p>
          <p>{t("For Concrete Admixtures, Air Release Agent")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyetherester blend")}</li>
          <li className="list-disc">
            {t("Provides high-speed air evacuation")}
          </li>
          <li className="list-disc">
            {t(
              "Enables the production of low air content, low permeability and high strength concrete"
            )}
          </li>
          <li className="list-disc">
            {t("Compatible with concrete admixtures")}
          </li>
          <li className="list-disc">
            {t("Can be used in ready-mixed concrete and precast applications")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Air release agent in wet concrete used in the production of concrete admixtures. It is used in the production of all kinds of concrete admixtures. It is compatible with many polycarboxylate, lignosulfonate and naphthalene sulfonate raw materials, especially SnFlux® brand polycarboxylates. It is specifically designed for use in the production of superplasticizers from these raw materials. When added to such admixtures, it reduces the air holding capacity of concrete. If used in the correct dosage and in mixtures with neutral pH, it provides an inseparable, stable air throw. It can be combined with acetylenic air expellants or TIBP when very low air content concrete is required."
          )}{" "}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix QUICK</p>
          <p>{t("Setting Accelerator, Liquid Concrete Admixture")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Setting accelerator liquid concrete admixture")}
          </li>
          <li className="list-disc">
            {t(
              "Ensures fast setting and early strength in concrete, plaster and cement injection works"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Used to increase the setting speed of concrete in cold weather conditions"
            )}
          </li>
          <li className="list-disc">
            {t("Prefabricated element can be used from production")}
          </li>
          <li className="list-disc">
            {t(
              "Does not decrease the final strength value of concrete, increases the strength values in the first 24 hours"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Compatible with lignin, naphthalene, melamine sulfonate or polymeric plasticizing additives"
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a setting accelerator liquid admixture used in concrete, plaster and cementitious injection works where quick setting and early strength are required. StenMix® QUICK complies with TS EN 934-2 Ç6 (Standard for Setting Accelerator Admixtures) and ASTM C 494-81 Type C (Standard for Setting Accelerator Concrete Admixtures) standards. It can be used in concrete, plaster and injection works to be carried out under cold weather conditions and in all situations where fast setting of concrete is required. It is also suitable for use in prefabricated element production. It allows fast setting and increase in strength values in the first 24 hours. There is no decrease in the final strength of concrete. Compatible with plasticizing admixtures such as lignin, naphthalene, melamine sulfonate. When added to concrete, the acceleration effect may vary depending on the type and dosage of cement, temperature and humidity of the application environment, consistency of concrete, dosage and type of plasticizer."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix RETARD 2</p>
          <p>{t("High Performance, Set Retarding Concrete Admixture")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Modified polysaccharide based high performance setting retarder"
            )}
          </li>
          <li className="list-disc"> {t("Reduces the risk of cold joints")}</li>
          <li className="list-disc">
            {t("Enables quality concrete casting at high temperatures")}
          </li>
          <li className="list-disc">
            {t(
              "Allows fresh concrete to be transported to construction sites located at long distances from the plant"
            )}
            -
          </li>
          <li className="list-disc">
            {" "}
            {t("Allows the concrete to be vibrated again")}
          </li>
          <li className="list-disc">
            {t(
              "Does not contain chloride or any other chemical that may cause corrosion in reinforcement"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("Increases the ultimate strength of concrete")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Modified polysaccharide based high performance setting retarder concrete admixture. It complies with TS EN 934-2 Ç8 (Standard for Setting Retarder Concrete Admixtures) and ASTM C 494 Type A,B,D standards. It is used in structural concretes and mass concretes where controlled setting time extension is required with its setting retarding effect in fresh concrete. It is used as a setting retarder in large volume concrete castings, transportation of concrete over long distances and concrete works in hot weather. It keeps the concrete workable for a long time and helps prevent the formation of cold joints."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix QUICK SCA3</p>
          <p>{t("Alkali Free Setting Accelerator Concrete Admixture")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Increases early strength of concrete")}
          </li>
          <li className="list-disc">
            {t("Shortens the duration of the first and last socket")}
          </li>
          <li className="list-disc">
            {t("Ready to use for spray applications")}
          </li>
          <li className="list-disc">
            {t("Compatible with other concrete admixtures")}
          </li>
          <li className="list-disc">{t("Alkali free")}</li>
          <li className="list-disc">
            {t("Better 28-day strength compared to unaccelerated concrete")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Aluminum sulphate based, ready-to-use setting accelerator. It can be used to accelerate the setting of all cement concretes. Especially used in shotcrete applications. Can be used in dry and wet mixes. Increases the early strength of concrete without compromising its final strength. It can be used in all situations where there is a need for rapid setting, hardening and increasing the strength of concrete. Mainly used in wet mix shotcrete applications where significantly reduced hydration times are required. It is used for rapid application of tunnel lining, ground consolidation, slopes, embankments, surface repairs with shotcrete. It can be used in concrete formulation with low cracking and high strength gain within the first 24 hours. Suitable for use in cold weather."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix HIPA 410 HS-RS</p>
          <p>{t("High Performance Superplasticizer, Setting Accelerator")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polycarboxylic ether based high performance hyper plasticizing concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc">
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Polycarboxylic ether (PC) based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It forms a void-free and smooth-surfaced concrete mass in densely reinforced foundation, wall and column concrete where a fluid concrete is required. It can be used in precast and prefabricated concrete production and pre-stressed concrete applications where high strength is required, as well as in concrete works requiring early demolding. Provides excellent workability when added to ready-mixed concrete. Eliminates the risk of segregation during transportation and placement of concrete. Reduces the need for vibration. Allows the concrete to set in normal time without any retarding effect. Increases the impermeability of concrete by reducing the amount of mixing water and therefore the amount of voids in hardened concrete."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix HIPA 442 HS</p>
          <p>{t("High Performance Hyper Plasticizer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polycarboxylic ether based high performance hyper plasticizing concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc">
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a polycarboxylic ether (PC) based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It forms a void-free and smooth surfaced concrete mass in densely reinforced foundation, wall and column concrete requiring a fluid concrete. It can be used in precast and prefabricated concrete production and pre-stressed concrete applications where high strength is required, as well as in concrete works requiring early demolding. Provides excellent workability when added to ready-mixed concrete. Eliminates the risk of segregation during transportation and placement of concrete. Reduces the need for vibration. Allows the concrete to set in normal time without any retarding effect. Increases the impermeability of concrete by reducing the amount of mixing water and therefore the amount of voids in hardened concrete."
          )}{" "}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix HIPA 440HS</p>
          <p>{t("High Performance, Superplasticizer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polycarboxylic ether based high performance hyper plasticizing concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc">
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Polycarboxylic ether (PC) based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It forms a void-free and smooth-surfaced concrete mass in densely reinforced foundation, wall and column concrete where a fluid concrete is required. It can be used in precast and pre-stressed concrete applications where high strength is required, as well as in concrete works requiring early demolding. Provides excellent workability when added to ready-mixed concrete. Eliminates the risk of segregation during transportation and placement of concrete. Reduces the need for vibration. Allows the concrete to set in normal time without any retarding effect."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix HIPA 430QC</p>
          <p>{t("High Performance Superplasticizer, Setting Accelerator")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polycarboxylic ether based high performance hyper plasticizing concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>

          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc">
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Polycarboxylic ether (PC) based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It forms a void-free and smooth-surfaced concrete mass in densely reinforced foundation, wall and column concrete where a fluid concrete is required. It can be used in precast and prefabricated concrete production and pre-stressed concrete applications where high strength is required, as well as in concrete works requiring early demolding. Provides excellent workability when added to ready-mixed concrete. Eliminates the risk of segregation during transportation and placement of concrete. Reduces the need for vibration. Allows the concrete to set in normal time without any retarding effect. Increases the impermeability of concrete by reducing the amount of mixing water and therefore the amount of voids in hardened concrete."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix HIPA 431QC</p>
          <p>{t("High Performance Superplasticizer, Setting Accelerator")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polycarboxylic ether based high performance hyper plasticizing concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc">
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polycarboxylic ether (PC) based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It forms a void-free and smooth-surfaced concrete mass in densely reinforced foundation, wall and column concrete where a fluid concrete is required. It can be used in precast and prefabricated concrete production and pre-stressed concrete applications where high strength is required, as well as in concrete works requiring early demolding. Provides excellent workability when added to ready-mixed concrete. Eliminates the risk of segregation during transportation and placement of concrete. Reduces the need for vibration. Allows the concrete to set in normal time without any retarding effect. Increases the impermeability of concrete by reducing the amount of mixing water and therefore the amount of voids in hardened concrete."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix NORA 120 QS</p>
          <p>
            {t(
              "Setting Accelerator, Water Reducer, Plasticizer Liquid Concrete Admixture"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Setting accelerator and strength enhancer liquid concrete admixture"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Ensures fast setting and early strength in concrete, plaster and cement injection works"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Used to increase the setting speed of concrete in cold weather conditions"
            )}
          </li>
          <li className="list-disc">
            {t("Prefabricated element can be used from production")}
          </li>
          <li className="list-disc">
            {t(
              "Does not decrease the final strength value of concrete, increases the strength values in the first 24 hours"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Compatible with lignin, naphthalene, melamine sulfonate, polymeric plasticizer additives"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a setting accelerator and strength increasing liquid admixture used in concrete, plaster and cementitious injection works where fast setting and early strength are required. It can be used in concrete, plaster and injection works to be carried out under cold weather conditions, in all situations where fast setting of concrete is required. It is also suitable for use in prefabricated element production. It reduces the need for water, allows fast setting and increase in strength values in the first 24 hours. There is no decrease in the final strength of concrete. When added to concrete, the acceleration effect depends on the cement and some external factors. The type and dosage of the cement, the consistency of the concrete and the temperature and humidity of the application environment are effective on the increase in the setting speed."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix SUPA 200</p>
          <p>{t("High Performance Superplasticizer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Naphthalene sulfonate based high performance super plasticizer concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc">
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Naphthalene sulfonate based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It forms a void-free and smooth-surfaced concrete mass in densely reinforced foundation, wall and column concretes requiring a fluid concrete. It can be used in precast and pre-stressed concrete applications where high strength is required, as well as in concrete works requiring early demolding. Provides excellent workability when added to ready-mixed concrete. Eliminates the risk of segregation during transportation and placement of concrete. Reduces the need for vibration. Allows the concrete to set in normal time without any retarding effect. Increases the impermeability of concrete by reducing the amount of mixing water and therefore the amount of voids in the hardened concrete."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md: w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix SUPA 102</p>
          <p>{t("High Performance Superplasticizer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Lignosulfonate based high performance super plasticizer concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc">
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Lignosulfanate based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It forms a void-free and smooth-surfaced concrete mass in densely reinforced foundation, wall and column concretes requiring a fluid concrete. It can be used in precast and pre-stressed concrete applications where high strength is required, as well as in concrete works requiring early demolding. Provides excellent workability when added to ready-mixed concrete. Eliminates the risk of segregation during transportation and placement of concrete. Reduces the need for vibration. Allows the concrete to set in normal time without any retarding effect."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix SUPA 130</p>
          <p>{t("High Performance Superplasticizer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polycarboxylate based high performance super plasticizing concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc">
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polycarboxylate based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It complies with TS EN 934-2 Ç3 (Highly Water Reducing/Super Plasticizing Concrete Admixture Schedule) and ASTM C 494 Type F (Highly Water Reducing/Super Plasticizing Concrete Admixture Standard) standards. Forms a void-free and smooth-surfaced concrete mass in densely reinforced foundation, wall and column concretes requiring a fluid concrete. It can be used in precast and pre-stressed concrete applications where high strength is required and also in concrete works requiring early demolding."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix SUPA 140HS</p>
          <p>{t("High Performance Superplasticizer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t(
              "Polycarboxylate based high performance super plasticizing concrete admixture"
            )}
          </li>
          <li className="list-disc">{t("Has a high water-reducing effect")}</li>
          <li className="list-disc">
            {t(
              "Used to form concrete mass without voids and with a smooth surface"
            )}
          </li>
          <li className="list-disc">
            {t(
              "In applications where high strength is required, it must be used in concrete design"
            )}
          </li>
          <li className="list-disc" p>
            {t("Eliminates the risk of segregation")}
          </li>
          <li className="list-disc">{t("Reduces the need for vibration")}</li>
          <li className="list-disc">
            {t("Increases the impermeability of concrete")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "Polycarboxylate based, highly water reducing and super plasticizing concrete admixture for high performance concrete. It forms a void-free and smooth-surfaced concrete mass in densely reinforced foundation, wall and column concretes where a fluid concrete is required. It can be used in precast and pre-stressed concrete applications where high strength is required, as well as in concrete works requiring early demolding. Provides excellent workability when added to ready-mixed concrete. Eliminates the risk of segregation during transportation and placement of concrete. Reduces the need for vibration. Allows the concrete to set in normal time without any retarding effect."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenMix SUPA 700</p>
          <p>{t("High Performance Water Reducer, Superplasticizer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("VAM-Maleamide-based superplasticizer raw material")}
          </li>
          <li className="list-disc">
            {t("Improves the performance of superplasticizers")}
          </li>
          <li className="list-disc">
            {t("Can be used to save raw materials")}
          </li>
          <li className="list-disc">
            {t(
              "Can be used in early high-strength precast and pre-stressed concrete"
            )}
          </li>
          <li className="list-disc">
            {t("Can be used in concrete with high or variable clay content")}
          </li>
          <li className="list-disc">
            {t(
              "Unlike lignosulfonates and naphthalene, it is a completely synthetic polymer"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "StenMix® SUPA 700 is an admixture for concrete that provides a high level of water reduction and superplasticization. It is based on a copolymer of VAM and maleamide and acts as a strong ionic dispersant for concrete components. It can be used to improve the performance of lignosulfonate, BNSF and melamine sulfonate based admixtures in accordance with the requirements of TS EN 934-2 Table 3 (High Level Water Reducing/Superplasticizer Standard) and ASTM C 494 Type F (Chemical Admixtures for Concrete - Standard Specifications for Water Reducing, High Level Admixtures)."
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
          <h1 className="text-xl text-[#247781] pt-2">
            {t("Concrete Curing-Admixture-Repair")}
          </h1>
          <p className="text-[#57C5B6]">{t("Concrete Admixtures")}</p>
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

export default ConcreteAdmixture;
