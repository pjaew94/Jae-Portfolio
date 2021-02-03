
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import "./Landing.scss";
import { motion } from "framer-motion";
import { ContentLanding } from "./../../components/ContentLanding/ContentLanding";

export const Landing = ({
  textColor,
  setTextColor,
  route,
}) => {



  return (
    <div className="landing">
      <Navbar
        textColor={textColor}
        setTextColor={setTextColor}
        route={route}

      />
      <ContentLanding />
      <Footer
        textColor={textColor}
        route={route}
      />
      <motion.div
        className="background"
        animate={{ top: 0, transition: { duration: 1, delay: 0}}}
        exit={{top: "-100%", transition: { duration: 1, delay: 1}}}
      ></motion.div>
    </div>
  );
};
