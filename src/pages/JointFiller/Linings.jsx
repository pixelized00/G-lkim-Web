import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Linings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);

  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst S</p>
          <p>
            {t("One Component, Silane Based, Surface Conditioner and Primer")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Excellent surface conditioner for coatings on concrete, wood, fibreglass etc."
            )}
          </li>
          <li className="list-disc">{t("Does not form a film layer")}</li>
          <li className="list-disc">{t("Strengthens adhesion chemically")} </li>
          <li className="list-disc">
            {t("Very suitable for freshly cut joints")}{" "}
          </li>
          <li className="list-disc">{t("Leaves no trace")} </li>
          <li className="list-disc">
            {t("Short standby time, allows fast operation")}
          </li>
          <li className="list-disc">{t("Transparent")} </li>
          <li className="list-disc">
            {t("Easily applied with brush and roller")}
          </li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "It is a one-component silane based surface conditioner material prepared for all kinds of polymer materials, topcoats, joint sealants and surface coating materials. It is a one-component silane based surface conditioner especially for concrete, asphalt, steel, wood, epoxy, polyurethane etc. surfaces. Unlike film-forming primer materials, it forms a layer with a thickness of several molecules. One end reacts with the applied surface and the other end reacts with the material, chemically strengthening the adhesion. In this way, it ensures adhesion without forming a third layer between the surface and the material. StenAst® S is very suitable for newly cut joints in concrete pavements. It does not spoil the appearance as it leaves no trace when it is carried out of the joint and enables fast working due to the short waiting time for the top coat. "
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst SI</p>
          <p>
            {t("One Component, Silane Based, Surface Conditioner and Primer")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Excellent surface conditioner for coatings on concrete, wood, fibreglass etc."
            )}
          </li>
          <li className="list-disc"> {t("Does not form a film layer")} </li>
          <li className="list-disc">
            {" "}
            {t("Strengthens adhesion chemically")}{" "}
          </li>
          <li className="list-disc">
            {" "}
            {t("Very suitable for freshly cut joints")}{" "}
          </li>
          <li className="list-disc"> {t("Leaves no trace")} </li>
          <li className="list-disc">
            {" "}
            {t("Short standby time, allows fast operation")}
          </li>
          <li className="list-disc">{t("Transparent")} </li>
          <li className="list-disc">
            {t("Easily applied with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a one-component silane based surface conditioner material prepared for all kinds of polymer materials, topcoats, joint sealants and surface coating materials. It is a one-component silane based surface conditioning material prepared especially for concrete, asphalt, steel, wood, epoxy, polyurethane etc. surfaces. Unlike film-forming primer materials, it forms a layer with a thickness of several molecules. One end reacts with the applied surface and the other end reacts with the material, chemically strengthening the adhesion. In this way, it ensures adhesion without forming a third layer between the surface and the material. StenAst® SI is very suitable for newly cut joints in concrete pavements. It does not spoil the appearance as it leaves no trace when it is carried out of the joint and enables fast working due to the short waiting time for the top coat."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst SC</p>
          <p>
            {t(
              "One Component, Silane Based, Coloured Surface Conditioner and Primer"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Excellent surface conditioner for coatings on concrete, wood, fibreglass etc."
            )}
          </li>
          <li className="list-disc">{t("Does not form a film layer")} </li>
          <li className="list-disc">{t("Strengthens adhesion chemically")} </li>
          <li className="list-disc">
            {" "}
            {t("Very suitable for freshly cut joints")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Facilitates the follow-up of primer application with its coloured structure"
            )}
          </li>
          <li className="list-disc">
            {" "}
            {t("Short standby time, allows fast operation")}
          </li>
          <li className="list-disc">{t("Transparent")} </li>
          <li className="list-disc">
            {t("Easily applied with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a one-component silane based surface conditioner material prepared for all kinds of polymer materials, topcoats, joint sealants and surface coating materials. It is a one-component silane based surface conditioning material prepared especially for concrete, asphalt, steel, wood, epoxy, polyurethane etc. surfaces. Unlike film-forming primer materials, it forms a layer with a thickness of several molecules. One end reacts with the applied surface and the other end reacts with the material, chemically strengthening the adhesion. In this way, it ensures adhesion without forming a third layer between the surface and the material. StenAst® SC is very suitable for freshly cut joints in concrete pavements. It does not spoil the appearance as it leaves no trace when it is carried out of the joint and allows fast working due to the short waiting time for the top coat."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenAst SPS</p>
          <p>
            {t(
              "One Component Surface Conditioner for Polysulphide Joint Sealants"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Silane based and single component")}{" "}
          </li>
          <li className="list-disc">
            {t(
              "Excellent surface conditioner for coatings on concrete, wood, fibreglass etc."
            )}
          </li>
          <li className="list-disc">{t("Does not form a film layer")}</li>
          <li className="list-disc"> {t("Strengthens adhesion chemically")}</li>
          <li className="list-disc">
            {" "}
            {t("Very suitable for freshly cut joints")}
          </li>
          <li className="list-disc"> {t("Leaves no trace")} </li>
          <li className="list-disc">
            {" "}
            {t("Short standby time, allows fast operation")}
          </li>
          <li className="list-disc">{t("Transparent")} </li>
          <li className="list-disc">
            {t("Easily applied with brush and roller")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a one-component silane based surface conditioner material prepared for all kinds of polysulphide joint sealants. StenSeal® is a one-component silane-based surface conditioning material prepared for branded polysulphide joint sealants to be applied especially on concrete, asphalt, steel, wood, epoxy, polyurethane etc. surfaces. Unlike film-forming primer materials, it forms a layer with a thickness of a few molecules. One end reacts with the applied surface and the other end reacts with the material, chemically strengthening the adhesion. In this way, it ensures adhesion without creating a third layer between the surface and the material. StenAst® SPS is very suitable for freshly cut joints in concrete pavements. It does not spoil the appearance as it leaves no trace when it is carried out of the joint and enables fast working due to the short waiting time for the top coat."
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
          <h1 className="text-3xl  text-[#247781] pt-2">{t("Joint Filler")}</h1>
          <p className="text-[#57C5B6]">{t("Linings")}</p>
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

export default Linings;
