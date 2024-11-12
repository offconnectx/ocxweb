"use client"
import Image from "next/image";
import GooglePlayDownloadButton from "./GooglePlayDownloadButton";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const Header = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });


  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div
    ref={sectionRef}
     className="w-full bg-gradient-to-b from-white to-blue-400 dark:from-[#356f91] dark:to-[#244f6b] transition-colors duration-300">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row items-center justify-between mx-auto md:max-w-6xl py-8 md:py-24 gap-y-10 md:gap-x-10"
      >
        <div className="flex flex-col gap-y-6 md:gap-y-10 text-center md:text-left">
          <motion.p 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-mono font-bold dark:text-[#f0f4f8]"
          >
            {`Offline transactions with speed and reliability.`}
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg font-mono text-gray-600 dark:text-[#c4d4e0]"
          >
            {`Our app ensures that your payments remain seamless, even without internet access. Whether you're in remote areas or experiencing network disruptions, you can rely on fast, secure, and efficient transactions.`}
          </motion.p>

          <motion.div variants={itemVariants}>
            <GooglePlayDownloadButton />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center md:justify-start items-center gap-x-2"
          >
            <p className="text-gray-600 text-lg md:text-xl font-mono dark:text-[#c4d4e0]">
              {`Built on `}
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href={"https://lisk.com/"}>
                <Image height={50} width={50} src={"/lisk.png"} alt="Lisk Logo" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          animate={floatingAnimation}
          className="md:w-full w-10/12"
        >
          <Image
            height={500}
            width={500}
            src="/mock_1.png"
            alt="App Mockup"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;