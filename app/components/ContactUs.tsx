"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) {
      console.error('Form reference is not available');
      setSubmitStatus('An error occurred. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
    console.log('Service ID:', serviceId, 'Template ID:', templateId, 'Public Key:', publicKey);


    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not properly configured');
      setSubmitStatus('Configuration error. Please contact support.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.text === 'OK') {
        setSubmitStatus('Message sent successfully!');
        formRef.current.reset();
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again later.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="text-[#4681ee] bg-gradient-to-b from-[#4681ee] to-[#4681ee] dark:from-[#244f6b] dark:to-[#356f91] body-font relative transition-colors duration-300"
    >
      <motion.div 
        className="container px-5 py-24 mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col text-center w-full mb-12"
          variants={itemVariants}
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#f6f7fc] dark:text-[#f0f4f8]">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#f6f7fc] dark:text-[#c4d4e0]">
            {`We'd Love to Hear From You!`}
          </p>
        </motion.div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <motion.div 
              className="p-2 w-1/2"
              variants={itemVariants}
            >
              <div className="relative">
                <label htmlFor="user_name" className="leading-7 text-sm text-[#f6f7fc] dark:text-[#f0f4f8]">
                  Name
                </label>
                <input 
                  type="text" 
                  id="user_name" 
                  name="user_name" 
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </motion.div>

            <motion.div 
              className="p-2 w-1/2"
              variants={itemVariants}
            >
              <div className="relative">
                <label htmlFor="user_email" className="leading-7 text-sm text-[#f6f7fc] dark:text-[#f0f4f8]">
                  Email
                </label>
                <input 
                  type="email" 
                  id="user_email" 
                  name="user_email" 
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </motion.div>

            <motion.div 
              className="p-2 w-full"
              variants={itemVariants}
            >
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-[#f6f7fc] dark:text-[#f0f4f8]">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </motion.div>

            {submitStatus && (
              <motion.div 
                className="p-2 w-full text-center"
                variants={itemVariants}
              >
                <p className={`text-sm ${submitStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                  {submitStatus}
                </p>
              </motion.div>
            )}

            <motion.div 
              className="p-2 w-full"
              variants={itemVariants}
            >
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="flex mx-auto sm:w-fit w-full px-3.5 py-2 bg-[#f6f7fc] hover:bg-[#d6dcdc] dark:bg-[#4fb3ff] dark:hover:bg-[#0088cc] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <span className="px-4 text-[#f6f7fc] dark:text-[#4681ee] font-mono text-md font-semibold leading-8">
                  {isSubmitting ? 'Sending...' : 'Send'}
                </span>
              </motion.button>
            </motion.div>

            <motion.div 
              className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
              variants={itemVariants}
            >
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
