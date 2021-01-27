import { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { motion } from "framer-motion";

export const Navbar = ({ textColor, setTextColor, route }) => {

  useEffect(() => {
    if(route === '') {
      setTextColor('black');
    } else {
      setTextColor('white');
    }
  }, [route, setTextColor])

  return (
    <div className={`navbar ${textColor === "white" && "white"}`}>

      {/* Logo and Location */}
      <div className="left">
        <motion.div
          
          className="logo nav-animate-1"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: -5, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          JWP
        </motion.div>
        <motion.div
          className="location nav-animate-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          exit={{ y: -50, opacity: 0 }}
        >
          Philadelphia, Pennsylvania
        </motion.div>
        <motion.div
          className="line nav-animate-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 2 }}
          transition={{ duration: 1 }}
          exit={{ scaleX: 0 }}
        ></motion.div>
      </div>

      {/* Links container */}
      <div className="right">
        <motion.div
        className='link-container'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, borderBottom: 1 }}
          transition={{ duration: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <Link to='/' className={`link ${route === '' && 'bio-underline'} ${textColor === 'white' && 'white-link'}`}>
            Bio
          </Link>
        </motion.div>
        <motion.div
        className='link-container'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <Link to='/projects' className={`link ${route === 'projects' && 'projects-underline'} ${textColor === 'white' && 'white-link'}`}>
            Projects
          </Link>
        </motion.div>
        <motion.div
        className='link-container'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          exit={{ y: -50, opacity: 0 }}
        >
          <a href='mailto: pjaew94@gmail.com' className={`link ${textColor === 'white' && 'white-link'}`}>
            Contact
          </a>
        </motion.div>
      </div>
    </div>
  );
};
