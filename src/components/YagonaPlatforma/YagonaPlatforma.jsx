import React from 'react'
import styles from './YagonaPlatforma.module.css'

const YagonaSportPlatformasi = ({ project }) => {
    return (
        <div className={styles['yangi-loyiha']}>
            <div className={styles['yangi-in']}>
                <div className={styles['yang-in-1']}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
                <div className={styles['yangi-in-2']}>
                    <p>
                        <span className={styles['highlite']}>Reg. №:</span>{' '}
                        {project.regNumber}
                    </p>
                    <p>
                        <span className={styles['highlite']}>Sana:</span>{' '}
                        {project.date}
                    </p>
                    <div className={styles['yangi-inline']}>
                        <p>
                            <span className={styles['zero']}>0</span>
                        </p>
                        <p>
                            <span className={styles['qovus']}>(0)</span>
                        </p>
                        <div className={styles['yangi-stars']}>
                            {[...Array(project.stars)].map((_, i) => (
                                <img
                                    key={i}
                                    src="/assets/img/stars.svg"
                                    alt="Star"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <p>
                <a className={styles['Yangi-pastki']}>{project.organization}</a>
            </p>
        </div>
    )
}

export default YagonaSportPlatformasi
