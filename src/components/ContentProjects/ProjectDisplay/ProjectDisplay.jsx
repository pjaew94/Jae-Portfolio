import "./ProjectDisplay.scss";
import { motion } from "framer-motion";

export const ProjectDisplay = ({ list, hoveredProject }) => {
  return (
    <div className="project-display">
      {hoveredProject !== null && (
          <div className="current-project"> 
            <div className={`images ${list[hoveredProject].class}`}>
                <img src={list[hoveredProject].img1} alt='' />
                <img src={list[hoveredProject].img2} alt='' />
            </div>
            <div className='technologies'>
                {list[hoveredProject].technologies.map((tech) => {
                    return <h4>{tech.toUpperCase()}</h4>
                })}
            </div>
          </div>)}
    </div>
  );
};
