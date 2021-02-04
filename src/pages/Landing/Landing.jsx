
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Landing.scss";
import { motion } from "framer-motion";
import { ContentLanding } from "./../../components/ContentLanding/ContentLanding";

export const Landing = ({
  textColor,
  setTextColor,
  route,
  bgAnimate,
  setBgAnimate
}) => {



  return (
    <div className="landing">
      <Navbar
        textColor={textColor}
        setTextColor={setTextColor}
        route={route}
        bgAnimate={bgAnimate}
        setBgAnimate={setBgAnimate}
      />
      <ContentLanding />
      <Footer
        textColor={textColor}
        route={route}
        bgAnimate={bgAnimate}
        setBgAnimate={setBgAnimate}
      />
      <motion.div
        className="background"
        exit={bgAnimate && {top: 0, transition: { duration: 1, delay: 1}}}
      ></motion.div>
    </div>
  );
};
