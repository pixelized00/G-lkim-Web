import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Addtional = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#F3F3F3] w-screen overflow-hidden">
      <div>
        <div className="ml-20">
          <h1 className="pt-10 text-[#247781] font-bold mb-6">
            {t("All Products")}
          </h1>
        </div>
        <div className="bg-white w-[460px] h-20 slide-in-left  ">
          <div className="md:ml-20 ml-8 lg:ml-20 xl:ml-20  ">
            <h1 className="text-2xl  text-[#247781] pt-2">
              {t("Additional Products")}
            </h1>
            <p className="text-[#57C5B6]">
              {t("Additional Products Offferings")}
            </p>
          </div>
        </div>
        <div className="md:flex md:mt-10 md:mb-10 md:space-x-10 justify-center grid grid-cols-1 mx-10  ">
          <div className="text-[#1A5F7A] mt-6 md:mt-2">
            <div className="text-[#1A5F7A] mt-6 md:mt-2 md:w-[440px] md:h-[330px]  sm:h-[390px] bg-[#247781] rounded-xl  text-white justify-start items-center ">
              <div className="mx-6 pt-6 ">
                <div className=" text-center ">
                  <p className="font-bold text-xl">{t("CYPET")}</p>
                  <p className="font-bold text-md">
                    {t("CYPET – Single stage PET Machines")}
                  </p>
                </div>

                <div className="mt-4 ">
                  {t(
                    "SPT supplies CYPET, single-stage PET machines, which redefine PET processing both economically and technically. They retain all the advantages of conventional single-stage technologies while adding two more: much lower investment cost and much lower energy consumption. CYPET offers unmatched flexibility in terms of producing a wide range of sizes of PET containers."
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#1A5F7A] mt-4 md:mt-2">
            <div className="text-[#1A5F7A] mt-6 md:mt-2">
              <div className="text-[#1A5F7A] mt-6 md:mt-2 md:w-[440px] h-[330px] bg-[#247781] rounded-xl  text-white justify-start items-center ">
                <div className="mx-6 pt-6 ">
                  <div className="text-center">
                    <p className="font-bold text-xl">{t("FOOD")}</p>
                    <p className="font-bold text-md">
                      {t("Delicious Cashew Co.")}
                    </p>
                  </div>

                  <div className="mt-4 mb-4">
                    <ul className="mx-6 ml-10">
                      <li className="list-disc">{t("Cashew nuts")}</li>
                      <li className="list-disc">{t("Almonds")}</li>
                      <li className="list-disc">{t("Pistachios")}</li>
                    </ul>
                  </div>
                  <span>
                    {t(
                      "Premium quality cashew nuts, assorted nuts, almonds and pistachios are sourced from Delicious Cashew Company, India and supplied to supermarkets in this region and throughout the GCC."
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#1A5F7A] mt-6 md:mt-2">
            <div className="text-[#1A5F7A] mt-6 md:mt-2 md:w-[440px] h-[330px] bg-[#247781] rounded-xl  text-white justify-start items-center ">
              <div className="mx-6 pt-6 ">
                <div className="text-center ">
                  <p className="font-bold text-xl">{t("TEXTILES")}</p>
                  <p className="font-bold text-md">
                    {t("Micro Cotton Towels")}{" "}
                  </p>
                </div>

                <div>
                  <p className="font-bold mt-6 mb-4 ">{t("Home Linen")}</p>{" "}
                  <span className=" ">
                    {t(
                      "SPT also supplies home linens and MicroCotton towels of varying sizes that are exceptionally soft, super absorbent cotton, quick drying and dyed with eco-friendly dyes."
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        ,
      </div>
    </div>
  );
};

export default Addtional;
