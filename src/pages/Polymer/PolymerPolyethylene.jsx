import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const PolymerPolyethylene = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(15);

  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">{t("0725N")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <p className=" text-[black]">
          {t(
            "TASNEE LD 0725N is a Low Density Polyethylene with a Melt Flow Rate of 0.75 g/10min (190°C/2.16kg)."
          )}
        </p>
        <p className=" text-[black]">
          {t(
            "TASNEE LD 0725N is an additive free grade and mainly recommended for shrink film applications. It has a suitable molecular structure to make film with excellent mechanical properties."
          )}
        </p>
        <p className=" text-[black]">
          {t(
            "TASNEE LD 0725N can be easily processed on all types of extruders designed for polyethylene. The melt temperature is suggested to be in the range of 170 – 220°C. Excellent properties of the film are achieved with a blow-up ratio of 2:1 and recommended film thickness range from 25 to 100 μm."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("1050P")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-black mt-6 md:mt-2  justify-center items-center">
        <p className=" text-[black]">
          {t(
            "LLDPE 1050P is a Linear Low Density Polyethlyene Resin 1-Butene co polymer. produced in the solution process. this resin is designed to be used in cast extrustion to produce film for stretch and health & hyginge application."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("1220")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Polyethylene 1220P is a butene Linear Low Density Polyethylene for general blown film extrusion film application."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("118NJ")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "LLDPE 118NJ is a butene linear low density polyethylene resin typically used for general purpose applications. Films produced from this resin are tough with good puncture resistance, high tensile strength and good hottack properties.LLDPE 118NJ is TNPP free."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("1210")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24  mt-6 md:mt-2  justify-center items-center">
        <p className=" text-[black]">
          {t(
            "CEFORTM 1210P is a butene Linear Low Density Polyethylene for general blown extrusion film applications."
          )}
        </p>
        <p className=" text-[black]">
          {t("Main Characteristic and Applications:")}
        </p>
        <ul className="mx-4">
          <li className="list-disc">{t("Better optics and processability")}</li>
          <li className="list-disc">{t("Better color stability")}</li>
          <li className="list-disc">{t("Good sealing performance")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("1220")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Polyethylene 1220P is a butene Linear Low Density Polyethylene for general blown film extrusion film application."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("1221")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24  mt-6 md:mt-2  justify-center items-center">
        <ul className="mx-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Grade : CEFOR 1221P")}</li>
          <li className="list-disc">{t("Co-Monomer : C 4")}</li>
          <li className="list-disc">{t("Melt Index : 2")}</li>
          <li className="list-disc">{t("Density : 0.918")}</li>
          <li className="list-disc">{t("Fabrication : Cast")}</li>
        </ul>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("1925")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "LD 1925AS is mainly recommended for shrink film applications. It contains slip agent and anti- blocking additives and has a suitable molecular structure to produce film with excellent mechanical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("218B")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "218 series resins are Linear Low Density Polyethylene grades suitable for general purpose packaging. They are easy to process giving good tensile properties, impact strength and optical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("218N")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "218 series resins are Linear Low Density Polyethylene grades suitable for general purpose packaging. They are easy to process giving good tensile properties, impact strength and optical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("218W")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "218 series resins are Linear Low Density Polyethylene grades suitable for general purpose packaging. They are easy to process giving good tensile properties, impact strength and optical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("318 B")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "318B is Linear Low Density Polyethylene grade designed to provide easy processability and specially formulated for optimum thermal stability at high processing temperatures used during production of Cast films. Films produced using this resin gives excellent optical properties, good puncture resistance and tear strength."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("4025")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "LDPE 4025 can be easily processed on all types of extruders designed for polyethylene. The melt temperature is suggested to be in the range of 150 – 190°C. Excellent properties of the film are achieved with a blow – up ratio of 2.5:1 and recommended film thickness range from 15 to 40 μm."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("725")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "LD 0725N can be easily processed on all types of extruders designed for polyethylene. The melt temperature is suggested to be in the range of 170 – 220°C. Excellent properties of the film are achieved with a blow-up ratio of 2:1 and recommended film thickness range from 25 to 100 μm."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("B1258")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HD B1258 is a High Density Polyethylene with an excellent combination of stiffness and environmental stress crack resistance (ESCR). It is delivered in pellet form."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("B2555")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "B2555 is a medium molecular weight high density polyethylene resin used for blow molding. Blow molded parts made from this resin exhibit high stiffness, good impact strength and good Environmental Stress-Cracking Resistance (ESCR)."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("B4660")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Sepchem 2 MFI is designed to offer a good balance of optical and mechanical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("B5429")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HDPE B5429 is medium molecular weight high density polyethylene copolymer. It is typically used for blow moulding bottles of small sizes. SABIC® HDPE B5429 offers very good combination of toughness, stress cracking resistance (ESCR), load bearing strength and processability characteristics."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("F00952")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "F00952 is a high molecular weight, high density polyethylene copolymer which has a broad molecular weight distribution. The design of the product, molecular architecture and density, gives it a unique combination of easy extrusion and high melt strength with strong physical properties which makes it suitable for producing thin films with excellent strength and rigidity."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("F01552")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HDPE F01552 is a medium molecular weight high density polyethylene specifically designed for blown film extrusion. It has a broad molecular weight with excellent extrudability and draw down characteristics. The material contains anti oxidant ."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("F0455")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HD F0455 is a High Density Polyethylene resin which possesses an outstanding combination of stiffness and impact performance. This grade can be processed on blown film lines at high output rates with excellent bubble stability, very low gel levels and homogeneous appearance"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("F0554")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "F0554 is a high molecular weight high density polyethylene resin designed for blown film applications. This resin has broad molecular weight distribution that makes it easier to process. Films made from this resin exhibit high stiffness, excellent impact and toughness characteristics."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("FS150A")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "FS150A are linear low density polyethylene resin designed for blown film applications. Films made from these resins exhibit excellent transparency, good impact and toughness properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("FS153S")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "FS153S are linear low density polyethylene resin designed for blown film applications. Films made from these resins exhibit excellent transparency, good impact and toughness properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("FS253S")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "FS253S is a linear low density polyethylene resin designed for blown film applications. This resin has a relatively high MFR that makes it an easy processing material. Films made from this resin exhibits high transparency, good toughness and good extrusion characteristics."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("FS350A")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "FS350A is a linear low density polyethylene resin intended for cast film applications. This resin has good flow characteristics for easy processing. Films made from this resin exhibit excellent transparency, and good toughness properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("HE3490-LS")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "BorSafe HE3490-LS is a black, bimodal, high density polyethylene classified as a MRS 10.0 material (PE100) produced by the advanced Borstar technology. Well dispersed carbon black gives outstanding UV resistance. Long term stability is ensured by an optimised stabilisation system."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("HP0322N")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HP0322N is Low Density Polyethylene grade suitable for producing heavy-duty films and does not contain slip and antiblock additives. It gives outstanding toughness and optical properties in the film."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("HP0323N")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HP0323N is Low Density Polyethylene grade suitable for producing heavy-duty films and does not contain slip and antiblock additives. It gives outstanding toughness and optical properties in the film."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("HP0722N")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HP0722N is Low Density Polyethylene grade suitable for producing medium duty films and contains no slip and antiblock additives. It gives good toughness and optical properties in the film."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("HP2022J")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HP2022 series resins are Low Density Polyethylene grades suitable for general purpose packaging. They exhibit better draw down, good opticals and mechanical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("HP2023J")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "SABIC® HP2023 series resins are Low Density Polyethylene grades suitable for general-purpose packaging. They exhibit better draw down, good optical and mechanical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("HP4023W")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HP4023W is Low Density Polyethylene grade suitable for producing general-purpose films and contains slip and antiblock additives. It gives excellent processability and optical properties with good mechanical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("M200024")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "LLDPE M200024 is a linear low density polyethylene copolymer injection moulding grade with a narrow molecular weight distribution. It has been typically designed to have good low temperature toughness, stress crack resistance (ESCR) and gloss."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("M200056")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "M200056 is a High Density Polyethylene grade with narrow molecular weight distribution suitable for injection molding applications. It has been designed to give good flow properties, low warp age with good dimensional stability and high gloss."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("M500026")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "M500026 is Linear Low Density Polyethylene grade with narrow molecular weight distribution suitable for injection molding applications. It has been designed to give excellent flow properties with better low temperature toughness, stress crack resistance and gloss."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("M80064")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "HDPE M80064 is a high density polyethylene injection moulding grade with a narrow molecular weight distribution. It is intended for use in injection moulding applications where rigidity, toughness and warp resistance are required. HDPE M80064 is available with UV stabilizer as HDPE M80064S."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("M8060")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "M8060 is a high density polyethylene resin used for injection molding. It has good flow characteristics that make it easier to process. Injection molding parts made from this resin exhibit high modulus and low webpage."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("MDPE")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Medium-density polyethylene (MDPE) is a type of polyethylene defined by a density range of 0.926–0.940 g/cm3. It is less dense than HDPE, which is more common. … MDPE is typically used in gas pipes and fittings, sacks, shrink film, packaging film, carrier bags, and screw closures."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("mLLDPE")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Metallocene Linear Low Density Polyethylene (mLLDPE) refers to tougher LLDPE type polymer with a density between about 0.915 and 0.940 g/cm3, made using metallocene catalysts. Medium Density Polyethylene (MDPE) refers to polymer with a density between 0.930 and 0.940 g/cm3."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("NPP Black")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "NPP Black is a High Density Polyethylene, black colored resin. It has high melt viscosity, it is an appropriate resin for extrusion of non pressure pipes."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("OFF SPEC MFI 2")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Sepchem 2 MFI is designed to offer a good balance of optical and mechanical properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("P6006")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "P6006 is black compound high density (class MRS 10 – PE 100) Polyethylene with bimodal distribution of molecular mass. It is specifically designed for pressure Pipe applications. It provides excellent stress crack resistance properties (ESCR) combined with very good long term hydrostatic strength."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PE 100 Black")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "100 Black is a High Density Polyethylene, black colored resin. The product is classiﬁed as PE 100 and provides excellent environmental stress crack resistance properties (ESCR) combined with very good long term hydrostatic strength. It has very high impact and stiffness properties."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PE 100 Blue")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "100 Blue is a High Density Polyethylene, blue colored resin. The product is classified as PE 100 and provides excellent environmental stress crack resistance properties (ESCR) combined with very good long term hydrostatic strength. It has very high impact strength resistance and excellent processability."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("PE 100 Orange")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "100 Orange is a High Density Polyethylene, orange colored resin. The product is classified as PE 100 and provides excellent environmental stress crack resistance properties (ESCR) combined with very good long term hydrostatic strength. It has very high impact strength resistance and excellent"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("Polythylene")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "Polyethylene (PE) is a thermoplastic polymer with variable crystalline structure and an extremely large range of applications depending on the particular type. It is one of the most widely produced plastics in the world."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("R50035")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "R50035 are linear low density polyethylene grade with balanced density and viscosity designed to provide excellent stress cracking resistance, good mechanical properties with high rigidity, toughness, and low warpage. R50035 : Non-UV stabilized grade in pellet form"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("R50035E")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2  justify-center items-center">
        <p className="mt-10 text-[black]">
          {t(
            "LLDPE R50035E is a LLDPE copolymer that is designed to provide excellent stress crack resistance, excellent mechanical properties with high rigidity, toughness, gloss and very low warpage. The resin contains UV stabilizer. It is recommended that LLDPE R50035E is grinded before use in rotational moulding applications."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl"> {t("TR 144")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 mt-6 md:mt-2  justify-center items-center">
        <p className="">
          {t(
            "This high molecular weight, hexene copolymer is tailored for blown film applications that require:"
          )}
        </p>
        <ul className="mx-4 text-[#1A5F7A]">
          <li className="list-disc">{t("Toughness and durability")}</li>
          <li className="list-disc">{t("Good processability")}</li>
          <li className="list-disc">
            {t("Good blending characteristics with HDPE HMW resins")}
          </li>
        </ul>
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
      <div className="bg-white w-[440px] h-20 slide-in-left  ">
        <div className="ml-20">
          <h1 className="text-2xl  text-[#247781] pt-2">{t("Polymer")}</h1>
          <p className="text-[#57C5B6]">{t("Polyethylene")}</p>
        </div>{" "}
      </div>

      <div className="md:px-20 px-4 lg:px-28">
        {currentDivs.map((div, index) => (
          <div key={index}>
            {div} <div className="border-2 border-gray-200 mt-6"></div>
          </div>
        ))}

        <div className="flex justify-center items-center mt-20 pb-20 ">
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

export default PolymerPolyethylene;
