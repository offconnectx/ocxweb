"use client"
import Image from "next/image";
import GooglePlayDownloadButton from "./GooglePlayDownloadButton";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Header = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
    <section 
      ref={sectionRef}
      id="home"
      className="text-gray-600 body-font overflow-hidden bg-gradient-to-b from-[#f6f7fc] to-[#f6f7fc] dark:from-[#244f6b] dark:to-[#356f91] transition-colors duration-300"
    >
      <motion.div
      className="flex flex-col md:flex-row items-center justify-between mx-auto md:max-w-6xl py-8 md:py-24 gap-y-10 md:gap-x-10 pt-32 md:pt-24" 
      initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
         <div className="flex flex-col gap-y-6 md:gap-y-10 text-center md:text-left px-4 md:px-0 lg:mb-16">
        <motion.p
          variants={itemVariants}
          className="text-3xl md:text-5xl font-mono font-bold dark:text-[#f0f4f8] mt-8 md:mt-0" 
        >
          {`Offline transactions with speed and reliability.`}
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
                <Image height={100} width={100} src={"/lisk.png"} alt="Lisk Logo" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          variants={itemVariants}
        >
          <motion.div 
            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last"
            variants={itemVariants}
            animate = {floatingAnimation}

          >
            <motion.div 
              variants={itemVariants}
              
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
            >
              <motion.img
                className="rounded-xl md:w-10/12 w-1/2 object-cover"
                src="/mock_3.png"
                alt="about Us image"
                variants={itemVariants}
                // animate = {floatingAnimation}

              />
            </motion.div>
            <motion.img
              variants={itemVariants}
              // animate = {floatingAnimation}
              className="sm:ml-0 ml-auto md:w-10/12 w-1/2 rounded-xl object-cover"
              src="/mock_4.png"
              alt="about Us image"
            />
          </motion.div>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;