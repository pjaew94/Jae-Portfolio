import "./ProjectList.scss";
import { motion } from "framer-motion";

export const ProjectList = ({ list, hoveredProject, setHoveredProject }) => {
  // Animation variant for project list.
  const variants = {
    grayOut: {
      color: "#585858",
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="project-list">
      {list.map((item, index) => {
        return (
          <div className="hider">
            <motion.div
              className="links"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              variants={variants}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.3 * index },
              }}
              exit={{
                y: -50,
                opacity: 0,
                transition: { duration: 1, delay: 0.3 * index },
              }}
            >
              <motion.a
                className="project-item"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                variants={variants}
                animate={
                  hoveredProject !== index && hoveredProject !== null
                    ? "grayOut"
                    : ""
                }
              >
                <h3>{item.roman}</h3>
                <h1>{item.name}</h1>
              </motion.a>

              <div className="type-and-code">
                <motion.h3
                  rel="noreferrer"
                  variants={variants}
                  animate={
                    hoveredProject !== index && hoveredProject !== null
                      ? "grayOut"
                      : ""
                  }
                >
                  {item.type}
                </motion.h3>
                <motion.a
                  className="view-code"
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  variants={variants}
                  animate={
                    hoveredProject !== index && hoveredProject !== null
                      ? "grayOut"
                      : ""
                  }
                >
                  VIEW CODE
                </motion.a>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
