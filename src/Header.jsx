import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './pages/Language_component/language-component.jsx'
import Modal from './components/Modal/Modal.jsx'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const { t } = useTranslation()
    const location = useLocation()
    const [showLanguages, setShowLanguages] = useState(false)

    const isLoyihalarPage =
        location.pathname === '/loyihalar' ||
        location.pathname === '/korsatmalar' ||
        location.pathname === '/qaytaaloqa'

    return (
        <>
            <div
                className={`${styles.header} ${isLoyihalarPage ? styles.headerLoyiha : ''}`}
            >
                {/* Bosh menyular */}
                <Link to="/" className={styles.link}>
                    <img
                        className={styles.reestrIcon}
                        alt="Logo"
                        src="/assets/img/reestr-logo.svg"
                    />
                    <div className={styles.heading2}>
                        <div
                            className={
                                styles.raqamliHukumatningAxborotContainer
                            }
                        >
                            <h2 className={styles.raqamliHukumatningAxborot}>
                                {t('THA')}
                            </h2>
                        </div>
                    </div>
                </Link>

                {/* Menyular */}
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

                {/* Til tanlash */}
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

                <div className={styles.listItem1} onClick={toggleModal}>
                    {isModalOpen && <Modal toggleModal={toggleModal} />}
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
        </>
    )
}

export default Header
