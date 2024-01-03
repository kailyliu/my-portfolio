import React from 'react';
import styles from '../../styles/projects/Leonardo.module.css'; 

const Leonardo: React.FC = () => {
  return (
    <div className={styles.all}>
      <img className={styles.leo} src="/leo-images/leo.jpeg"/>
      <p className={styles.intro}> Leonardo DiCaprio Detector is a deep learning model for detecting 
      images of DiCaprio in real time. I developed this project with Jason Ren and Anna Zhou for our Computer Vision and 
      Computational Photography final project. </p>
      <p className={styles.body}> To build our model, we created a unique dataset with 1,131 images of Leonardo DiCaprio 
      from throughout his acting career and 1,140 non-DiCaprio images, including look-alikes, to train the model. These 
      images were collected by saving frames of various videos and movies to ensure that we captured high-quality images 
      from many angles.
      </p>
      <p className={styles.body}> Utilizing Multi-task Cascaded Convolutional Networks (MTCNN) for face detection 
      and fine-tuning Inception ResNet V1, we developed a model which reached a 94.7% accuracy in identifying 
      DiCaprio’s features.
      </p>
      <p className={styles.body}> We then integrated the model into a real time streaming system which continuously 
      processes frames from the live video stream, detects faces using MTCNN or Haar Cascade Classifiers, and applies our 
      model to classify as "Leonardo DiCaprio" or "not Leonardo DiCaprio".
      </p>
      <p className={styles.body}> We had fun with our final presentation, and brought fatheads of DiCaprio to 
      demo day. We were selected by our classmates for Best Presentation, and by the teaching staff for Best Demo. 
      </p>
      <p className={styles.body}> Below are some photos we took during the process!</p>
      <div className={styles.images}>
        <img className={styles.image1} src="/leo-images/presentation.gif"/>
        <img className={styles.image2} src="/leo-images/group_photo.png"/>
        <img className={styles.image3} src="/leo-images/young_leo.png"/>
      </div>
    </div>
  );
};

export default Leonardo;
