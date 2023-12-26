import React from 'react';
import styles from '../../styles/projects/Dashboard.module.css'; 

const Dashboard: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            I listen to a lot of songs on Spotify and wanted a way to see how my taste evolves 
            by tracking all the songs I have listened to. Since Spotify doesn't have this capability, 
            I created a personal project to record the songs I listen to every day, and then generate 
            interactive plots for song characteristics. This app also tracks my top artists per day 
            so I can see how my artist preferences change over time.
        </p>
        <p className={styles.body}>
            This page talks about the first part of the project: getting my listening activity using the 
            Spotify API daily, and storing it into a DynamoDB table. Specifically, I use AWS Eventbridge 
            to call a Lambda function every day at 7:00 pm (UTC). The Lambda function calls the Spotify API, 
            processes the data, and records it in a DynamoDB entry. 
        </p>
        <p className={styles.body}>
            Unfortunately, the Spotify API only returns 50 songs per call, and I often listen to more than 50 
            songs in a day. An extension to this project would involve calling the API and updating the database 
            more often, but doing so might be out of budget. 
        </p>
        <p className={styles.body}>
            However the results are still pretty cool. See them on the next page! 
        </p>
    </div>
  );
};

export default Dashboard;
