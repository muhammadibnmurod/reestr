import { useState, useCallback } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './pages/Language_component/language-component.jsx'

const Header = () => {
    const { t } = useTranslation()
    const [showLanguages, setShowLanguages] = useState(false)
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
                            {t('THA')}
                        </h2>
                    </div>
                </div>
            </Link>
            <div className={styles.list}>
                <div className={styles.itemLink}>
                    <Link to="/loyihalar" className={styles.loyihalar}>
                        {t('LH')}
                    </Link>
                </div>
                <div className={styles.itemLink}>
                    <Link to="/korsatmalar" className={styles.loyihalar}>
                        {t('Kos')}
                    </Link>
                </div>
                <div className={styles.itemLink}>
                    <Link to="/qaytaaloqa" className={styles.loyihalar}>
                        {t('QA')}
                    </Link>
                </div>
            </div>
            <div
                className={styles.languageWrapper}
                onMouseEnter={() => setShowLanguages(true)}
                onMouseLeave={() => setShowLanguages(false)}
            >
                <div className={styles.listItem}>
                    <div className={styles.oz}>{t('Lang')}</div>
                    <img
                        className={styles.svgIcon}
                        alt=""
                        src="/assets/img/SVG.svg"
                    />
                </div>

                {showLanguages && (
                    <div className={styles.dropdown}>
                        <LanguageSelector />
                    </div>
                )}
            </div>
            {/*<LanguageSelector />*/}
            <div className={styles.listItem1}>
                <div className={styles.background}>
                    <div className={styles.oz1}>{t('Perpage')}</div>
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
