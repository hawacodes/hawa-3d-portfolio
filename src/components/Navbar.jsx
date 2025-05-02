import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { setLanguage } from "../redux/slices/LanguageSlice";

import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.language);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng") || "en";
    dispatch(setLanguage(storedLanguage));
    i18n.changeLanguage(storedLanguage);
  }, [dispatch, i18n]);

  const changeLanguage = (lng) => {
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng);
  };

  const LanguageSelector = () => (
    <div className='flex justify-center items-center gap-2'>
      <span
        onClick={() => changeLanguage("en")}
        className={`${
          selectedLanguage === "en" ? "text-white" : "text-secondary"
        } cursor-pointer hover:text-white`}>
        EN
      </span>
      <span className='text-secondary'>|</span>
      <span
        onClick={() => changeLanguage("tr")}
        className={`${
          selectedLanguage === "tr" ? "text-white" : "text-secondary"
        } cursor-pointer hover:text-white`}>
        TR
      </span>
      <span className='text-secondary'>|</span>
      <span
        onClick={() => changeLanguage("fr")}
        className={`${
          selectedLanguage === "fr" ? "text-white" : "text-secondary"
        } cursor-pointer hover:text-white`}>
        FR
      </span>
      <span className='text-secondary'>|</span>
      <span
        onClick={() => changeLanguage("es")}
        className={`${
          selectedLanguage === "es" ? "text-white" : "text-secondary"
        } cursor-pointer hover:text-white`}>
        ES
      </span>
    </div>
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img
            src='/logohb.png'
            alt='logo'
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Havva Beyza ÖZLÜOĞLU
            <span className='sm:block hidden'>| {t("softwareEngineer")}</span>
          </p>
        </Link>
        {/* Desktop Menu */}
        <div className='hidden sm:flex flex-row gap-10'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{t(link.title)}</a>
              </li>
            ))}
          </ul>
          {/* Language Selector for Desktop */}
          <LanguageSelector />
        </div>
        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] cursor-pointer object-contain mr-4'
            onClick={() => setToggle(!toggle)}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => setActive(link.title)}>
                      <a href={`#${link.id}`}>{t(link.title)}</a>
                    </li>
                  ))}
                  {/* Language Selector for Mobile */}
                  <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
                    <LanguageSelector />
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
