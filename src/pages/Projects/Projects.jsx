import { Navbar } from "../../components/Navbar/Navbar";
import "./Projects.scss";
import { motion } from "framer-motion";
import { Footer } from "../../components/Footer/Footer";
import { ContentProjects } from './../../components/ContentProjects/ContentProjects';

export const Projects = ({ textColor, setTextColor, route, setRoute }) => {
  return (
    <div className="projects">
      <Navbar
        textColor={textColor}
        setTextColor={setTextColor}
        route={route}
        setRoute={setRoute}
      />
      <ContentProjects />
      <Footer textColor={textColor} />
      <motion.div
        className="background"
        transition={{ duration: 1, delay: 1 }}
        exit={{ top: "100%" }}
      ></motion.div>
    </div>
  );
};
