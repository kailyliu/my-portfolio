import React from 'react';
import styles from '../../styles/projects/Plotify.module.css'; 

const Plotify: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            Over the summer, I worked with Joyce He to develop a Spotify analytics site. We were influenced 
            by the influx of these websites, and wanted to try to make one of our own. 
        </p>
        <p className={styles.body}>
            Plotify is a website that connects to a user's Spotify account and graphs the 10 songs they listen 
            to most frequently by popularity and energy. User's can also hover over the songs for more information
            on artists and genre.      
        </p>
        <p className={styles.body}> 
            For the site, I used React to build the frontend, incorporating AJAX requests to 
            fetch and display data from the Spotify API.
        </p>
        <p className={styles.body}>
            Unfortunately, the Spotify API team rejected our request to publish Plotify because it was a 
            hobby project. If you would like to try it out, please reach out to me!
        </p>
        <div className={styles.images}>
            <img className={styles.image1} src="/plotify-images/plotify2.gif"/>
        </div>
        <p className={styles.last}>
            View the site <a className={styles.link} href="https://plotify-app.github.io/">here</a>.
        </p>
    </div>
  );
};

export default Plotify;
