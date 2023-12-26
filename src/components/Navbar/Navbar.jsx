import { Link } from "react-router-dom";
import Header from "../../assets/Header.png";
import Logo from "../../assets/Logo.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("i18nextLng") || "tr"
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setSelectedLang(lng);
  };

  useEffect(() => {
    if (selectedLang) {
      i18n.changeLanguage(selectedLang);
    }
  }, [selectedLang]);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    <nav className="relative bg-[#F6F6F6] sticky top-0 z-10 overflow-hidden">
      <div className="bg-[#F6F6F6] h-[98px] flex justify-between space-x-8 md:mr-12 lg:mr-16 xl:mr-20 ">
        <div className="flex justify-start  ">
          <Link to="/">
            {" "}
            <img
              className="mt-4 pb-1  md:w-[230px] md:h-[74px] w-[140px] h-[58px] absolute md:ml-12  ml-4 2xl:w-[220px] 2xl:h-[94px]  2xl:pb-6"
              src={Logo}
              alt=""
            ></img>
            <img
              className="w-[626px] h-[110px] md:w-[340px] xl:w-[540px] 2xl:w-[540px] "
              src={Header}
              alt=""
            ></img>
          </Link>
        </div>

        <div className="  mt-4  text-md text-[#247781] font-sans  font-bold  sm:mt-2 ">
          <button
            className={
              selectedLang === "tr"
                ? "bg-[#247781] hover:bg-[#247781] text-white font-semibold hover:text-white py-1 px-3 border border-[#247781] hover:border-transparent rounded"
                : "bg-transparent hover:bg-[#247781] text-[#247781] font-semibold hover:text-white py-1 px-3 border border-[#247781] hover:border-transparent rounded"
            }
            onClick={() => changeLanguage("tr")}
          >
            TR
          </button>{" "}
          <button
            className={
              selectedLang === "en"
                ? "bg-[#247781] hover:bg-[#247781]  text-white font-semibold hover:text-white py-1 px-3 border border-[#247781] hover:border-transparent rounded"
                : "bg-transparent hover:bg-[#247781] text-[#247781] font-semibold hover:text-white py-1 px-3 border border-[#247781] hover:border-transparent rounded"
            }
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
        </div>

        <div className="md:hidden mr-4 mt-4 ">
          {isOpen ? (
            <FiX onClick={menuToggle} className="w-12 h-12 text-[#247781]" />
          ) : (
            <FiMenu
              onClick={menuToggle}
              className="w-12 h-12"
              color="#247781"
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="text-black flex flex-col text-lg md:hidden fixed top-0 right-0 h-screen w-[80%] bg-[#F3F3F3] z-20 overflow-hidden ">
          <FiX
            onClick={menuToggle}
            className="absolute mt-4 right-4 w-12 h-12 text-[#247781]"
          />

          <div className=" flex flex-col mt-12 ml-4">
            {" "}
            <Link
              to="/"
              className="text-[#247781] cursor-pointer hover:text-[#1A5F7A] font-bold text-xl font-sans"
              onClick={menuToggle}
            >
              {t("home")}
            </Link>
            <Link
              to="/hakkimizda"
              className="text-[#247781] cursor-pointer font-bold text-xl mt-4 hover:text-[#1A5F7A] font-sans "
              onClick={menuToggle}
            >
              {t("about")}
            </Link>
            <Link
              to="/iletisim"
              className="text-[#247781] mt-4  cursor-pointer font-bold text-xl hover:text-[#1A5F7A] font-sans  "
              onClick={menuToggle}
            >
              {t("contact")}
            </Link>
            <Link
              to="/hizmetlerimiz"
              className="text-[#247781] mt-4 cursor-pointer  font-bold text-xl hover:text-[#1A5F7A] font-sans "
              onClick={menuToggle}
            >
              {t("our services")}
            </Link>
          </div>
        </div>
      )}

      <div className="text-black flex justify-end font-bold space-x-20 text-lg -mt-8 mr-20 hidden md:flex mb-4">
        <Link to="/" className="text-[#247781] hover:text-[#1A5F7A] font-sans">
          {t("home")}
        </Link>
        <Link
          to="/hizmetlerimiz"
          className="text-[#247781]  hover:text-[#1A5F7A] font-sans"
        >
          {t("our services")}
        </Link>
        <Link
          to="/hakkimizda"
          className="text-[#247781] hover:text-[#1A5F7A] font-sans"
        >
          {t("about")}
        </Link>

        <Link
          to="/iletisim"
          className="text-[#247781] hover:text-[#1A5F7A] font-sans"
          onClick={openContactModal}
        >
          {t("contact")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
