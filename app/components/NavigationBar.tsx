"use client"
import { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const wasScrolled = latest > 20;
    if (wasScrolled !== isScrolled) {
      setIsScrolled(wasScrolled);
    }
  });

  const navVariants = {
    hidden: { 
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "none" 
    },
    visible: { 
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      backdropFilter: "blur(10px)"
    },
    dark: {
      backgroundColor: "rgba(36, 79, 107, 0.95)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)"
    }
  };

  const logoVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.nav
      initial="hidden"
      animate={isScrolled ? "visible" : "hidden"}
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'dark:bg-[#244f6b] py-2' 
          : 'dark:bg-transparent py-4'
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
        <motion.a
          href="https://offconnect.io/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <img src="/off.png" className="h-10" alt="Logo" /> 
          <span className={`text-2xl font-semibold ${
            isScrolled 
              ? 'text-gray-800 dark:text-white' 
              : 'text-gray-800 dark:text-white'
          }`}>
            OffConnectX
          </span>
        </motion.a>
        
        <ToggleMenuButton toggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
        
        <motion.div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto 
            ${isMenuOpen ? "bg-white dark:bg-[#244f6b] md:bg-transparent absolute top-full left-0 right-0 shadow-lg md:shadow-none md:relative" : ""}`}
          initial="hidden"
          animate="visible"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
            {["Home", "Features", "Contacts"].map((item, i) => (
              <motion.li
                key={item}
                custom={i}
                variants={menuItemVariants}
              >
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`block py-2 px-3 text-lg font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 
                    ${isScrolled 
                      ? 'text-gray-800 dark:text-white md:hover:text-blue-600 dark:hover:text-blue-300' 
                      : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300'} 
                    transition-all duration-300 relative group`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              </motion.li>
            ))}
            <motion.li
              key="Whitepaper"
              custom={3}
              variants={menuItemVariants}
            >
                <a
              
                href="https://offconnectx.gitbook.io/whitepaper/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block py-2 px-3 text-lg font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 
                  ${isScrolled 
                    ? 'text-gray-800 dark:text-white md:hover:text-blue-600 dark:hover:text-blue-300' 
                    : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300'} 
                  transition-all duration-300 relative group`}
              >
                Whitepaper
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const ToggleMenuButton = ({ toggleMenu, isMenuOpen }: { toggleMenu: VoidFunction, isMenuOpen: boolean }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleMenu}
      type="button"
      className={`inline-flex items-center p-2 w-12 h-12 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 
        ${isMenuOpen
          ? 'bg-gray-100 text-gray-800 dark:bg-[#275a7d] dark:text-white'
          : 'hover:bg-gray-100 text-gray-800 dark:text-white dark:hover:bg-[#275a7d] dark:focus:ring-[#275a7d]'
        }`}
      aria-controls="navbar-default"
      aria-expanded={isMenuOpen}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </motion.button>
  );
};

export default NavigationBar;