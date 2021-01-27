import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Landing.scss";
import { motion } from "framer-motion";
import { ContentLanding } from './../../components/ContentLanding/ContentLanding';

export const Landing = ({ textColor, setTextColor, route }) => {
  return (
    <div className="landing">
      <Navbar textColor={textColor} setTextColor={setTextColor} route={route} />
        <ContentLanding />
      <Footer textColor={textColor} />
      <motion.div
        className="background"
        transition={{ duration: 1, delay: 1 }}
        exit={{ top: 0 }}
      ></motion.div>
    </div>
  );
};
