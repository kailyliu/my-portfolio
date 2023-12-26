import React from 'react';
import styles from '../../styles/projects/Congress.module.css'; 

const Congress: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            As our final project for Markets and Social Systems on the Internet, I worked with Anna 
            Vazhaeparambil and Anna Zhou to determine if U.S. senators from the 117th Congress have a 
            greater likelihood of sharing a generation if they are members of the same sub-committee. 
        </p>
        <p className={styles.body}>
            To do this, we webscraped the Senate Committee Assignments page and an article about the 
            Senate on Wikipedia to gather information about which senators belong to which sub-committees 
            and what their respective seniority is.  
        </p>
        <p className={styles.body}>
            With this information, we then created a graph where the nodes are the senators and the edges 
            are constructed based on shared sub-committees. Then, we computed the average clustering coefficients 
            for each node of
        </p>
        <li>the complete graph</li>
        <li>an isolated graph where all the nodes share a common age</li>
        <li>an isolated graph where all the nodes have a distinct age</li>
        <p className={styles.body}>
            Although we didn't find any correlation between seniority and committee, we did discover that the 
            senate displays an incredibly skewed age distribution across committees, which can reveal the Senate’s 
            disparate approach to addressing present-day issues.  
        </p>
    </div>
  );
};

export default Congress;
