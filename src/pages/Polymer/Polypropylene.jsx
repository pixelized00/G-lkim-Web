import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Polypropylene = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(10);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("AR564")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className="mt-10  text-[black]">
          {t(
            "AR564 is a polypropylene block copolymer intended for industrial applications. It has a medium melt flow and is formulated with nucleating agent to enhance the stiffness. Injection molding parts made from this resin exhibit good impact, high stiffness and good heat stability."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("AR764")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-black mt-6 md:mt-2  flex  justify-center items-center">
        <p>
          {t(
            "AR764 is a polypropylene block copolymer intended for industrial applications. It has a medium melt flow and formulated with nucleating agent and anti-static. Injection molding parts made from this resin exhibit good impact, high stiffness and good heat stability."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("AV161")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "AV161 is a polypropylene block copolymer formulated with nucleating agent and intended for general-purpose injection molding. Injection molding parts made from this resin exhibit high impact and high stiffness."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("AW564")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "AW564 is a polypropylene block copolymer intended for industrial application. It is formulated with nucleating agent to enhance the stiffness. Injection molding parts made from this resin exhibit good impact, high stiffness and good heat stability."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("AZ564G")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "AZ564G is a polypropylene block copolymer intended for industrial & thin wall applications. It has a high melt flow and is formulated with nucleating agent. Injection molding parts made from this resin exhibit good impact, high stiffness and good heat stability."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("AZ764")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "AZ764 is a polypropylene block copolymer intended for industrial & thin wall applications. It has a high melt flow and is formulated with nucleating agent and anti-static. Injection molding parts made from this resin exhibit good impact, high stiffness and good heat stability"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("FS2011E")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "FS2011E is a polypropylene homopolymer intended for the extrusion of biaxially oriented film. It is easy to process and suitable for metallization. The film made from this resin exhibits excellent transparency, excellent mechanical and barrier properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("FY2011E")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "FY2011E is a polypropylene homopolymer intended for yarn extrusion. Yarn made from this resin exhibits excellent mechanical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("FY3011E")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "FY3011E is a polypropylene homopolymer intended for yarn extrusion characterized by ease of processing and low heat shrinkage. Yarn made from this resin exhibit excellent mechanical property."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("FY4012E")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "FY4012E is a polypropylene homopolymer intended for yarn extrusion. Yarn made from this resin exhibits high strength tape and low shrinkage."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("H1045")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "PP H1045 is a Polypropylene Homopolymer with a Melt Flow Rate (MFR) of 4.5 g/10min. PP H1045 is designed for high extrusion speed lines to make stretch tapes, offering low watercarry-over and low shrinkage. Good balance of strength, shrinkage, splitting tendency. It is compliant to food contact regulations."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("H2245")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "PP H2245 is a Polypropylene Homopolymer with a Melt Flow Rate (MFR) of 24.5 g/10min. PP H2245 is a medium molecular weight distribution with anti-gas fading stabilization system. It has excellent gloss and chining properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("H2250")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "PP H2250 is a Polypropylene Homopolymer with a Melt Flow Rate (MFR) of 25 g/10min. PP H2250 is a medium narrow molecular weight distribution with anti-gas fading stabilization. It is intended for the extrusion of fine fibers with the spunbond technology for non-woven applications. It is also suitable for the extrusion of bulk continuous filament (BCF) for carpet pile and continuous filament (CF) yarns."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("H3030")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24  mt-6 md:mt-2  justify-center items-center">
        <p className=" text-[black]">
          {t(
            "PP H3030 is a Polypropylene Homopolymer with a Melt Flow Rate (MFR) of 3.0 g/10min. TASNEE"
          )}
        </p>
        <p>
          {t(
            "PP H3030 is designed for Bi-axial Oriented Polypropylene (BOPP) film applications, offering excellent"
          )}
        </p>

        <p>
          {t(
            "transparency and gloss, high stiffness and excellent processability. TASNEE PP H3030 is formulated"
          )}
        </p>

        <p>{t("to be used for both general purpose and metallized films.")}</p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("H4120")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "PP H4120 is a Polypropylene Homopolymer with a Melt Flow Rate (MFR) of 12 g/10min. PP H4120 has good gloss, excellent flow and good mechanical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Moplen EP548S")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Moplen EP548S is a nucleated heterophasic copolymer with antistatic agent used for injection moulding applications. It exhibits an outstanding balance of mechanical properties combined with a medium high fluidity."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PP 500P")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "PP 500P is a medium flow, multipurpose grade for extrusion and injection moulding applications."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PP 520L")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24  mt-6 md:mt-2  justify-center items-center">
        <p className=" text-[black]">
          {t(
            "PP 520L is specially developed for tubular water quenched blown film applications with suitable dosage of slip and antiblock additives. Films produced using PP 520L has following features:"
          )}
        </p>
        <ul className="mx-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Consistent processability")}</li>
          <li className="list-disc">{t("Good optical properties")}</li>
          <li className="list-disc">{t("High Melt Strength")}</li>
          <li className="list-disc">
            {t("Excellent runnability on bagging and sealing machines")}
          </li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PP 570P")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "PP 570P is specially developed for producing rigid injection molding articles for general purpose applications. It gives consistent processability, good mechanicals and high gloss in the products."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PP H1030")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "PP H1030 is a Polypropylene Homopolymer with a Melt Flow Rate (MFR) of 3 g/10min."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PP H25FBA")}</p>
        </div>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PP Off Spec")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Polypropylene (PP), also known as polypropene, is a thermoplastic polymer used in a wide variety of applications including packaging and labeling, textiles (e.g., ropes, thermal underwear and carpets) An addition polymer made from the monomer propylene, it is rugged and unusually resistant to many chemical solvents, bases and acids."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PP528K")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="text-[black]">
          {t(
            "PP 528K is formulated with an advanced nucleating additive and was specially developed for in-line and off-line thermoforming applications. PP528K encompasses the following features:"
          )}
        </p>
        <ul className="mx-4">
          <li className="list-disc">{t("High stiffness")}</li>
          <li className="list-disc">{t("Good clarity")}</li>
          <li className="list-disc">{t("Very good dimensional stability")}</li>
          <li className="list-disc">
            {t("Easy processability and faster cycling")}
          </li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PP575P")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "PP 575P is specially developed for producing rigid injection molding articles for general purpose applications. It gives consistent processability and high gloss in the products."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("QR6701K")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Provisional – PP random co-polymer for Injection moulding QR6701K is specially developed for producing injection molded & ISBM articles with very high clarity at low processing temperatures and also has better impact properties than homo PP counterparts. This grade contains advance clarifier & anti-static agent."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Teldene H06ML")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className=" text-[black]">{t("Key Characteristics")}</p>
        <ul className="mx-4">
          <li className="list-disc">
            {t("Good flow properties, High Stiffness, easy processing")}
          </li>
          <li className="list-disc">
            {t(
              "Food contact approval for specific applications (refer to NATPET)"
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">{t("Processing Methods")}</p>
        <ul className="mx-4">
          <li className="list-disc">{t("Injection Molding")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Teldene H08ML")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">{t("Key Characteristics")}</p>
        <ul className="mx-4">
          <li className="list-disc">
            {t("Good flow properties, High Stiffness, easy processing")}
          </li>
          <li className="list-disc">
            {t(
              "Food contact approval for specific applications (refer to NATPET)"
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">{t("Processing Methods")}</p>
        <ul className="mx-4">
          <li className="list-disc">{t("Injection Molding")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Teldene H12ML")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Good flow properties, High Stiffness")}
          </li>
          <li className="list-disc">
            {t(
              "Food contact approval for specific applications (refer to NATPET) Processing Methods"
            )}
          </li>
          <li className="list-disc">{t("Injection Molding")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Teldene H17ML")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="text-[black]">{t("Key Characteristics")}</p>
        <ul className="mx-4">
          <li className="list-disc">{t("Medium-High fluidity")}</li>
          <li className="list-disc">{t("Easy mold filling")}</li>
          <li className="list-disc">{t("Short cycle times")}</li>
          <li className="list-disc">
            {t(
              "Food contact approval for specific applications (refer to NATPET)"
            )}
          </li>
          <li className="list-disc">{t("Short cycle times")}</li>
        </ul>
        <p className="mt-10 text-[black]">{t("Processing Methods")}</p>
        <ul className="mx-4">
          <li className="list-disc">{t("Injection Molding")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Teldene PP H03BPM")}</p>
        </div>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Teldene R40MLT")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className=" text-[black]">{t("Key Characteristics")}</p>
        <ul className="mx-4">
          <li className="list-disc">
            {t("Organoleptically suitable for food contact")}
          </li>
          <li className="list-disc">
            {t("Nucleated random copolymer, contains anti-static agent")}
          </li>
          <li className="list-disc">
            {t("Excellent processability and flow-ability")}
          </li>
          <li className="list-disc">
            {t("Excellent transparency and dimensional stability")}
          </li>
          <li className="list-disc">{t("Good impact resistance")}</li>
          <li className="list-disc">
            {t("Potential for energy and cycle time saving")}
          </li>
          <li className="list-disc">
            {t("Reactor grade, no per-oxide added")}
          </li>
          <li className="list-disc">
            {t(
              "Suitable for defined medical/Pharam-packing applications, subject to NATPET approval"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Food contact approval for specific applications (Refer to NATPET)"
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">{t("Processing Methods")}</p>
        <ul className="mx-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Injection Molding")}</li>
          <li className="list-disc">{t("TWIM")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Teldene-H11BF")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="text-[black]">{t("Key Characteristics")}</p>
        <ul className="mx-4 text-[#1A5F7A]">
          <li className="list-disc">
            {t("Excellent anti-blocking properties")}
          </li>
          <li className="list-disc">{t("High clarity")}</li>
          <li className="list-disc">{t("Good processability")}</li>
          <li className="list-disc">{t("Good stiffness")}</li>
          <li className="list-disc">{t("High slip")}</li>
          <li className="list-disc">
            {t(
              "Food contact approval for specific applications (refer to NATPET)"
            )}
          </li>
        </ul>
        <p className="mt-10 text-[black]">{t("Processing Methods")}</p>
        <ul className="mx-4">
          <li className="list-disc">{t("Blown film")}</li>
          <li className="list-disc">{t("Injection molding")}</li>
        </ul>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Y101")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Y101 is a polypropylene homopolymer intended for injection molding applications. Molded parts made from this resin exhibit high stiffness, good heat resistance and good flow characteristic."
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
    <div className="bg-[#F3F3F3] max-w-screen overflow-hidden">
      <div className="ml-20">
        <h1 className="pt-10 text-[#247781] font-bold mb-6">
          {t("All Products")}
        </h1>
      </div>
      <div className="bg-white w-[440px] h-20 slide-in-left  ">
        <div className="ml-20">
          <h1 className="text-2xl  text-[#247781] pt-2">{t("Polymer")}</h1>
          <p className="text-[#57C5B6]">{t("Polypropylene")}</p>
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

export default Polypropylene;
