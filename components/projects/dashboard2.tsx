import React from 'react';
import styles from '../../styles/projects/Dashboard2.module.css'; 

const Dashboard2: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            This app is a continuation of my previous project, Spotify Dashboard (Data). Specifically, 
            after storing all of my listening activity, I wanted a way to easily visualize 
            everything. 
        </p>
        <p className={styles.body}>
            Using NodeJS, I call DynamoDB to get my listening activity for every day since January 1, 2023. 
            Then, I organize it by day and song. I also run some aggregation algorithms to get my 
            top artists for the day. Then, I use ChartJS to create visualizations for all my data. 
        </p>
        <div className={styles.images}>
            <img className={styles.image1} src="/dashboard-images/dashboard.gif"/>
        </div>    
        <p className={styles.last}>
            View the site <a className={styles.link} href="https://kailys-spotify-dashboard.herokuapp.com/">here</a>.
        </p>
    </div>
  );
};

export default Dashboard2;
