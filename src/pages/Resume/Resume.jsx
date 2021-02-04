
import "./Resume.scss";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";


export const Resume = ({
  textColor,
  setTextColor,
  route,
  setRoute,
  bgAnimate,
  setBgAnimate
}) => {



  return (
    <div className="resume">
      <Navbar
        textColor={textColor}
        setTextColor={setTextColor}
        route={route}
        setRoute={setRoute}
        bgAnimate={bgAnimate}
        setBgAnimate={setBgAnimate}
      />

      <Footer
        textColor={textColor}
        route={route}
        bgAnimate={bgAnimate}
        setBgAnimate={setBgAnimate}
      />

<motion.div
        className="background"
        transition={{ duration: 1, delay: 1 }}
        exit={bgAnimate && {top: "100%"}}
      ></motion.div>
    </div>
  );
};
