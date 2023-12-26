import React from 'react';
import styles from '../../styles/projects/Dsgn.module.css'; 

const Dsgn: React.FC = () => {
    const photos = [
        { id: 1, src: '/dsgn-images/dsgn 001.png', blurb: 'Sound Analysis Studies (9.19.2023)' },
        { id: 2, src: '/dsgn-images/dsgn 002.png', blurb: 'Sound Analysis Final (9.19.2023)' },
        { id: 3, src: '/dsgn-images/dsgn 003.png', blurb: 'Object Icons (10.5.2023)' },
        { id: 4, src: '/dsgn-images/dsgn 004.png', blurb: 'Dada Composite (10.29.2023)' },
        { id: 5, src: '/dsgn-images/dsgn 005.png', blurb: 'Desktop Portrait (11.21.2023)' },
    ];

    return (
        <div className={styles.photoGrid}>
            <div className={styles.row}>
                {photos.slice(0, 2).map((photo) => (
                    <div key={photo.id} className={styles.gridItem}>
                        <img src={photo.src} alt={`Photo ${photo.id}`} />
                        <p>{photo.blurb}</p>
                    </div>
                ))}
            </div>
            <div className={styles.row}>
                {photos.slice(2, 4).map((photo) => (
                    <div key={photo.id} className={styles.gridItem}>
                        <img src={photo.src} alt={`Photo ${photo.id}`} />
                        <p>{photo.blurb}</p>
                    </div>
                ))}
            </div>
            <div className={styles.row}>
                {photos.slice(4).map((photo) => (
                    <div key={photo.id} className={styles.gridItem}>
                        <img src={photo.src} alt={`Photo ${photo.id}`} />
                        <p>{photo.blurb}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dsgn;
