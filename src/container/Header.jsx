import React from "react";
import { motion } from "framer-motion";

import { images } from "../constants/images";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div
      id="app__header app__flex"
      className="relative bg-homebg bg-cover bg-repeat bg-center flex-1 w-full h-full flex-col p-6 2xl:pt-32 max2lg:flex-col maxm:pt-24 maxm:pr-4 maxm:pb-8 flex justify-center items-center "
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        id="app__header__info"
        className="flex-[0.65] flex flex-col 2xl:mt-[5%] justify-start items-start h-full 2xl:w-full 2xl:mr-0 relative"
      >
        <div
          id="app__header-badge"
          className="w-full flex gap-5 justify-end items-start flex-col mt-16 2xl:mt-0"
        >
          <div
            id="badge-cmp app__flex"
            className="pt-4 pb-4 pr-8 pl-8 border 2xl:ml-4 border-white rounded-2xl w-auto shadow-badge flex justify-center items-center"
          >
            <span className="text-[2.5rem] 2xl:text-[4rem]">👋</span>
            <div className="ml-5">
              <p id="p-text" className="">
                Hello, I am
              </p>
              <h1 id="head-text">Amirabbas Koochaki</h1>
            </div>
          </div>
          <div
            id="tag-cmp app__flex"
            className="pt-4 pb-4 pr-8 pl-8 2xl:ml-4 border border-white rounded-2xl w-auto shadow-badge flex-col max2lg:justify-start max2lg:items-start flex justify-center items-center"
          >
            <p id="p-text" className="w-full uppercase text-right">
              React Developer
            </p>
            <p id="p-text" className="w-full uppercase text-right">
              Freelancer
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        id="app__header__img"
        className="flex-1 h-full flex justify-end items-end relative 2xl:top-[-250px]"
      >
        <img
          className="w-full object-contain z-[1]"
          src={images.profile}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          id="overlay_circlee"
          className="absolute left-0 right-0 bottom-0 z-0 w-full h[90%]"
        />
      </motion.div>
      <div className="2xl:flex 2xl:absolute 2xl:bottom-11">
        {[
          images.react,
          images.tailwindcss,
          images.html,
          images.css,
          images.javascript,
          images.git,
          images.typescript,
          images.sass,
        ].map((circle, index) => (
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            id="app__header__circles"
            className="group flex-[0.75] flex flex-col justify-evenly items-start h-full ml-4 mt-8 "
          >
            <div
              id="circle-cmp app__flex"
              className="group-odd:w-32 group-odd:h-32 group-even:w-44
              group-even:h-44 rounded-[50%] bg-slate-100 shadow-badge
              flex justify-center items-center "
              key={`circle-${index}`}
            >
              <img
                className="w-3/5 h-3/5 rounded-full"
                src={circle}
                alt="circle"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Header;
