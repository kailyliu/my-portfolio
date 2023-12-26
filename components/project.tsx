import React, {useEffect, useState} from 'react';
import styles from '../styles/Project.module.css'; 
import projectsData from '../project-info/projectsData';

import TwentyFortyEight from './projects/2048';
import Benbook from './projects/benbook';
import Congress from './projects/congress';
import Dashboard from './projects/dashboard';
import Dashboard2 from './projects/dashboard2';
import Dsgn from './projects/dsgn';
import Fnar from './projects/fnar';
import Leonardo from './projects/leonardo';
import Pine from './projects/pine';
import Plotify from './projects/plotify';
import Portfolio from './projects/portfolio';
import Temps from './projects/temps';
import TwitterBot from './projects/twitterbot';

interface ProjectComponentProps {
  message: string;
  handleProjectClick: (value: string) => void;
}

const components = {
  TwentyFortyEight,
  Benbook,
  Congress,
  Dashboard,
  Dashboard2,
  Dsgn,
  Fnar,
  Leonardo,
  Pine,
  Plotify,
  Portfolio,
  Temps,
  TwitterBot,
};

const componentToProjectMapping = {
  "Leonardo DiCaprio Detector" : Leonardo, 
  "Pine - A Personalized News App" : Pine,
  "Final Portfolio - Art, Design, and Digital Culture" : Dsgn,
  "EDA and Prediction on Global Temperature Data Since 1750" : Temps,
  "Spotify Dashboard (Data)" : Dashboard,
  "Spotify Dashboard" : Dashboard2,
  "BenBook - The Penn Facebook" : Benbook,
  "Final Portfolio - Drawing I" : Fnar,
  "Plotify" : Plotify,
  "Common Onion Twitter Bot" : TwitterBot,
  "Understanding the Relationship Between Seniority and Congressional Committee" : Congress, 
  "Modified 2048" : TwentyFortyEight, 
  "kailyliu.com" : Portfolio
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

  const componentNameToShow = currentProject?.name; 
  const ComponentToRender = componentToProjectMapping[componentNameToShow];

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
          {ComponentToRender && <ComponentToRender />}
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
