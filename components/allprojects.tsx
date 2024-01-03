import React from 'react';
import styles from '../styles/AllProjects.module.css';
import projectsData from "../project-info/projectsData";

interface AllProjectsComponentProps {
    handleProjectClick: (value: string) => void;
}

const AllProjectsComponent: React.FC<AllProjectsComponentProps>  = ({ handleProjectClick }) => {
    let currentYear = null;

    return (
        <main className={styles.main}>
            {projectsData.map((project, index) => {
                const isNewYear = project.year !== currentYear;
                currentYear = project.year;

                return (
                <div key={index}>
                    {isNewYear && (
                        <p className={index === 0 ? styles.year1 : styles.year}>{project.year}</p>
                    )}
                    <p className={styles.project} onClick={() => handleProjectClick(project.name)}>
                    <span style={{ fontSize: '0.7em' }}>{project.icon}</span> {project.name}
                    </p>
                </div>
                );
            })}
        </main> 
    );
};

export default AllProjectsComponent;
