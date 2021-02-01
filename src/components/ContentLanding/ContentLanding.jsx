import { useState } from "react";
import { motion } from "framer-motion";
import "./ContentLanding.scss";
import { Link } from "react-router-dom";

export const ContentLanding = () => {
  // Hover state for 'View my work'
  const [viewHover, setViewHover] = useState(false);

  // Hover state for 'get in touch'
  const [contactHover, setContactHover] = useState(false);

  const variants = {
    onLoad: { y: 0, opacity: 1 },
    grayOut: {
      color: "rgb(224, 224, 224)",
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className="content-landing">
      <div className="hider">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={viewHover || contactHover ? "grayOut" : "onLoad"}
          transition={{ duration: 1.2, delay: 0.0 }}
          exit={{ y: -50, opacity: 0 }}
          variants={variants}
        >
          I'm Jae, a front end developer
        </motion.h2>
      </div>
      <div className="hider">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={viewHover || contactHover ? "grayOut" : "onLoad"}
          transition={{ duration: 1.2, delay: 0.2 }}
          exit={{ y: -50, opacity: 0 }}
          variants={variants}
        >
          with great ambition and curiosity.
        </motion.h2>
      </div>
      <div className="hider">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={viewHover || contactHover ? "grayOut" : "onLoad"}
          transition={{ duration: 1.2, delay: 0.4 }}
          exit={{ y: -50, opacity: 0 }}
          variants={variants}
        >
          <Link
            className="link"
            to="/projects"
            onMouseEnter={() => setViewHover(true)}
            onMouseLeave={() => setViewHover(false)}
          >
            View my work
            <motion.span
              animate={viewHover ? { scaleX: 0 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.span>
          </Link>{" "}
          or{" "}
          <motion.a href='mailto: pjaew94@gmail.com' onMouseEnter={() => setContactHover(true)} onMouseLeave={() => setContactHover(false)}>
            get in touch{" "}
            <motion.span
              animate={contactHover ? { scaleX: 0 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.span>
          </motion.a>
        </motion.h2>
      </div>
      <div className="hider">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={viewHover || contactHover ? "grayOut" : "onLoad"}
          transition={{ duration: 1.2, delay: 0.6 }}
          exit={{ y: -50, opacity: 0 }}
          variants={variants}
        >
          to start our journey together.
        </motion.h2>
      </div>

      <motion.div
        className="line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 2 }}
        transition={{ duration: 1, delay: 0.4 }}
        exit={{ scaleX: 0 }}
      ></motion.div>
    </div>
  );
};
