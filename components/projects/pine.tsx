import React from 'react';
import styles from '../../styles/projects/Pine.module.css'; 

const Pine: React.FC = () => {
  return (
    <div className={styles.all}>
      <p className={styles.intro}> Pine is a personalized news app that I developed with Anna Vazhaeparambil 
      for Introduction to Human-Computer Interaction.</p>
      <p className={styles.body}> Over the past semester, we conducted market research on how the average reader 
      gets their news. We found that many people find the process of getting their news to be overwhelming 
      and decentralized. There is so much content available, but its a tedious process keeping up with diverse perspectives 
      across platforms.  
      </p>
      <p className={styles.body}> Pine solves these issues with some of its key features. Specifically, when a reader opens 
      the app, our homepage shows a carousel of articles that our algorithm determines best align with their interests.  
      </p>
      <p className={styles.body}> The trending page allows users to see what articles and topics are currently trending, as well
      as search for articles on a topic. The bookmarked page allows users to go back to articles they have saved. With the 
      profile page, users can further refine their customization algorithm by adding topics they want to see more of, as 
      well as removing sources they don't align with.
      </p>
      <div className={styles.video}>
        <iframe className={styles.iframe}
          src='https://www.youtube.com/embed/5krnpqem3uY'
          allow='autoplay; encrypted-media'
          title='video'
        />
      </div>
    </div>
  );
};

export default Pine;
