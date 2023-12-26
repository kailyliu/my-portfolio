import React from 'react';
import styles from '../../styles/projects/TwentyFortyEight.module.css'; 

const TwentyFortyEight: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            Modified 2048 was my final project for Programming Languages and Techniques, my first 
            CS class in college. For this project, I implemented 2048 (with added saving and resetting components) 
            using Java and Java Swing for graphics.
        </p>
    </div>
  );
};

export default TwentyFortyEight;
