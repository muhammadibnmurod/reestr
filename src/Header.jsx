import { useCallback } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/" className={styles.link}>
                <img
                    className={styles.reestrIcon}
                    alt="Logo"
                    src="/assets/img/reestr-logo.svg"
                />
                <div className={styles.heading2}>
                    <div className={styles.raqamliHukumatningAxborotContainer}>
                        <h2 className={styles.raqamliHukumatningAxborot}>
                            Raqamli hukumatning axborot tizimlari va
                            <br />
                            yagona reyestori
                        </h2>
                    </div>
                </div>
            </Link>
            <div className={styles.list}>
                <div className={styles.itemLink}>
                    <Link to="/loyihalar" className={styles.loyihalar}>
                        Loyihalar
                    </Link>
                </div>
                <div className={styles.itemLink}>
                    <Link to="/korsatmalar" className={styles.loyihalar}>
                        Ko'rsatmalar
                    </Link>
                </div>
                <div className={styles.itemLink}>
                    <Link to="/qaytaaloqa" className={styles.loyihalar}>
                        Qayta aloqa
                    </Link>
                </div>
            </div>
            <div className={styles.listItem}>
                <div className={styles.oz}>O'z </div>
                <img
                    className={styles.svgIcon}
                    alt=""
                    src="/assets/img/SVG.svg"
                />
            </div>
            <div className={styles.listItem1}>
                <div className={styles.background}>
                    <div className={styles.oz1}>Shaxsiy sahifa</div>
                    <img
                        className={styles.svgIcon1}
                        alt=""
                        src="/assets/img/person.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
