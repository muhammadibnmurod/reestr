import { useCallback } from 'react'
import styles from './Header.module.css'

const Header = () => {
    const onLinkContainerClick = useCallback(() => {
        window.open('https://reestr.uz/')
    }, [])

    return (
        <div className={styles.header}>
            <div className={styles.link} onClick={onLinkContainerClick}>
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
            </div>
            <div className={styles.list}>
                <div className={styles.itemLink}>
                    <a
                        className={styles.loyihalar}
                        href="https://reestr.uz/projects"
                        target="_blank"
                    >
                        Loyihalar
                    </a>
                </div>
                <div className={styles.itemLink}>
                    <a
                        className={styles.loyihalar}
                        href="https://reestr.uz/instructions"
                        target="_blank"
                    >
                        Ko'rsatmalar
                    </a>
                </div>
                <div className={styles.itemLink}>
                    <a
                        className={styles.loyihalar}
                        href="https://reestr.uz/contacts"
                        target="_blank"
                    >
                        Qayta aloqa
                    </a>
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
                    <div className={styles.oz}>Shaxsiy sahifa</div>
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
