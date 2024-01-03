import React, { useState } from 'react';
import styles from '../styles/TabletProjects.module.css';
import ProjectComponent from '../components/project';
import AllProjectsComponent from './allprojects';

interface TabletProjectsProps {
  showProjects: boolean;
  setShowProjects: (value: boolean) => void;
}

const TabletProjects: React.FC<TabletProjectsProps> = (props) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  return (
    <div className={styles.rightSideTablet}>
        {props.showProjects && selectedProject == null ? (
            <AllProjectsComponent handleProjectClick={(value) => handleProjectClick(value)} />
        ) : props.showProjects ? (
            <div>
            <ProjectComponent message={selectedProject} handleProjectClick={(value) => handleProjectClick(value)} />
            </div>
        ) : (
            <div />
        )}
        <button 
            className={styles.rightSideButton} 
            onClick={() => props.setShowProjects(!props.showProjects)}> 
            { props.showProjects ? 
                <span className={styles.arrowIconPortfolioLeft}>← </span> : 
                <span className={styles.arrowIconPortfolioRight}> →</span>
                 }
        </button>
    </div>
  );
};

export default TabletProjects;
