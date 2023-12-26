import React from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import { Disclosure } from "@headlessui/react";
import { useTranslation } from "react-i18next";

function SSS() {
  const { t, i18n } = useTranslation();

  const icon = (open) =>
    open ? (
      <Minus className="h-5 w-5 text-white" />
    ) : (
      <Plus className="h-5 w-5 text-[#247781]" />
    );

  return (
    <div className=" sm:mt-10 sm:mb-10 md:mt-20 md:mb-20 lg:mt-20 lg:mb-36 w-screen overflow-hidden">
      <div className="text-[#262626] text-center font-medium justify-center items-center mb-6 sm:px-5   ">
        <p className="font-bold text-3xl text-[#247781]">
          {t("Frequently Asked Questions")}
        </p>
        <p className="mt-4">
          {t(
            "We provide detailed information about Gülkim Construction Chemicals. Here are the answers to the scope,privacy, security and frequently asked questions."
          )}
        </p>
      </div>
      <div className="md:mx-20 mx-4">
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <div className="mb-4 lg:mx-20">
                <Disclosure.Button
                  className={`flex w-full justify-between rounded-lg shadow-2xl  ${
                    open ? "bg-[#247781] text-white" : "bg-white text-[#232323]"
                  } shadow-md px-4 py-2 text-left text-lg font-semibold focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                >
                  <span>
                    {t(
                      "Which construction chemicals do you sell and which brands do you represent?"
                    )}
                  </span>
                  {icon(open)}
                </Disclosure.Button>
                <Disclosure.Panel className="mb-8 bg-white shadow-md px-4 pt-4 pb-2  text-base text-[#565872]">
                  {t(
                    "Our company has a wide range of products and sells various construction chemicals. These products include membranes, adhesives, mortars, polyurethane foams, epoxy Decking, concrete additives and many other products used in waterproofing China. At the same time, we serve as an authorized representative of well-known brands."
                  )}
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              {" "}
              <div className="mb-4 lg:mx-20 lg:mb-8">
                <Disclosure.Button
                  className={`flex w-full justify-between rounded-lg ${
                    open ? "bg-[#247781] text-white" : "bg-white text-[#232323]"
                  } shadow-md px-4 py-2 text-left text-lg font-semibold focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                >
                  <span>
                    {t(
                      "Which sectors are your products used in and which application areas are they aimed at?"
                    )}
                  </span>
                  {icon(open)}
                </Disclosure.Button>
                <Disclosure.Panel className="mb-8  h-auto bg-white shadow-md px-4 pt-4 pb-2 text-base text-[#565872]">
                  {t(
                    "Our products have a wide range of applications. Our construction chemicals used in the construction industry are used in many areas such as waterproofing of buildings, concrete repair and reinforcement, floor coverings, bonding and grouting. It is also preferred in industrial facilities, bridges, dams, pools and other construction projects."
                  )}
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <div className="mb-4 lg:mx-20 lg:mb-8">
                <Disclosure.Button
                  className={`flex w-full justify-between rounded-lg ${
                    open ? "bg-[#247781] text-white" : "bg-white text-[#232323]"
                  } shadow-md px-4 py-2 text-left text-lg font-semibold focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`}
                >
                  <span>
                    {t(
                      "What are the technical characteristics and advantages of your products? What differences do you offer compared to other similar products?"
                    )}
                  </span>
                  {icon(open)}
                </Disclosure.Button>
                <Disclosure.Panel className="mb-8  bg-white shadow-md px-4 pt-4 pb-2 text-base text-[#565872]">
                  {t(
                    "Our products are high quality and performance construction chemicals. It focuses on critical factors such as technical characteristics, durability, adhesion strength, water resistance, weather resistance. The advantages of our products include long-lasting protection, easy applicability, the use of environmentally friendly components and Decertified products."
                  )}
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default SSS;
