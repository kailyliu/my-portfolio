import React from 'react';
import styles from '../../styles/projects/Fnar.module.css'; 

const Fnar: React.FC = () => {
    const photos = [
        { id: 1, src: '/fnar-images/fnar1.jpeg', blurb: 'Still Life (9.19.2022)' },
        { id: 2, src: '/fnar-images/fnar2.jpeg', blurb: 'Staircase (9.26.2022)' },
        { id: 3, src: '/fnar-images/fnar3.jpeg', blurb: 'Experimenting with Negative Space (9.28.2022)' },
        { id: 4, src: '/fnar-images/fnar4.jpeg', blurb: 'Cast Figure in Graphite (11.9.2022)' },
        { id: 5, src: '/fnar-images/fnar5.jpeg', blurb: '3 Day Long Pose (11.21.2022)' },
        { id: 6, src: '/fnar-images/fnar7.jpeg', blurb: 'Self Portrait (12.22.2022)' },
    ];

    return (
        <div className={styles.photoGrid}>
            <div className={styles.row}>
                {photos.slice(0, 3).map((photo) => (
                    <div key={photo.id} className={styles.gridItem}>
                        <img src={photo.src} alt={`Photo ${photo.id}`} className={styles.vertical}/>
                        <p>{photo.blurb}</p>
                    </div>
                ))}
            </div>
            <div className={styles.row}>
                {photos.slice(3, 6).map((photo) => (
                    <div key={photo.id} className={styles.gridItem}>
                        {(photo.id === 5) ? 
                            <img src={photo.src} alt={`Photo ${photo.id}`} className={styles.horizontal}/> : 
                            <img src={photo.src} alt={`Photo ${photo.id}`} className={styles.vertical}/>}
                        <p>{photo.blurb}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fnar;
