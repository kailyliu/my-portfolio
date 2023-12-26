import React from 'react';
import styles from '../../styles/projects/Temps.module.css'; 

const Temps: React.FC = () => {
  return (
    <div className={styles.all}>
        <p className={styles.intro}>
            As a final project for Penn's Big Data Analytics class, I worked with Wendy Deng and Anna Zhou
            to analyze and predict global temepratures to better understand how climate change is and 
            will continue to influence the world. 
        </p>
        <p className={styles.body}>
            For our first step, we analyzed Berkeley Earth's Earth Surface Temperature Dataset that tracks 
            global land temperatures from 1750 - 2015. Specifically, we used Matplotlib, Seaborn, and Plotly 
            to create dynamic graphs that visualize the dataset.     
        </p>
        <p className={styles.body}>
            Then, we applied various models to predict future temperatures, including Linear Regression, XGBoost,
            and SARIMA. Through these models, we predicted that between 2030 and 2050, global land temperatures 
            will rise by 0.57°C.
        </p>
        <p className={styles.body}>
        Below is a dynamic map that color codes each country by temperature, with purple indicating the coldest 
        temperatures and red representing the hottest, spanning from 1750 to predictions up to 2050.
        </p>
        <div className={styles.images}>
            <img className={styles.image1} src="/temp-images/temp-data.gif"/>
        </div>
    </div>
  );
};

export default Temps;
