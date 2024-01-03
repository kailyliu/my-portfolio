import React, {useState, useEffect} from 'react';
import styles from '../styles/Home.module.css'; 
import ProjectComponent from '../components/project';
import AllProjectsComponent from './allprojects';
import TabletProjects from './tabletprojects';

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showProjects, setShowProjects] = useState<boolean>(false);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  const handleShowProjectsChange = (value: boolean) => {
    setShowProjects(value);
  };

  const hiddenClass = showProjects ? styles.hidden : '';
  
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
          <div className={`${styles.contentContainer} ${hiddenClass}`}>
            <p className={styles.name}> Kaily Liu</p>
            <div className={styles.links}>
              <a href="https://drive.google.com/file/d/1OQuLQnu6VDyq03D2pNA05K75MF7kFY9K/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</a>
              <span>  /  </span>
              <a href="mailto:liukaily@seas.upenn.edu" target="_blank" rel="noopener noreferrer">mail</a>
              <span>  /  </span>
              <a href="https://github.com/kailyl" target="_blank" rel="noopener noreferrer">github</a>
              <span>  /  </span>
              <a href="https://open.spotify.com/user/kailyliu" target="_blank" rel="noopener noreferrer">spotify</a>
              <span>  /  </span>
              <a href="https://www.pinterest.com/kailyliu/" target="_blank" rel="noopener noreferrer">pinterest</a>
              <span>  /  </span>
              <a href="https://www.are.na/kaily-liu" target="_blank" rel="noopener noreferrer">are.na</a>
              <span>  /  </span>
              <a href="https://www.linkedin.com/in/kaily-liu/" target="_blank" rel="noopener noreferrer">linkedin</a>
            </div>
            <div className={styles.leftContent1}>
              <p> Currently, I'm a third year student at Penn studying Networked and Social Systems 
                Engineering with minors in Math and Fine Arts. 
                NETS is an interdisciplinary major
                that combines computer science with coursework that emphasizes 
                technology, digital impact, and social policy.
              </p>
            </div>
            <div className={styles.leftContent2}>
              <p> Outside of class, I work as a research assistant at the Computational Social 
                Science Lab at Penn where I contribute to projects related to understanding altruistic behavior 
                and group dynamics.
              </p>
            </div>
            <div className={styles.leftContent3}>
              <p> In the future, I want to code cool products that 
                explore the intersection of humanity and technology, 
                specifically in the realms of social impact, 
                digital media, and design. My goal is to contribute meaningfully 
                to the landscape where technology can be used to enrich human experiences, 
                fostering positive impact through thoughtful and purposeful creation.
              </p>
            </div>
            <div className={styles.mobileComponent}>
              <p>It seems like you're using a phone (or some other small/wide display). To see some of the stuff I've worked on, switch to 
              a device with a larger screen size. In the meantime, consider giving your eyes a break and listening 
              to {" "} 
              <a href="https://open.spotify.com/playlist/1qaU1fxGk8HSwsPC8Y0MvQ?si=5a4d8ad0825b4caf" className={styles.playlist}>this playlist</a>
              {" "}with some of my favorite songs.</p>
              <p> - Kaily </p>
            </div>
          </div>
          <div className={styles.tabletComponent}>
            <TabletProjects showProjects={showProjects} setShowProjects={handleShowProjectsChange} />
          </div>
        </div>
        <img className={styles.divider} src="/images/book-graphic.png"/>
        <div className={styles.right}>
          {
            selectedProject == null ? 
              <AllProjectsComponent handleProjectClick={(value) => handleProjectClick(value)}/>
            : 
            <div>
              <ProjectComponent message={selectedProject} handleProjectClick={(value) => handleProjectClick(value)}/>
            </div>
          }
        </div>
      </main>
      <footer>
        <div className={styles.footerCenter}>
          <img className={styles.divider2} src="/images/book-graphic.png"/>
        </div>
        <div className={styles.footerCenter}>
          <img className={styles.divider2} src="/images/book-graphic.png"/>
        </div>
      </footer>
    </div>
  );
};

export default Home;
