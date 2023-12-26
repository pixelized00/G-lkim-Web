import React from "react";
import About1 from "../assets/About1.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="relative w-screen overflow-hidden">
        <img className="w-screen h-[662px]" src={About1} alt="" />
        <div className="w-[90%] md:w-[500px] xl:w-[700px] h-80 mt-40 md:mt-40 xl:mt-40 absolute inset-0 mx-auto md:-mt-40 bg-white flex items-center justify-center">
          <div className="px-6 md:px-10">
            <h2 className="text-[#247781] font-bold text-center text-2xl md:text-4xl">
              {t("about")}
            </h2>
            <p className="text-[#247781] mt-4 text-sm md:text-base">
              {t(
                "We are a construction chemicals company specialising in the building industry. Quality, reliability and sustainability are among the core values of our company. When manufacturing our products, we follow the highest quality standards and adopt environmentally friendly production processes to minimise environmental impacts. Customer satisfaction is a priority for us and we always value customer feedback to improve our expertise and services."
              )}
            </p>
          </div>
        </div>

        <div className="bg-white md:flex lg:px-44 md:space-x-24 md:mt-20 pb-28 grid grid-cols-1 mx-6 ">
          <div className="md:mt-18 mt-10">
            <h1 className="text-[#1A5F7A] font-bold text-5xl pb-6">
              {t("Our Vision")}
            </h1>
            <p>
              {t(
                "We aim to be a leader in the construction chemicals sector. We aim to be a leading brand in the sector by offering innovative, high quality and environmentally friendly solutions to our customers. Our vision is based on keeping customer satisfaction at the highest level and continuously contributing to the development of the sector. With our creative and sustainable solutions, we strive to represent excellence and reliability in construction projects."
              )}
            </p>
          </div>

          <div className="md:mt-18 mt-10">
            <h1 className="text-[#1A5F7A] font-bold text-5xl pb-6 ">
              {t("Our Mission")}
            </h1>
            <p>
              {t(
                "Our mission is to provide innovative and high quality products to our customers by utilising the latest technologies in the field of construction chemicals. With our customer-oriented approach, we strive to understand their needs and exceed their expectations. With our products, we aim to raise quality, durability and safety standards in the construction industry. At the same time, we prioritise sustainability and respect for nature by developing environmentally friendly solutions. With the expertise and passion of our team, we strive to be a reliable business partner to our customers and aim to play a leading role in the industry."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
