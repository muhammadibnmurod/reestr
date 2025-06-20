// components/StandartCard.jsx
import React from 'react'
import styles from './StandartCard.module.css'

const StandartCard = ({ title, subtitle, description }) => {
    return (
        <div className={styles['standartlar-1']}>
            <div className={styles['page-i']}>
                <div className={styles['standartlar-content']}>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <div className={'standartlar-content1'}>
                    <img
                        className={styles['image-standartlar']}
                        src="/assets/img/download.svg"
                        alt="Download Icons"
                    />
                </div>
            </div>
            <p className={styles['standartlar-description']}>
                {description.split('<br />').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    )
}

export default StandartCard
