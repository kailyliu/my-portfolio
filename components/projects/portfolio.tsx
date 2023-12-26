import React from 'react';
import styles from '../../styles/projects/Portfolio.module.css'; 

const Portfolio: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            kailyl.github.io is this site! It's a website for me to showcase some of my work, and for 
            me to see how my work has evolved and developed. I update it relatively frequently and use it 
            to learn/practice web design, user interfaces, and programming in general. 
        </p>
        <p className={styles.body}>
            Currently, I've been into brutalist and minimalism-esque styles, as reflected through this 
            site. And because I've been wanting to learn/work in Typescript and Next.js, this site uses 
            Typescript, Next.js, and React! 
        </p>
        <p className={styles.body}>
            Previous iterations of this site were written using React. The very first version of this site 
            was written in HTML/CSS :). 
        </p>
        <p className={styles.body}>
            See below for a screen recording of my last site (I was into grids).
        </p>
        <div className={styles.images}>
            <img className={styles.image1} src="/portfolio-images/old-site.gif"/>
        </div>
    </div>
  );
};

export default Portfolio;
