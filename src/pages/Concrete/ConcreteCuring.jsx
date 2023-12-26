import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const ConcreteCuring = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage] = useState(6);
  const { t, i18n } = useTranslation();
  const divArray = [
    <div className="mt-8 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCure P</p>
          <p>
            {t("Water Retention Curing Material for Paraffin Based Concrete")}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Paraffin based")}</li>
          <li className="list-disc">
            {t(
              "The most economical method for the protection of fresh concrete"
            )}
          </li>
          <li className="list-disc">
            {t("Prevents water loss in fresh concrete")}
          </li>
          <li className="list-disc">{t("Prevents shrinkage cracks")}</li>
          <li className="list-disc">
            {t("Prevents loss of strength of concrete")}
          </li>
          <li className="list-disc">
            {t(
              "Prevents factors such as wind and extreme heat from damaging the concrete"
            )}
          </li>
          <li className="list-disc">{t("Easy to implement")}</li>
        </ul>

        <p className="mt-10  text-[black]">
          {t(
            "It is a ready-to-use, paraffin-based curing agent that prevents water loss in fresh concrete. It has the properties specified in ASTM C309 Type I Class A and TSE 10966 B-1. Prevents water loss by forming a protective layer on the surface of fresh concrete. It prevents strength losses and shrinkage cracks that may be caused by premature drying. The curing agent makes it unnecessary to take another measure for the same purpose (such as irrigation or laying wet mats, wet sand and tarps). Due to these properties, it is used on all kinds of large concrete surfaces exposed to external influences and especially; airports, runways, aprons and parking areas, concrete transportation roads, bridges, dams and irrigation channels, prestressed beams, concrete slabs and similar places."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCure RS</p>
          <p>
            {t(
              "Polyacrylate Based, Water Retaining Curing Material for Concrete"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Polyacrylate based water retaining concrete curing agent")}
          </li>

          <li className="list-disc">
            {t("Prevents cracks in concrete that may occur during curing")}
          </li>

          <li className="list-disc">
            {" "}
            {t("Prevents dusting on the concrete surface")}
          </li>

          <li className="list-disc">
            {t("Increases the abrasion resistance of concrete")}
          </li>

          <li className="list-disc">
            {t("No color change on the applied surface")}
          </li>

          <li className="list-disc">
            {t(
              "Can be used indoors and especially outdoors where UV resistance is required"
            )}
          </li>

          <li className="list-disc">
            {" "}
            {t("It has water repellent properties")}
          </li>

          <li className="list-disc">
            {t(
              "Increases the resistance of concrete against carbonation and ion permeability"
            )}
          </li>

          <li className="list-disc">
            {t("Can be applied to old concrete surfaces")}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a polyacrylate-based curing material that prevents water loss in all fresh concrete and forms an insulated layer on the concrete surface. It is used after all fresh concrete and concrete surface hardener applications to prevent water loss in the concrete and to ensure the curing of the concrete and to prevent dusting that may occur on the concrete surface. It has the properties specified in ASTM C309 and TSE 10966 class A/1. Prevents water loss by forming a protective layer on the concrete surface after all fresh concrete and concrete surface hardener applications. It prevents strength losses and shrinkage cracks that may be caused by premature drying by allowing the concrete to cure in its normal course. Increases the resistance of concrete against carbonation and ion permeability. Increases concrete strength by impregnating concrete on old concrete surfaces. It is also used to prevent dusting that may occur on the concrete surface with its special chemical structure. StenCure® RS applied surfaces are insulated with a transparent and protective film layer formed after application. Thanks to these features, it can be safely used on all kinds of horizontal and vertical large concrete surfaces exposed to external influences."
          )}
        </p>
      </div>
    </div>,
    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCure RW</p>
          <p>
            {t(
              "Polymer Based, Water Based, Water Retaining Curing Material for Concrete"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polymer based")}</li>
          <li className="list-disc">
            {t(
              "Prevents cracks that may occur during curing by forming a protective layer in fresh concrete"
            )}
          </li>
          <li className="list-disc">
            {t("Reflects sun rays, prevents water loss")}{" "}
          </li>
          <li className="list-disc">{t("Prevents shrinkage cracks")}</li>
          <li className="list-disc">
            {t("Prevents loss of strength of concrete")}
          </li>
          <li className="list-disc">
            {t(
              "Suitable for use in large outdoor concrete areas such as airports, runways, aprons, parking lots, concrete roads, bridges and dams"
            )}
          </li>
          <li className="list-disc">
            {t(
              "All kinds of cement and resin based applications and coatings can be applied on the grounds on which it is applied"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a ready-to-use, polymer-based curing agent that prevents water loss by forming a film in fresh concrete. It has the properties specified in ASTM C309 Type 1 Class A. Public Works Poz. No: 04.613/1-F. It prevents water loss by forming a protective layer on the surface of fresh concrete and reflects the sun rays. Prevents strength losses and shrinkage cracks that may be caused by premature drying. The curing agent sprayed on the concrete surface makes it unnecessary to take any other measures (such as irrigation or laying wet mats, wet sand and tarps) for the same purpose. Thanks to these properties, it can be used on all kinds of large concrete surfaces exposed to external influences and especially on airports, airstrips, aprons and parking areas, concrete access roads, bridges, dams and irrigation channels, prestressed beams, concrete slabs and similar places. All kinds of cement and resin based applications can be made on StenCure® RW treated surfaces after the material is cured."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">StenCure RW WHITE</p>
          <p>
            {t(
              "Water Retaining Polymer Based Pigmented Water Emulsion for Concrete"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">{t("Polymer based")}</li>
          <li className="list-disc">
            {t(
              "Prevents cracks that may occur during curing by forming a protective layer in fresh concrete"
            )}
          </li>
          <li className="list-disc">
            {t(
              "Thanks to its white color, it reflects the sun's rays better, prevents rapid heating of concrete and prevents water loss."
            )}
          </li>
          <li className="list-disc">{t("Prevents shrinkage cracks")}</li>
          <li className="list-disc">
            {t("Prevents loss of strength of concrete")}
          </li>
          <li className="list-disc">
            {t(
              "Suitable for use in large outdoor concrete areas such as airports, runways, aprons, parking lots, concrete roads, bridges and dams"
            )}
          </li>
          <li className="list-disc">
            {t(
              "All kinds of cement and resin based applications and coatings can be applied on the grounds on which it is applied"
            )}
          </li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a ready-to-use, polymer-based curing agent that prevents water loss by forming a film in fresh concrete. It has the properties specified in ASTM C309 Type 2 Class B. It prevents water loss by forming a protective layer on the surface of fresh concrete and thanks to its white color, it reflects the sun rays better and prevents rapid heating of concrete. Prevents strength losses and shrinkage cracks that may be caused by premature drying. The curing agent sprayed on the concrete surface makes it unnecessary to take any other measures (such as irrigation or laying wet mats, wet sand and tarps) for the same purpose."
          )}
        </p>
      </div>
    </div>,

    <div className="mt-16 md:flex">
      <div className=" md:w-[547px] h-[235px] bg-[#247781] rounded-xl text-center  text-white  flex  justify-center items-center">
        <div>
          <p className="font-extrabold text-4xl">Stencure WHITE</p>
          <p>
            {t(
              "Paraffin Based, Water Retaining Pigmeted Curing Material for Concrete"
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] md:ml-24 text-[#1A5F7A] mt-6 md:mt-2">
        <ul className="mx-4">
          <li className="list-disc">
            {t("Paraffin based and white in color")}{" "}
          </li>

          <li className="list-disc">
            {t(
              "Prevents cracks that may occur during curing by forming a protective layer in fresh concrete"
            )}
          </li>

          <li className="list-disc">
            {t("Reflects sun rays, prevents water loss")}{" "}
          </li>

          <li className="list-disc">{t("Prevents shrinkage cracks")}</li>

          <li className="list-disc">
            {t("Prevents loss of strength of concrete")}
          </li>

          <li className="list-disc">
            {t("Suitable for indoor and outdoor applications")}{" "}
          </li>

          <li className="list-disc">{t("Easy to use")}</li>
        </ul>

        <p className="mt-10 text-[black]">
          {t(
            "It is a ready-to-use, paraffin-based curing agent that prevents water loss in fresh concrete. It has the properties specified in ASTM C309 Type 2 Class A and TSE 10966 B-2. It forms a protective layer on the surface of fresh concrete, prevents water loss and reflects sun rays. Prevents strength losses and shrinkage cracks caused by premature drying. The curing agent pulverized on the concrete surface makes it unnecessary to take another measure for the same purpose (such as irrigation or laying wet mats, wet sand and tarps). Due to these properties, it is used on all kinds of large concrete surfaces exposed to external influences and especially; airports, runways, aprons and parking areas, concrete transportation roads, bridges, dams and irrigation channels, prestressed beams, concrete slabs and similar places. It does not adversely affect road and marking paints after being cleaned from the cured surface. Suitable for indoor and outdoor use."
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
            {t("Concrete Curing-Admixture-Repair")}
          </h1>
          <p className="text-[#57C5B6]">{t("Concrete Curing Materials")}</p>
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

export default ConcreteCuring;
