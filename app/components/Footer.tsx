"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const footerVariants = {
    hidden: { 
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "none" 
    },
    visible: { 
      boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
      backdropFilter: "blur(10px)"
    }
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      ref={sectionRef}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-b from-[#f6f7fc] to-[#f6f7fc] dark:from-[#244f6b] dark:to-[#356f91] transition-colors duration-300"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-screen-xl container px-6 py-8 mx-auto flex flex-wrap items-center justify-between sm:flex-row flex-col"
      >
        <motion.a
          href="https://offconnect.io/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          variants={itemVariants}
        >
          <img src="/off.png" className="h-8" alt="Logo" />
          <span className="ml-3 text-xl text-gray-800 dark:text-white">OffConnectX</span>
        </motion.a>

        <motion.p
          className="text-sm text-gray-800 dark:text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
          variants={itemVariants}
        >
          {`© 2024 OffConnectX`}
        </motion.p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <motion.a 
            href="#" 
            className="ml-3 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300" 
            variants={itemVariants}
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/company/offconnectx/" 
            className="ml-3 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300" 
            variants={itemVariants}
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </motion.a>
        </span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;