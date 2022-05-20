import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../constants/images";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center pt-4 pb-4 pr-8 pl-8 bg-bg-navbar backdrop-blur-sm border-2 border-borderC fixed z-10 ">
      <div className="flex justify-start items-center">
        <img
          className="w-[90px] h-[50px] xl:w-[120px] xl:h-[70px]"
          src={images.developerLogo}
          alt="logo"
        />
      </div>
      <ul className="flex-1 flex justify-center items-center maxlg:hidden">
        {["Home", "About", "wrok", "skills", "Contact"].map((item) => (
          <li
            className="group m-0 mr-4 ml-4 cursor-pointer flex-col hover:border-b-2 hover:border-b-blue-500 duration-500"
            key={`link-${item}`}
          >
            <a
              className="text-slate-400 flex-col uppercase font-medium transition-all duration-300 ease-in-out hover:text-blue-500"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="w-9 h-9 rounded-[50%] relative flex justify-center items-center bg-blue-500 minlg:hidden ">
        <HiMenuAlt4
          className="w-3/4 h-3/4 text-white"
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-20 p-4 w-4/5 h-screen flex flex-col items-start  bg-hamburger-bg bg-cover bg-repeat shadow-[0_0_20px_rgba(168, 168, 168, 0.15)]"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX className="w-9 h-9 cursor-pointer text-blue-400 m-1 self-end" onClick={() => setToggle(false)} />
            <ul className="flex-1 flex flex-col gap-5">
            {["Home", "About", "wrok", "skills", "Contact"].map((item) => (
              <li className="m-1  group " key={`link-${item}`}>
                <a
                  className="text-slate-500 uppercase group-hover:border-b-4 group-hover:border-blue-500 duration-500 font-semibold font-serif transition-all ease-in-out group-hover:text-blue-500"
                  href={`#${item}`}
                  onClick={() => setToggle(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
