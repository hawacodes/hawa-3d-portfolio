import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { setLanguage } from '../redux/slices/LanguageSlice';

import { styles } from '../style';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.language);
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    dispatch(setLanguage(lng));
    setDropdownOpen(false);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src="/logohb.png" alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Havva Beyza ÖZLÜOĞLU
            <span className='sm:block hidden'>| {t('softwareEngineer')}</span>
          </p>
        </Link>
        <div className='flex items-center gap-10 ml-auto absolute right-2'>
          <motion.div
            className='hidden sm:flex flex-row gap-10'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className='list-none flex flex-row gap-10'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{t(link.title)}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className='relative'>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className='bg-primary text-secondary hover:text-white border-none outline-none cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 p-2 rounded'
            >
              {selectedLanguage.toUpperCase()}
            </button>
            {dropdownOpen && (
              <div className={`p-2 black-gradient absolute top-12 right-0 mt-2 min-w-[100px] z-10 rounded-xl`}>
                <motion.div
                  className='flex items-center justify-center'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ul className='list-none flex flex-col gap-2'>
                    <li
                      className='text-secondary hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 p-2 rounded'
                      onClick={() => changeLanguage('en')}
                    >
                      EN
                    </li>
                    <li
                      className='text-secondary hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 p-2 rounded'
                      onClick={() => changeLanguage('tr')}
                    >
                      TR
                    </li>
                    <li
                      className='text-secondary hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 p-2 rounded'
                      onClick={() => changeLanguage('fr')}
                    >
                      FR
                    </li>
                    <li
                      className='text-secondary hover:text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 p-2 rounded'
                      onClick={() => changeLanguage('es')}
                    >
                      ES
                    </li>
                  </ul>
                </motion.div>
              </div>
            )}
          </div>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] cursor-pointer object-contain mr-4' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <motion.div
              className='flex items-center justify-center'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(link.title)}
                  >
                    <a href={`#${link.id}`}>{t(link.title)}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;