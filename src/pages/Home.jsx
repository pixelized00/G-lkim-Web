import React from "react";
import Home1 from "../assets/Home1.jpeg";
import SSS from "../components/Home/SSS";
import Slider from "../components/Home/Slider";
import { useTranslation } from "react-i18next";
import Job from "../components/Home/Job";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="relative w-screen overflow-hidden">
        <img
          className="w-full  md:h-[700px] h-[500px] object-cover"
          src={Home1}
          alt=""
        />
        <div className="mr-0 slide-in-left w-[65%] bg-opacity-90 md:w-[360px] bg-white  h-64 xl:w-[600px] md:h-72 mt-32 md:mt-56 absolute inset-0 mx-auto   flex items-center justify-center">
          <div className="px-6 md:px-8">
            <h2 className="text-[#247781] font-extrabold text-center text-2xl md:text-5xl ">
              <p>
                {t("TO YOUR STRUCTURES")}
                <p className="mt-2"> {t("DURABILITY")}</p>
                <p className="mt-2"> {t("AND ADD STRENGTH")}</p>
              </p>
            </h2>
          </div>
        </div>
      </div>
      <Slider />
      <SSS />
      <Job />
    </div>
  );
};

export default Home;
