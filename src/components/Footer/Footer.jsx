import { useEffect } from "react";
import "./Footer.scss";
import { motion } from "framer-motion";

export const Footer = ({ textColor }) => {
  return (
    <div className={`footer ${textColor === "white" && "white"}`}>
      {/* Title and line */}
      <div className="left">
        <motion.div
          className="title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          exit={{ y: 50, opacity: 0 }}
        >
          Full Stack Developer
        </motion.div>
        <motion.div
          className="line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 2 }}
          transition={{ duration: 1, delay: 0.4 }}
          exit={{ scaleX: 0 }}
        ></motion.div>
      </div>

      {/* Social Links */}
      <div className="right">
        <motion.a
        className={textColor === 'white' && 'white-a'}
          href="https://github.com/pjaew94"
          target="_blank"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          exit={{ y: 50, opacity: 0 }}
        >
          Github
        </motion.a>
        <motion.a
         className={textColor === 'white' && 'white-a'}
          href="https://www.linkedin.com/in/jae-park-webdev/"
          target="_blank"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          exit={{ y: 50, opacity: 0 }}
        >
          LinkedIn
        </motion.a>
        <span></span>
      </div>
    </div>
  );
};
