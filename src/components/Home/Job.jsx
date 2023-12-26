import React from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import Stenkim from "../../assets/Stenkim.png";
import Spt from "../../assets/Spt.png";
import Gogreen from "../../assets/Gogreen.png";
import { Link } from "react-router-dom";

function Job() {
  const { t, i18n } = useTranslation();

  const icon = (open) =>
    open ? (
      <Minus className="h-5 w-5 text-white" />
    ) : (
      <Plus className="h-5 w-5 text-[#247781]" />
    );

  return (
    <div className=" sm:mt-10 sm:mb-10 md:mt-18 md:mb-18 lg:mt-16 lg:mb-24 w-screen overflow-hidden">
      <div className="text-[#262626] text-center font-medium justify-center items-center mb-6 sm:px-5   ">
        <p className="font-bold text-3xl text-[#247781] ">
          {t("Our Business Partners")}
        </p>
        <div className="flex justify-center items-center">
          <p className="border-2 border-[#247781] w-[300px]  md:w-[600px] opacity-25 mt-6 "></p>
        </div>
        <div className="md:flex justify-between items-center md:mx-72 md:space-x-36 md:mt-12  grid grid-cols-1 mx-24 mb-20 ">
          <div className="w-[180px]">
            <Link to="https://www.stenkim.com.tr/" target="_blank">
              <img
                className="h-auto  mt-10 w-full  object-cover transition-transform duration-300 transform-gpu hover:scale-110"
                src={Stenkim}
                alt=""
              />
            </Link>
          </div>
          <div className="w-[180px]">
            <Link to="https://www.sptme.com/" target="_blank">
              {" "}
              <img
                className="h-auto  mt-10 object-cover transition-transform duration-300 transform-gpu hover:scale-110"
                src={Spt}
                alt=""
              />
            </Link>
          </div>
          <div className="w-[180px]">
            <Link to="https://gogreenfze.com/" target="_blank">
              <img
                className="h-auto w-full mt-10 w-full object-cover transition-transform duration-300 transform-gpu hover:scale-110"
                src={Gogreen}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
