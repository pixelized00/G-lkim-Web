import React, { useState } from "react";
import Products1 from "../assets/Products1.png";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleMenu3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleMenu4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleMenu5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleMenu6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleMenu7 = () => {
    setIsOpen7(!isOpen7);
  };
  const toggleMenu8 = () => {
    setIsOpen8(!isOpen8);
  };
  const toggleMenu9 = () => {
    setIsOpen9(!isOpen9);
  };
  const toggleMenu10 = () => {
    setIsOpen10(!isOpen10);
  };
  const toggleMenu11 = () => {
    setIsOpen11(!isOpen11);
  };
  const toggleMenu12 = () => {
    setIsOpen12(!isOpen12);
  };

  return (
    <div className="min-h-full relative">
      <div>
        <div className="relative flex flex-col items-center justify-center ">
          <div className="bg-[#F5F5F5] bg-opacity-75 px-4 md:px-80 h-full ">
            <div className="md:mb-20 md:mt-20 mt-8 ">
              <h1 className="text-[#1A5F7A] font-bold text-2xl xl:text-6xl text-center lg:mt-12 md:mt-40  xl:mt-40  ">
                {t("our services")}
              </h1>
              <p className="mt-8 text-xl pb-6  ">
                {t(
                  "Our company offers a wide range of services as a construction chemicals company specialising in the construction industry. Our wide range of products includes adhesives, sealants, concrete admixtures, waterproofing products and more. Each of our products is manufactured and tested in accordance with quality standards, thus providing our customers with reliable and effective solutions."
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="border-6 border-[#247781] bg-[#247781] h-8 overflow-hidden"></div>
        <div className="">
          <img
            className="absolute object-cover w-screen  h-screen"
            src={Products1}
            alt=""
          />
          <div className="relative bg-[#F5F5F5] bg-opacity-90 pb-8 md:pb-60  pt-8 h-full overflow-hidden   ">
            <h1 className="text-[247781] font-bold text-4xl text-center mt-8 md:mt-20 ">
              {t("Our Products")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mr-12  md:gap-x-36 mt-12  lg:ml-24 2xl:ml-40 md:mr-44 ml-12 ">
              <div className="mb-4">
                <h1
                  onClick={toggleMenu9}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Plastics")}
                </h1>
                {isOpen9 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/plastik">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Plastic Raw Materials")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu}
                  className="text-white font-bold  text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Floor Coating")}
                </h1>
                {isOpen && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/epoksiesaslızeminkaplamamalzemeleri ">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Epoxy Based Floor Coating Materials")}

                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/poliuretanesaslızeminkaplamamalzemeleri">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polyurethane Based Floor Coating Materials")}

                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/sporsahazeminkaplamamalzemeleri">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Sports Field Flooring Materials")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/yuzeyhazırlayıcıastarlar">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Surface Preparation Primers")}

                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>{" "}
                      </Link>
                    </div>{" "}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu10}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Chemicals")}
                </h1>
                {isOpen10 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/kimyasal">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Chemicals")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>

                      <Link to="/kimyasalurunler">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Chemical Products")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>

                      <Link to="/petrolsahasikimyasallari">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Oil field Chemicals")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu1}
                  className="text-white font-bold text-sm md:text-lg md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Joint Filler")}
                </h1>
                {isOpen1 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/poliuretanesaslıderzdolgumacunları">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polyurethane Based Joint Sealants")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/polisulfitesaslıderzdolgumacunları">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polysulphite Based Joint Sealants")}

                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>{" "}
                      </Link>

                      <Link to="/silikonesaslıderzdolgumacunları">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Silicone Based Joint Sealants")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/bitumkauçukesaslıderzdolgumalzemeleri">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Bitumen Rubber Based Joint Sealants")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/epoksiesaslıderzdolgumacunları">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Epoxy Based Joint Fillers")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/astarlar">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Linings")}

                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>{" "}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu12}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Polymers")}
                </h1>
                {isOpen12 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/polimerpolietilen">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polyethylene")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/polipropilen">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polypropylene")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/polivinil ">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polyvinyl – Chloride")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/polistiren">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polystyrene")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/polietilen">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polyethylene-Terephthalate")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/muhendislikplastigi">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Engineering Plastics")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/poliolefin">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polyolefin Elastomers (POE)")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                        {t("Masterbatch & Additivies")}
                      </p>
                      <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                        {t("Off Spec")}
                      </p>
                      <Link to="/kapalısebeke">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Off Grade")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/geridonusturulmus">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Recycled")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu2}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Concrete Curing-Admixture-Repair")}
                </h1>
                {isOpen2 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/betontamirmalzemeleri">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Concrete Repair Materials")}

                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                      <Link to="/betonkatkımalzemeleri">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Concrete Admixtures")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>{" "}
                      </Link>

                      <Link to="/betonkurmalzemeleri">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Concrete Curing Materials")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu7}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Auxiliary Products")}
                </h1>
                {isOpen7 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/yardımcıurunler">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Auxiliary Products")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu3}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Protective Paints and Coatings")}
                </h1>
                {isOpen3 && (
                  <div className="border-2 md:w-[380px]">
                    <div className="ml-8">
                      <Link to="/koruyucuboyalar">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          <span className="flex items-center">
                            {t("Protective Paints")}
                            <ArrowCircleRight
                              size={32}
                              weight="fill"
                              className="ml-2"
                            />
                          </span>
                        </p>
                      </Link>
                      <Link to="/yolçizgiboyaları">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          <span className="flex items-center">
                            {t("Road Marking Paints")}
                            <ArrowCircleRight
                              size={32}
                              weight="fill"
                              className="ml-2"
                            />
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h1
                  onClick={toggleMenu11}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Addtional Products")}
                </h1>
                {isOpen11 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/ekolarak">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Additional Products Offferings")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu6}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Water and Oil Repellent Materials")}
                </h1>
                {isOpen6 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/suveyagiticimalzemeler">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Water and Oil Repellent Materials")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h1
                  onClick={toggleMenu8}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Polycarboxylate")}
                </h1>
                {isOpen8 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/polikarboksilat">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Polycarboxylate")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h1
                  onClick={toggleMenu4}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Injection Resins")}
                </h1>

                {isOpen4 && (
                  <div className="border-2 md:w-[380px] ">
                    <div className="ml-8">
                      <Link to="/enjeksiyonreçineleri">
                        <p className="text-[#247781]  flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          {t("Injection Resins")}
                          <ArrowCircleRight
                            size={32}
                            weight="fill"
                            className=" ml-2"
                          />
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h1
                  onClick={toggleMenu5}
                  className="text-white font-bold text-sm md:text-lg bg-[#247781] w-full md:w-[380px] h-[54px] flex justify-center items-center hover:bg-white hover:text-[#247781] border-4 hover:border-[#247781] "
                >
                  {t("Water Isolation")}
                </h1>
                {isOpen5 && (
                  <div className="border-2 md:w-[380px]">
                    <div className="ml-8">
                      <Link to="/poliüretanesaslıizolasyonmalzemeleri">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          <span className="flex items-center">
                            {t("Polyurethane Based Insulation Materials")}
                            <ArrowCircleRight
                              size={32}
                              weight="fill"
                              className="ml-2"
                            />
                          </span>
                        </p>
                      </Link>
                      <Link to="/katrankatkılıpoliüretanesaslıizolasyonmalzemeleri">
                        <p className="text-[#247781] flex justify-start items-center font-bold text-md cursor-pointer mt-6 mb-4">
                          <span className="flex items-center">
                            {t(
                              "Tar Additive Polyurethane Based Insulation Materials"
                            )}
                            <ArrowCircleRight
                              size={32}
                              weight="fill"
                              className="ml-2"
                            />
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
