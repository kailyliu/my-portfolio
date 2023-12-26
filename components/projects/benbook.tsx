import React from 'react';
import styles from '../../styles/projects/Benbook.module.css'; 

const Benbook: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            The final project for Scalable and Cloud Computing at Penn is to create Facebook. I worked on this 
            project with Jack Hourigan, Cindy Yang, and Anna Zhou. 
        </p>
        <p className={styles.body}>
            Our version of Facebook (dubbed BenBook because we created it as Penn students) has: 
        </p>
        <li> start page for registration and logging in </li>
        <li> profile page that is similar to early versions of Facebook </li>
        <li> status updates </li>
        <li> wall posts/commenting </li>
        <li> friends and friend requests </li>
        <li> dynamic search </li> 
        <li> chats messaging (with active status) </li>
        <li> dynamic refresh </li>
        <li> adsorption-based news recommendations</li>
        <li> private pages</li>
        <p className={styles.body}>
            We used AWS DynamoDB and S3 to store all the information from the app, NodeJS for the backend, 
            Pug and CSS for frontend/styling, socket.io for messaging, and EMR via a cron job for news analytics. 
            The site was hosted using EC2. 
        </p>
        <p className={styles.body}>
            Below are some images of our finalized site.
        </p>
        <div className={styles.images}>
            <img className={styles.image1} src="/benbook-images/benbook1.jpeg"/>
            <img className={styles.image2} src="/benbook-images/benbook2.jpeg"/>
      </div>
    </div>
  );
};

export default Benbook;
