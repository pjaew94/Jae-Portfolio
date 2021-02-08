import "./Footer.scss";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

export const Footer = ({ textColor, route, bgAnimate, setBgAnimate }) => {

    // Initialize history
  let history = useHistory()
  const delay = ms => new Promise(res => setTimeout(res, ms));

  // Change state to change background based on where we are now and where we're headed
  const bgAnimateThenRoute = async () => {
    if(route === '') {
      setBgAnimate(true);
      await delay(100)
    } else {
      setBgAnimate(false);
      await delay(100)
    }
    history.push('/resume')
  }

  // Media query set up for exit animation for footer
  const isMobile = useMediaQuery({
    query: '(max-width: 812px)'
  })


  return (
    <div className={`footer ${textColor === "white" && "white"}`}>
      {/* Title and line */}
      <div className="left">
        <motion.div
          className="title"
          initial={{ y: 50, opacity: 0 }}
          animate={!isMobile ? { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5} } : { y: 0, opacity: 1, transition: { duration: 1, delay: 0.2} }}
          exit={!isMobile ? { y: 50, opacity: 0, transition: {duration: 1, delay: 0.2} } : { y: 50, opacity: 0, transition: {duration: 1, delay: 0.5} }}
        >
          Front End Developer
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
          className={textColor === "white" && "white-a"}
          href="https://github.com/pjaew94"
          target="_blank"
          initial={{ y: 50, opacity: 0 }}
          animate={!isMobile ? { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5} } : { y: 0, opacity: 1, transition: { duration: 1, delay: 0.3} }}
          exit={!isMobile ? { y: 50, opacity: 0, transition: {duration: 1, delay: 0.5} } : { y: 50, opacity: 0, transition: {duration: 1, delay: 0.2} }}
        >
          Github
        </motion.a>
        <motion.a
          className={textColor === "white" && "white-a"}
          href="https://www.linkedin.com/in/jae-park-webdev/"
          target="_blank"
          initial={{ y: 50, opacity: 0 }}
          animate={!isMobile ? { y: 0, opacity: 1, transition: { duration: 1, delay: 0.6} } : { y: 0, opacity: 1, transition: { duration: 1, delay: 0.4} }}
          exit={!isMobile ? { y: 50, opacity: 0, transition: {duration: 1, delay: 0.6} } : { y: 50, opacity: 0, transition: {duration: 1, delay: 0.3} }}
        >
          LinkedIn
        </motion.a>
        <motion.div
          className="link-container"
          target="_blank"
          rel="noreferrer"
          initial={{ y: 50, opacity: 0 }}
          animate={!isMobile ? { y: 0, opacity: 1, transition: { duration: 1, delay: 0.7} } : { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5} }}
          exit={!isMobile ? { y: 50, opacity: 0, transition: {duration: 1, delay: 0.7} } : { y: 50, opacity: 0, transition: {duration: 1, delay: 0.4} }}
        >
          <button onClick={() => bgAnimateThenRoute()} className={textColor === "white" && "white-a"}>
            Resume
          </button>
        </motion.div>
      </div>
    </div>
  );
};
