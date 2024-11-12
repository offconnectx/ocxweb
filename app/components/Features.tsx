"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    "Internet Dependency",
    "Service Interruptions",
    "Remote Inaccessibility",
    "Security Risks",
    "High Data Costs",
    "Battery Drain"
  ];

  return (
    <motion.section

      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={sectionRef}
      id="features"
      className="dark:text-white text-gray-600 body-font bg-gradient-to-b from-white to-blue-400 dark:from-[#356f91] dark:to-[#244f6b] transition-colors duration-300"
    >
      <div className="container px-5 py-24 mx-auto">
        <motion.div 
          variants={headerVariants}
          className="text-center mb-20"
        >
          <motion.h1 
            className="sm:text-3xl text-2xl font-medium text-center title-font dark:text-[#c4d4e0] text-gray-900 mb-4"
          >
            Our Features: Revolutionizing Offline Transactions
          </motion.h1>
          <motion.p 
            className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-[#c4d4e0]"
          >
            In today's hyper-connected world,{' '}
            <span className="font-semibold dark:text-[#00b4d8] text-blue-500">
              OffConnectX
            </span>
            {' '}stands out by enabling transactions without the need for internet access. 
            This innovation tackles some of the most frustrating issues users face, such as the ones listed below:
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={featureVariants}
              className="p-2 sm:w-1/2 w-full"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="dark:bg-[#00a0c0] bg-blue-100 rounded flex p-4 h-full items-center cursor-pointer"
              >
                <motion.svg
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="dark:text-[#023e8a] text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </motion.svg>
                <motion.span 
                  className="title-font font-medium dark:text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;