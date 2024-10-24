import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { service } from "../functions/pictures";
import { feedback } from "../functions/customerFeedback";
import Card from "../components/Card";
import Project from "../components/Project";
import Choose from "../components/Choose";
import image from "../functions/bgImage";
import Book from "../components/Book";
import { NavLink } from "react-router-dom";
import AirbnbPromoBanner from "./Appointment";

const Home = () => {
  const [Image, setImage] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const initialBg = image[0];
    setImage(initialBg);

    const intervalId = setInterval(changer, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const changer = () => {
    const bg = image[Math.floor(Math.random() * image.length)];
    setImage(bg);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Navbar />
      <AirbnbPromoBanner />
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <motion.div
            className="py-24 z-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center text-white text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-[44px] md:text-[64px] font-bold my-4"
              variants={fadeInUp}
            >
              Plumbing with precision
            </motion.h1>
            <motion.p
              className="text-[20px] md:text-[26px] mb-3"
              variants={fadeInUp}
            >
              The Best Plumbing and Drainlaying Company in Zimbabwe
            </motion.p>
            <motion.div className="flex gap-5" variants={fadeInUp}>
              <NavLink to="/message">
                <motion.button
                  className="p-3 font-bold px-8 border border-blue-500 bg-blue-500 rounded-md hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 active:border-blue-800 duration-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CONTACT US
                </motion.button>
              </NavLink>
              <NavLink to="/result">
                <motion.button
                  className="p-3 font-bold px-8 border-2 border-white bg-blue-transparent rounded-md hover:bg-blue-800 hover:border-blue-800 active:bg-blue-900 active:border-blue-900 duration-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OUR SERVICES
                </motion.button>
              </NavLink>
            </motion.div>
          </motion.div>
          <motion.img
            className="h-[620px] w-full bg-image"
            src={Image && Image}
            alt="four white ceramic urinal sink"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5 }}
          />
          <div className="absolute bg-[#0f2b5b99] top-0 left-0 right-0 bottom-0" />
        </div>
        <div className="absolute top-50 bottom-0 left-0 right-0 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,165.3C672,181,768,235,864,266.7C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.div>
      <motion.div
        className="bg-white shadow md:mx-5 rounded-md py-8 my-5"
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
      >
        <h2 className="text-blue-500 font-bold text-[30px] text-center">
          Plumbing Repairing Service
        </h2>
        <p
          className="text-gray-500 max-w-lg mx-auto text-center py-2"
          style={{ fontSize: "16px" }}
        >
          If you need any help with your plumbing, give us a call at Plumbcon
          Plumbing. We offer variety of plumbing services at Plumbcon.
        </p>
        <motion.div
          className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8"
          variants={stagger}
          initial="hidden"
          animate={controls}
        >
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {service.map((data, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  image={data.image}
                  alt={data.alt}
                  skill={data.skill}
                  summary={data.summary}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="my-8 justify-center items-center bg-white shadow pt-10 pb-5 md:mx-5 rounded-md"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
      >
        <Project />
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
        <Book />
      </motion.div>
      <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
        <Choose />
      </motion.div>
      <motion.div
        className="py-5 bg-white shadow rounded-md my-5 md:mx-5 px-3 md:px-0"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
      >
        <div className="text-center flex flex-col space-y-2 my-6">
          <h2 className="text-zinc-600 font-bold text-[30px]">TESTIMONIALS</h2>
          <p className="font-bold text-[20px] md:text-4xl text-blue-500">
            What clients say
          </p>
          <p className=" max-w-sm md:max-w-lg mx-auto font-tin text-sm text-zinc-600 py-2">
            We place huge value on strong relationships and have seen the
            benefit they bring to our business. Customer feedback is vital in
            helping us to get it right
          </p>
        </div>
        <motion.div
          className="grid md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5 justify-center bg-white p-10 md:mx-0 rounded-md"
          variants={stagger}
          initial="hidden"
          animate={controls}
        >
          {feedback.map((feed, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Testimonial
                image={feed.image}
                alt={feed.alt}
                message={feed.message}
                name={feed.name}
                prof={feed.prof}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
