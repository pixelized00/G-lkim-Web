import { MapPin, PhoneCall, EnvelopeSimple } from "@phosphor-icons/react";

import React from "react";
import Iframe from "react-iframe";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative flex items-top justify-center min-h-screen bg-white sm:items-center overflow-hidden">
      <div className="max-w-8xl sm:px-6 lg:px-8 md:mx-10 mx-2">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="border border-gray-100 py-2 px-4 rounded-xl shadow-xl mb-4 h-auto md:h-80 slide-in-left">
              <h1 className="text-xl sm:text-4xl text-[#247781] font-bold tracking-tight">
                {t("contact us")}
              </h1>
              <p className="text-normal text-md sm:text-md font-medium text-gray-600 mt-2">
                {t(
                  "If you have any questions or suggestions, please contact us via the contact details below."
                )}
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <div className="text-gray-500 text-sm flex items-start justify-center">
                  <MapPin size={40} color="#247781" weight="bold" />
                  <div className="ml-2 font-sans">
                    <p>Bişkek Cad. 145/1</p>
                    <p>Emek, Çankaya/Ankara</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mt-6">
                <div className="text-gray-500 text-sm flex items-start justify-center">
                  <PhoneCall size={40} color="#247781" weight="bold" />
                  <div className="font-sans ml-2">
                    <p>0312 2137271</p>
                    <p>0312 213 7250</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mt-5">
                <div className="text-gray-500 text-sm flex items-center justify-center">
                  <EnvelopeSimple size={40} color="#247781" weight="bold" />
                  <div className="ml-2 font-sans">
                    <p>gulkimyapi@hotmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 py-2 px-4 rounded-xl shadow-xl mb-4">
              <div className="flex justify-center items-center mb-2 mt-4">
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1529.9475203818422!2d32.816484538851185!3d39.92136499288086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f30f05427dd%3A0xa3daa216283b7bc9!2zRW1laywgQmnFn2tlayBDZC4gTm86MTQ1IEQ6MSwgMDY0OTAgw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1684823864644!5m2!1str!2str"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
