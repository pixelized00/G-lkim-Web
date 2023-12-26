import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Polycarboxylate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();

  const divArray = [
    <div className="mt-8 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 401</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("50% Polycarboxylic ether")}</li>
          <li className="list-disc">{t("Delayed activation")}</li>
          <li className="list-disc">
            {t(
              "Can be used in combination with other SN Flux® products for perfect consistency protection"
            )}
          </li>
          <li className="list-disc">{t("Can be used in precast concrete")}</li>
          <li className="list-disc">{t("Low air drag")}</li>{" "}
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "A delayed activation type polycarboxylic ether designed for the formation of water reducing additives with enhanced thickening properties. It is suitable for formulation of high ratio water reducers / superplasticisers where superior thickening performance is expected. It has delayed activation feature. Does not plasticise freshly mixed concrete. Over time, the polymer is activated and slump / fluidity increases. It should be used together with other SN Flux® products for high initial fluidity."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 402</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("50% Polycarboxylic ether")}</li>
          <li className="list-disc">{t("Delayed activation")}</li>
          <li className="list-disc">
            {t(
              "Can be used in combination with other SN Flux® products for perfect consistency protection"
            )}
          </li>
          <li className="list-disc">{t("Can be used in precast concrete")}</li>
          <li className="list-disc">{t("Low air drag")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "A delayed activation type polycarboxylic ether designed for the formation of water reducing additives with enhanced thickening properties. It is suitable for formulation of high ratio water reducers / superplasticisers where superior thickening performance is expected. It has delayed activation feature. Does not plasticise freshly mixed concrete. Over time, the polymer is activated and slump / fluidity increases. It should be used together with other SN Flux® products for high initial fluidity."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 403</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("50% Polycarboxylic ether")}</li>
          <li className="list-disc">{t("Delayed activation")}</li>
          <li className="list-disc">
            {t(
              "Can be used in combination with other SN Flux® products for perfect consistency protection"
            )}
          </li>
          <li className="list-disc">{t("Can be used in precast concrete")}</li>
          <li className="list-disc">{t("Low air drag")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "A delayed activation type polycarboxylic ether designed for the formation of water reducing additives with enhanced thickening properties. It is suitable for formulation of high ratio water reducers / superplasticisers where superior thickening performance is expected. It has delayed activation feature. Does not plasticise freshly mixed concrete. Over time, the polymer is activated and slump / fluidity increases. It should be used together with other SN Flux® products for high initial fluidity."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 500</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("48% polycarboxylic ether")}</li>
          <li className="list-disc">
            {t(
              "Suitable for highly water-reducing, superplasticising additive"
            )}
          </li>
          <li className="list-disc">{t("Provides formula stability")}</li>
          <li className="list-disc">
            {t("High efficiency in water reduction")}
          </li>
          <li className="list-disc">{t("Crash blocking")}</li>
          <li className="list-disc">{t("High alkali tolerance")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is a polycarboxylic ether specifically designed for high water reducing additives. It is suitable for formulation of high ratio water reducers / superplasticisers. It has anti-slump properties and high alkali tolerance. It provides high efficiency at low dose to formulate superplasticiser for self-compacting concrete and precast applications with high water reducing and high early strength capability."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN FLux 505</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("48% polycarboxylic ether")}</li>
          <li className="list-disc">
            {t(
              "Highly water reducing for low (w/w) ratio, super suitable for plasticiser additive mixture."
            )}
          </li>
          <li className="list-disc">{t("Provides formula stability")}</li>
          <li className="list-disc">
            {t("High efficiency in water reduction")}
          </li>
          <li className="list-disc">{t("High alkali tolerance")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "It is advanced polycarboxylic ether designed for low water to cement ratio (w/c), especially high water reducing admixtures. It is especially suitable for low w/c ratio concretes, high water reducing/super plasticiser formulation. It has water reducing ability and alkali-resistance. It provides high efficiency at low dose to formulate superplasticiser for precast ready mix applications with self-compacting concrete, high water reducing ability and high early strength."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className="md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 517</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("48% polycarboxylic ether")}</li>
          <li className="list-disc">
            {t("Suitable for high strength anti-collapse feature")}
          </li>
          <li className="list-disc">{t("Provides formula stability")}</li>
          <li className="list-disc">
            {t("High efficiency in water reduction")}
          </li>
          <li className="list-disc">{t("High alkali tolerance")}</li>
          <li className="list-disc">{t("High clay tolerance")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "Especially designed for formulation of strong anti-settling with high water reducing additives. Suitable for formulation of strong slump inhibitors and high proportion water reducers/super plasticisers where higher final strength is required. Suitable for low cost production of pumpable concrete. High clay tolerance. Provides high yield at low dose to formulate superplasticiser with high water reducing ability and high slump inhibitor properties for self-compacting concrete, precast and ready-mix applications."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 518</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("50% Polycarboxylic ether")}</li>
          <li className="list-disc">{t("Highly water reducing")}</li>
          <li className="list-disc">{t("Higher ultimate strength")}</li>
          <li className="list-disc">{t("Can be used in precast concrete")}</li>
          <li className="list-disc">{t("Low air drag")}</li>
          <li className="list-disc">{t("Economic")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "A state-of-the-art polycarboxylic ether specially designed for the formulation of highly water reducing and high viscosity preserving concrete admixtures. It has high water reduction and improved viscosity protection properties, especially with low alkaline cements. It also has high clay tolerance. SN Flux® 604-DE provides high efficiency at low dose to formulate superplasticiser that provides high water reducing ability and high consistency retention in self-compacting concrete, precast ready-mix applications."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 519</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("50% Polycarboxylic ether")}</li>
          <li className="list-disc">{t("Highly water reducing")}</li>
          <li className="list-disc">{t("Higher ultimate strength")}</li>
          <li className="list-disc">{t("Can be used in precast concrete")}</li>
          <li className="list-disc">{t("High clay tolerance")}</li>
          <li className="list-disc">{t("High segration resistance")}</li>
          <li className="list-disc">{t("Low air drag")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "A state-of-the-art polycarboxylic ether specially designed for the formulation of highly water reducing and high viscosity preserving concrete admixtures. It provides high efficiency at low dose to formulate super plasticiser that provides high water reducing ability and high viscosity preserving"
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 530-A</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("50% Polycarboxylic ether")}</li>
          <li className="list-disc">{t("Highly water reducing")}</li>
          <li className="list-disc">{t("Higher ultimate strength")}</li>
          <li className="list-disc">{t("Can be used in precast concrete")}</li>
          <li className="list-disc">{t("Low air drag")}</li>
          <li className="list-disc">{t("Economic")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "A state-of-the-art polycarboxylic ether specially designed for the formulation of highly water reducing and high viscosity preserving concrete admixtures. It has high water reduction and improved viscosity protection properties, especially with low alkaline cements. It also has high clay tolerance. SN Flux® 530-A provides high efficiency at low dose to formulate a super plasticiser that provides high water reducing ability and high consistency retention in self-compacting concrete, precast ready-mix applications."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 600</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("48% polycarboxylic ether")}</li>
          <li className="list-disc">
            {t(
              "Suitable for the production of highly water-reducing, superplasticising additive mixtures."
            )}
          </li>
          <li className="list-disc">{t("Provides formula stability")}</li>
          <li className="list-disc">{t("High crash prevention")}</li>
          <li className="list-disc">{t("High clay tolerance")}</li>
          <li className="list-disc">{t("High alkali tolerance")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "A state-of-the-art polycarboxylic ether specially designed for the formulation of high water reducing and high slump inhibiting concrete admixtures. It is suitable for formulation of high water reducer / superplasticiser. Stenkim's newest product for low cost pumpable concrete formulation. It has high water reduction and slump stress, especially with low alkaline cements. It also has high clay tolerance. It provides high efficiency at low dose to formulate superplasticiser that provides high water reducing capability and high slump inhibiting property in self-compacting concrete, precast ready mix applications."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 604-E</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("50% Polycarboxylic ether")}</li>
          <li className="list-disc">{t("Highly water reducing")}</li>
          <li className="list-disc">{t("Higher ultimate strength")}</li>
          <li className="list-disc">{t("Can be used in precast concrete")}</li>
          <li className="list-disc">{t("Low air drag")}</li>
          <li className="list-disc">{t("Economic")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "A state-of-the-art polycarboxylic ether specially designed for the formulation of highly water reducing and high viscosity preserving concrete admixtures. It has high water reduction and improved viscosity protection properties, especially with low alkaline cements. It also has high clay tolerance. SN Flux® 604-E provides high efficiency at low dose to formulate super plasticiser that provides high water reducing ability and high consistency retention in self-compacting concrete, precast ready-mix applications"
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">SN Flux 604-DE</p>
          <p>{t("Polycarboxylate Copolymer")}</p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("50% Polycarboxylic ether")}</li>
          <li className="list-disc">{t("Highly water reducing")}</li>
          <li className="list-disc">{t("Higher ultimate strength")}</li>
          <li className="list-disc">{t("Can be used in precast concrete")}</li>
          <li className="list-disc">{t("Low air drag")}</li>
          <li className="list-disc">{t("Economic")}</li>
        </ul>
        <p className="mt-10 text-[black]">
          {t(
            "A state-of-the-art polycarboxylic ether specially designed for the formulation of highly water reducing and high viscosity preserving concrete admixtures. It has high water reduction and improved viscosity protection properties, especially with low alkaline cements. It also has high clay tolerance. SN Flux® 604-DE provides high efficiency at low dose to formulate superplasticiser that provides high water reducing ability and high consistency retention in self-compacting concrete, precast ready-mix applications."
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
            {t("Polycarboxylate")}
          </h1>
          <p className="text-[#57C5B6]">{t("Polycarboxylate")}</p>
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

export default Polycarboxylate;
