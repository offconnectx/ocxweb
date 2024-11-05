'use client';
import { useState } from "react"; // Import the useState hook
import { Link as ScrollLink} from 'react-scroll'; //npm i react-scroll & npm i --save-dev @types/react-scroll

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-[#244f6b] text-xl"> {/* Dark mode background */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://offconnect.io/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/off.png" className="h-8" alt="Logo" /> OffConnectX
        </a>
        <ToggleMenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

const ToggleMenuButton = (props: { toggleMenu: VoidFunction, isMenuOpen: boolean }) => {
  return (
    <button
      onClick={props.toggleMenu} // Attach the toggle function to the onClick event
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#275a7d] dark:focus:ring-[#275a7d]"
      aria-controls="navbar-default"
      aria-expanded={props.isMenuOpen ? "true" : "false"}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
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
    </button>
  );
};

const Menu = (props: { isMenuOpen: boolean }) => {
  return (
    <div
      className={`${
        props.isMenuOpen ? "block" : "hidden"
      } w-full md:block md:w-auto`} // Dynamically change the class based on state
      id="navbar-default"
    >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-[#244f6b] md:dark:bg-[#244f6b] dark:border-[#244f6b]">
        <li>
          <ScrollLink 
            to="/" 
            smooth={true} 
            duration={500} 
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#1b758a] md:p-0 dark:text-white md:dark:hover:text-[#c4d4e0] dark:hover:bg-[#275a7d] dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="features" 
            smooth={true} 
            duration={500} 
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#1b758a] md:p-0 dark:text-white md:dark:hover:text-[#c4d4e0] dark:hover:bg-[#275a7d] dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Features
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#1b758a] md:p-0 dark:text-white md:dark:hover:text-[#c4d4e0] dark:hover:bg-[#275a7d] dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contacts
          </ScrollLink>
        </li>
        <li>
          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#1b758a] md:p-0 dark:text-white md:dark:hover:text-[#c4d4e0] dark:hover:bg-[#275a7d] dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Whitepaper
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
