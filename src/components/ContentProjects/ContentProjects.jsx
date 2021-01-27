import { useState } from "react";
import { ProjectList } from "./ProjectList/ProjectList";
import { projectList } from "./projectsList";
import { ProjectDisplay } from "./ProjectDisplay/ProjectDisplay";
import './ContentProjects.scss';

export const ContentProjects = () => {
  // Keeps track of which project is hovered.
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="content-projects">
      <ProjectDisplay list={projectList} hoveredProject={hoveredProject} />
      <ProjectList
        list={projectList}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
      />
    </div>
  );
};
