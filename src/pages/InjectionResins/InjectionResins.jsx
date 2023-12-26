import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const InjectionResins = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(5);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare IP-2</p>
          <p>{t("Polyurethane Injection Foam for Waterproofing")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polyurethane waterproofing foam")}</li>
          <li className="list-disc">{t("Activation by water")}</li>
          <li className="list-disc">{t("Low viscosity")}</li>
          <li className="list-disc">{t("Slow gelling")}</li>
          <li className="list-disc">{t("Excellent adhesion to concrete")}</li>
          <li className="list-disc">{t("Not easily flammabl")}</li>
          <li className="list-disc">
            {t(
              "Solvent-free, does not contain volatiles harmful to health (VOC=0)"
            )}
          </li>
          <li className="list-disc">
            {t("Safe application with low exotherm")}
          </li>
        </ul>
        <p className="mt-10  text-[black]">
          {t(
            "One component, solvent-free polyurethane based injection material. It hardens rapidly in contact with water, forms an impermeable foam and stops leakage. It is used to provide waterproofing in underground constructions and tunnel applications. The material does not react until it comes into contact with water. Injected StenCare® IP-2 fills gaps and cracks with resin.  When it comes into contact with water, it forms an impermeable and semi-flexible foam and stops the flow of water."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2IP-1</p>
          <p>{t("Hydrophobic Polyurethane Injection Resin")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Hydrophobic polyurethane floor stabilisation")}
          </li>
          <li className="list-disc">{t("Slow gelling")}</li>
          <li className="list-disc">
            {t("High tensile and compressive strength")}
          </li>
          <li className="list-disc">
            {t(
              "Excellent adhesion to different rocks and substrates and concrete"
            )}
          </li>
          <li className="list-disc">{t("Does not form foam")}</li>
          <li className="list-disc">{t("Not easily flammabl")}</li>
          <li className="list-disc">
            {t(
              "Solvent-free, does not contain volatiles harmful to health (VOC=0)"
            )}
          </li>
          <li className="list-disc">
            {t("Safe application with low exotherm")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, solvent-free polyurethane based injection material with 1:1 mixing ratio. With its slow gelling feature, it is used especially in mining and tunnelling works to reinforce the layers. It is used for ground stabilisation in mining and tunnelling applications and for filling cracks in tunnel lining concretes and diaphragm concretes. When used as an injection material, it ensures that water leaks are stopped. Deeply penetrating StenCare® 2IP-1 fills the gaps and cracks between layers with high strength and adhesion resistant polyurethane resin.  With its slow gelling properties, it allows deep and long-distance injection."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2IP-3</p>
          <p>{t("Hydrophobic Polyurethane Injection Resin")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Hydrophobic polyurethane floor stabilisation")}
          </li>
          <li className="list-disc">{t("Rapid erection")}</li>
          <li className="list-disc">
            {t("High tensile and compressive strength")}
          </li>
          <li className="list-disc">
            {t(
              "Excellent adhesion to different rocks and substrates and concrete"
            )}
          </li>
          <li className="list-disc">{t("Foaming agent in water contact")}</li>
          <li className="list-disc">{t("Not easily flammabl")}</li>
          <li className="list-disc">
            {t(
              "Solvent-free, does not contain volatiles harmful to health (VOC=0)"
            )}
          </li>
          <li className="list-disc">
            {t("Safe application with low exotherm")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, solvent-free polyurethane based injection material with 1:1 mixing ratio. With its fast hardening feature, it is used especially in mining and tunnelling works for reinforcement of layers. It is used for ground stabilisation in mining and tunnelling applications and for filling cracks in tunnel lining concretes and diaphragm concretes. When used as an injection material, it ensures that water leaks are stopped. Deeply penetrating StenCare® 2IP-3 fills the gaps and cracks between the layers with high strength and adhesion resistant polyurethane resin.  In case of encountering groundwater, it foams and fills the possible volume and prevents future water infiltration or accumulation."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2IP-4</p>
          <p>{t("Polyurethane Injection Foam for Waterproofing")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polyurethane waterproofing foam")}</li>
          <li className="list-disc">{t("Activation by water")}</li>
          <li className="list-disc">{t("Low viscosity")}</li>
          <li className="list-disc">{t("Slow gelling")}</li>
          <li className="list-disc">{t("Excellent adhesion to concrete")}</li>
          <li className="list-disc">{t("Not easily flammabl")}</li>
          <li className="list-disc">
            {t(
              "Solvent-free, does not contain volatiles harmful to health (VOC=0)"
            )}
          </li>
          <li className="list-disc">
            {t("Safe application with low exotherm")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a two-component, solvent-free polyurethane based injection material with 1:1 mixing ratio. It hardens rapidly in contact with water, forms an impermeable foam and stops leakage. It is used to provide waterproofing in underground constructions and tunnel applications. Even after the two components are mixed, the reaction does not progress until it comes into contact with water. Deeply penetrating StenCare® 2IP-4 fills the gaps and cracks between the layers with resin. When it comes into contact with water, it forms an impermeable and semi-flexible foam and stops the flow of water. It allows deep and long distance injection."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2IP-5</p>
          <p>{t("Polyurethane Injection Foam for Waterproofing")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc"> {t("Polyurethane waterproofing foam")}</li>

          <li className="list-disc">{t("Activation by water")}</li>

          <li className="list-disc">{t("Low viscosity")}</li>

          <li className="list-disc">{t("Slow gelling")}</li>

          <li className="list-disc">{t("Excellent adhesion to concrete")}</li>

          <li className="list-disc">{t("Not easily flammabl")}</li>

          <li className="list-disc">
            {t(
              "Solvent-free, does not contain volatiles harmful to health (VOC=0)"
            )}
          </li>

          <li className="list-disc">
            {t("Safe application with low exotherm")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Two-component, solvent-free polyurethane based injection material. It hardens rapidly in contact with water, forms an impermeable foam and stops leakage. It is used to provide waterproofing in underground constructions and tunnel applications. Even after the two components are mixed, the reaction does not progress until it comes into contact with water. Deeply penetrating StenCare® 2IP-5 fills the gaps and cracks between the layers with resin. When it comes into contact with water, it forms an impermeable and semi-flexible foam and stops the flow of water. It allows deep and long distance injection."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2IP-6</p>
          <p>{t("Polyurethane Injection Foam for Waterproofing")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polyurethane waterproofing foam")}</li>
          <li className="list-disc">{t("Activation by water")}</li>
          <li className="list-disc">{t("Low viscosity")}</li>
          <li className="list-disc" p>
            {t("Slow gelling")}
          </li>
          <li className="list-disc">{t("Excellent adhesion to concrete")}</li>
          <li className="list-disc">{t("Not easily flammabl")}</li>
          <li className="list-disc">
            {t(
              "Solvent-free, does not contain volatiles harmful to health (VOC=0)"
            )}
          </li>
          <li className="list-disc">
            {t("Safe application with low exotherm")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Two component, solvent-free polyurethane based injection material. It hardens rapidly in contact with water, forms an impermeable foam and stops leakage. It is used to provide waterproofing in underground constructions and tunnel applications. Even after the two components are mixed, the reaction does not progress until it comes into contact with water. Deeply penetrating StenCare® 2IP-6 fills the gaps and cracks between the layers with resin.  When it comes into contact with water, it forms an impermeable and semi-flexible foam and stops the flow of water. It allows deep and long distance injection."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCare 2IP-7</p>
          <p>{t("Polyurethane Injection Foam for Waterproofing")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polyurethane waterproofing foam")}</li>
          <li className="list-disc">{t("Activation by water")}</li>
          <li className="list-disc">
            {t("For the finest cracks, very low viscosity")}
          </li>
          <li className="list-disc">{t("Controllable reaction time")}</li>
          <li className="list-disc">{t("Excellent adhesion to concrete")}</li>
          <li className="list-disc">{t("Not easily flammabl")}</li>
          <li className="list-disc">
            {t(
              "Solvent-free, does not contain volatiles harmful to health (VOC=0)"
            )}
          </li>
          <li className="list-disc">
            {t("Safe application with low exotherm")}
          </li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Two component, solvent-free polyurethane based injection moulding material. It hardens in contact with water, forms an impermeable foam and stops leakage. Thanks to its very low viscosity, it can penetrate even the thinnest cracks. It is used to provide waterproofing in underground constructions and tunnel applications. Even after the two components are mixed, the reaction does not progress until it comes into contact with water. Deeply penetrating StenCare® 2IP-7 fills the gaps and cracks between the layers with resin.  When it comes into contact with water, it forms an impermeable and semi-flexible foam and stops the flow of water. It allows deep and long distance injection."
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
            {t("Injection Resins")}
          </h1>
          <p className="text-[#57C5B6]"> {t("Injection Resins")}</p>
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

export default InjectionResins;
