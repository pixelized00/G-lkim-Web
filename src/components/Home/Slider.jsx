import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../assets/Slider1.png";
import Slider2 from "../../assets/Slider2.png";
import Slider3 from "../../assets/Slider3.png";
import Slider4 from "../../assets/Slider4.png";
import { useTranslation } from "react-i18next";

const CardSlider = () => {
  const { t, i18n } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 2400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Set to true for autoplay
    autoplaySpeed: 0,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto mb-10 pb-20 mt-28  w-screen overflow-hidden">
      <h1 className="text-center text-4xl mb-10 font-bold text-[#247781]">
        {t("New Products")}
      </h1>
      <Slider {...settings}>
        <div className="flex items-center justify-center mb-20 slide-card sm:grid grid-cols-1 xs:sm:grid grid-cols-1">
          <div className="rounded-md p-6 md:h-72 h-52 ">
            <img
              src={Slider1}
              alt="Slider1"
              className="h-56 object-cover rounded-md w-[260px] md:w-[294px]  "
            />
            <div className="absolute  w-[260px] -mt-20 md:w-[294px] h-[90px] bg-[#247781] rounded-xl text-center text-white flex justify-center items-center">
              <div>
                <p className="font-bold text-3xl">{t("StenSport SD 601")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-md p-6 md:h-72 h-52 ">
            <img
              src={Slider2}
              alt="Slider2"
              className="h-56 object-cover rounded-md w-[260px] md:w-[294px] "
            />
            <div className="absolute  w-[260px] -mt-20 md:w-[294px] h-[90px] bg-[#247781] rounded-xl text-center text-white flex justify-center items-center">
              <div>
                <p className="font-bold text-3xl">StenCoat 2EP 180</p>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-md p-6 md:h-72 h-52 ">
            <img
              src={Slider3}
              alt="Slider3"
              className="h-56 object-cover rounded-md w-[260px] md:w-[294px] "
            />
            <div className="absolute  w-[260px] -mt-20 md:w-[294px] h-[90px] bg-[#247781] rounded-xl text-center text-white flex justify-center items-center">
              <div>
                <p className="font-bold text-3xl">SN Flux 604-DE</p>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-md p-6 md:h-72 h-52 ">
            <img
              src={Slider4}
              alt="Slider4"
              className="h-56 object-cover rounded-md w-[260px] md:w-[294px] "
            />
            <div className="absolute  w-[260px] -mt-20 md:w-[294px] h-[90px] bg-[#247781] rounded-xl text-center text-white flex justify-center items-center">
              <div>
                <p className="font-bold text-3xl">SN Flux 404</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </Slider>
      <div className="flex justify-center mt-16 ">
        <a href="/hizmetlerimiz">
          <h1 className="border border-[#247781] rounded-md py-2 px-6 text-[#247781] font-bold hover:bg-[#247781] hover:text-white hover:shadow-2xl">
            {t("See All Products")}
          </h1>
        </a>
      </div>
    </div>
  );
};

export default CardSlider;
