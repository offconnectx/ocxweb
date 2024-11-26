"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={sectionRef}
      variants={containerVariants}
      className="py-24 relative bg-gradient-to-b from-[#4681ee] to-[#4681ee] dark:from-[#244f6b] dark:to-[#356f91] transition-colors duration-300"
    >
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          
          <motion.div 
            variants={containerVariants}
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex order-1 lg:order-2"
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <motion.div 
                variants={itemVariants}
                className="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
              >
                <h2 className="dark:text-[#c4d4e0] text-[#f6f7fc] text-xl font-semibold font-mono leading-normal lg:text-start text-center">
                  {`Why OffConnectX?`}
                </h2>
                <h2 className="dark:text-[#f0f4f8] text-[#f6f7fc] text-4xl font-bold font-mono leading-normal lg:text-start text-center">
                  {`Redefining Offline Payments`}
                </h2>
                <p className="dark:text-white text-[#f6f7fc] text-base font-mono leading-relaxed lg:text-start text-center">
                  {`OffConnectX allows users to perform secure financial transactions even
                  when they don't have access to the internet. Whether you're in
                  an area with poor connectivity, traveling, or simply without a
                  signal, the app ensures your payments are processed seamlessly
                  and stored securely until you're back online.`}
                </p>
              </motion.div>
              
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <motion.div 
                  variants={itemVariants}
                  className="flex-col justify-center items-center gap-y-10"
                >
                  <svg className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="52" height="52"><path d="M23.56,23.56c-.29,.29-.68,.44-1.06,.44s-.77-.15-1.06-.44L.44,2.56C-.15,1.97-.15,1.03,.44,.44S1.97-.15,2.56,.44l3.64,3.64c5.86-2.27,12.63-.87,17.11,3.6,.09,.09,.18,.18,.27,.28,.57,.6,.55,1.55-.05,2.12-.29,.28-.66,.42-1.04,.42-.4,0-.79-.16-1.09-.46l-.22-.22c-3.32-3.32-8.18-4.55-12.62-3.35l3.55,3.55c2.34,.04,4.58,.97,6.24,2.63,.59,.58,.59,1.54,0,2.12-.29,.29-.67,.44-1.05,.44l6.24,6.24c.59,.59,.59,1.54,0,2.12Zm-11.56-6.56c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2Zm-6-4.71c-.12,.11-.24,.22-.36,.34-.59,.58-.59,1.53,0,2.12,.29,.29,.68,.44,1.06,.44s.77-.15,1.06-.44c.08-.08,.16-.16,.24-.23,.62-.55,.67-1.5,.12-2.12-.55-.62-1.5-.67-2.12-.12ZM.97,7.41c-.1,.09-.19,.18-.28,.27-.09,.09-.18,.19-.27,.28-.57,.6-.55,1.55,.05,2.12,.29,.28,.66,.42,1.04,.42,.4,0,.79-.16,1.09-.46l.45-.45c.6-.57,.63-1.52,.06-2.12s-1.52-.63-2.12-.06Z"/></svg>

                  <h6 className="dark:text-[#c4d4e0] text-[#f6f7fc] text-base font-mono leading-relaxed">
                    Offline Payments
                  </h6>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex-col justify-center items-center inline-flex"
                >
                  <svg className="mx-auto mb-4" fill="#000000" height="52px" width="52px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.5 229.5">
                    <path d="M214.419,32.12c-0.412-2.959-2.541-5.393-5.419-6.193L116.76,0.275c-1.315-0.366-2.704-0.366-4.02,0L20.5,25.927c-2.878,0.8-5.007,3.233-5.419,6.193c-0.535,3.847-12.74,94.743,18.565,139.961c31.268,45.164,77.395,56.738,79.343,57.209c0.579,0.14,1.169,0.209,1.761,0.209s1.182-0.07,1.761-0.209c1.949-0.471,48.076-12.045,79.343-57.209C227.159,126.864,214.954,35.968,214.419,32.12z M174.233,85.186l-62.917,62.917c-1.464,1.464-3.384,2.197-5.303,2.197s-3.839-0.732-5.303-2.197l-38.901-38.901c-1.407-1.406-2.197-3.314-2.197-5.303s0.791-3.897,2.197-5.303l7.724-7.724c2.929-2.928,7.678-2.929,10.606,0l25.874,25.874l49.89-49.891c1.406-1.407,3.314-2.197,5.303-2.197s3.897,0.79,5.303,2.197l7.724,7.724C177.162,77.508,177.162,82.257,174.233,85.186z"/>
                  </svg>
                  <h6 className="dark:text-[#c4d4e0] text-[#f6f7fc] text-base font-mono leading-relaxed">
                    Secure and Reliable
                  </h6>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex-col justify-center items-center inline-flex"
                >
                  <svg className="mx-auto mb-4" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" width="52px" height="52px" viewBox="0 0 32 32">
                    <path className="stone_een" d="M30,16c0,3.279-2.631,5.939-5.896,5.995l-0.629-0.001C23.22,25.905,19.975,29,16,29c-2.464,0-4.634-1.201-6-3.036V27.5c0,0.276-0.224,0.5-0.5,0.5S9,27.776,9,27.5V24h3.5c0.276,0,0.5,0.224,0.5,0.5S12.776,25,12.5,25h-1.955c1.157,1.798,3.162,3,5.455,3c3.418,0,6.222-2.653,6.475-6.008L9.528,21.974C9.515,21.817,9.5,21.66,9.5,21.5c0-3.584,2.916-6.5,6.5-6.5c2.292,0,4.298,1.202,5.454,3H19.5c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H23v-3.5c0-0.276-0.224-0.5-0.5-0.5S22,15.224,22,15.5v1.528C20.634,15.195,18.462,14,16,14c-4.142,0-7.5,3.358-7.5,7.5c0,0.16,0.01,0.316,0.022,0.473l-0.061,0C4.848,21.697,2,18.684,2,15c0-3.613,2.738-6.585,6.252-6.959C9.127,4.572,12.259,2,16,2c4.418,0,8,3.582,8,8C27.314,10,30,12.686,30,16z"/>
                  </svg>
                  <h6 className="dark:text-[#c4d4e0] text-[#f6f7fc] text-base font-mono leading-relaxed">
                    Automatic Syncing
                  </h6>
                </motion.div>
              </div>
            </div>

            <motion.button 
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="sm:w-fit w-full px-3.5 py-2 bg-[#d6dcdc] hover:bg-[#f6f7fc] dark:bg-[#4fb3ff] dark:hover:bg-[#0088cc] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
            >
              <span className="px-4 text-[#4681ee] dark:text-[#f6f7fc] font-mono text-md font-semibold leading-8">
                Download
              </span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.div 
              className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1"
              variants={itemVariants}
              animate={floatingAnimation}
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
                />
              </motion.div>
              <motion.img
                variants={itemVariants}
                className="sm:ml-0 ml-auto md:w-10/12 w-1/2 rounded-xl object-cover"
                src="/mock_4.png"
                alt="about Us image"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;