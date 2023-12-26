import React, {useEffect, useState} from 'react';
import styles from '../styles/Project.module.css'; 
import projectsData from '../project-info/projectsData';
import importProjectComponents from '../utils/importProjectComponents';

interface ProjectComponentProps {
  message: string;
  handleProjectClick: (value: string) => void;
}

const components = importProjectComponents(require.context('./projects', false, /\.tsx$/));
const componentToProjectMapping = {
  "Leonardo" : "Leonardo DiCaprio Detector", 
  "Pine" : "Pine - A Personalized News App",
  "Dsgn" : "Final Portfolio - Art, Design, and Digital Culture",
  "Temps" : "EDA and Prediction on Global Temperature Data Since 1750",
  "Dashboard" : "Spotify Dashboard (Data)",
  "Dashboard2" : "Spotify Dashboard",
  "Benbook" : "BenBook - The Penn Facebook",
  "Fnar" : "Final Portfolio - Drawing I",
  "Plotify" : "Plotify",
  "TwitterBot" : "Common Onion Twitter Bot",
  "Congress" : "Understanding the Relationship Between Seniority and Congressional Committee", 
  "TwentyFortyEight" : "Modified 2048", 
  "Portfolio" : "kailyl.github.io"
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ message, handleProjectClick }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  useEffect(() => {
    const index = projectsData.findIndex((project) => project.name === message);
    if (index !== -1) {
      setCurrentProjectIndex(index);
    }
  }, [message]);

  const handleClick = () => {
    handleProjectClick(null);
  };

  const goToPreviousProject = () => {
    const newIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
    setCurrentProjectIndex(newIndex);
  };

  const goToNextProject = () => {
    const newIndex = (currentProjectIndex + 1) % projectsData.length;
    setCurrentProjectIndex(newIndex);
  };

  const currentProject = projectsData[currentProjectIndex];
  const previousProject = projectsData[(currentProjectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentProjectIndex + 1) % projectsData.length];

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.headerComponent}>
          <div className={styles.headerLeft}>
            <p className={styles.header}>{currentProject?.name}</p>
            <p className={styles.tools}>• {currentProject?.tools}</p>
            {
              currentProject?.github ? 
                <span className={styles.tools}>• {" "} 
                  <a className={styles.github} href={currentProject?.github} target="_blank" rel="noopener noreferrer">
                    Github Repository
                  </a>
                </span>
              : <div/>
            }
          </div>
          <button onClick={handleClick} className={styles.home}>return</button>
        </div>
        <div className={styles.projectElement}>
          {components.map((Component) => (
            Component.default.name in componentToProjectMapping && 
              componentToProjectMapping[Component.default.name] == currentProject?.name ? 
            <Component.default/> : <div/>
          ))}
        </div>
        <div className={styles.buttonsDiv}>
          <button onClick={goToPreviousProject} className={styles.left}>
            <span className={styles.arrowIcon}>← </span>
            <span className={styles.arrowTextLeft}>{" " + previousProject?.name}</span>
          </button>
          <button onClick={goToNextProject} className={styles.right}>
            <span className={styles.arrowTextRight}>{" " + nextProject?.name}</span>
            <span className={styles.arrowIcon}> →</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProjectComponent;
