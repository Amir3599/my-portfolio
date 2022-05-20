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
    <div id="app__header app__flex" className="">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        id="app__header__info"
        className=""
      >
        <div id="app__header-badge" className="">
          <div id="badge-cmp app__flex" className="">
            <span>👋</span>
            <div className="ml-5">
              <p id="p-text" className="">
                Hello, I am
              </p>
              <h1 id="head-text">Amirabbas</h1>
            </div>
          </div>
          <div id="tag-cmp app__flex">
            <p id="p-text" className="">
              React Developer
            </p>
            <p id="p-text" className="">
              Freelancer
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        id="app__header__img"
        className=""
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circlee"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header__circles"
      >
        {[
          images.React,
          images.tailwind,
          images.html,
          images.css,
          images.javascript,
        ].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
