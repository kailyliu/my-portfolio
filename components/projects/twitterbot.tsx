import React from 'react';
import styles from '../../styles/projects/TwitterBot.module.css'; 

const TwitterBot: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            For one of my first independent projects, I decided to make a Twitter Bot. 
            Specifically, I webscrapped headlines from The Onion, created some Markov 
            chains, and generated some tweets with the Twitter API.
        </p>
        <p className={styles.body}>
            The account got suspended, but I saved some funny tweets below. 
        </p>
        <div className={styles.images}>
            <img className={styles.image1} src="/twitter-images/twitter.png"/>
        </div>
    </div>
  );
};

export default TwitterBot;
