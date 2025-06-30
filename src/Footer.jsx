import { useCallback } from 'react'
import styles from './Footer.module.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className={styles['Footer']}>
            <div className={styles['footer-1']}>
                <div className={styles['footer-content']}>
                    <img src="/assets/img/logo-1.svg" alt="Logo-1" />
                    <h2>
                        {t('RHAT')} <br />
                    </h2>
                </div>
                <div className={styles['footer-content']}>
                    <img src="/assets/img/logo-2.svg" alt="Logo-2" />
                    <h2>{t('SHL')}</h2>
                </div>
                <p className={styles['footer-p-1']}>
                    {t('SMH')}
                </p>
            </div>
            <div className={styles['footer-2']}>
                <h3>{t('AMR')}</h3>
                <div className={styles['footer-2-1']}>
                    <img src="/assets/img/footer-2-2/1.svg" alt="Inbox Image" />
                    <p href="">info@egov.uz</p>
                </div>
                <div className={styles['footer-2-1']}>
                    <img src="/assets/img/footer-2-2/2.svg" alt="Inbox Image" />
                    <p href="">
                        (+998) 55-501-36-37 - {t('Devonxona')} <br />
                        (+998) 55-501-36-06 (1027) {t('TQB')}
                    </p>
                </div>
                <div className={styles['footer-2-1']}>
                    <img src="/assets/img/footer-2-2/2.svg" alt="Inbox Image" />
                    <p href="">
                        100164, Toshkent shahri, <br />
                        Ibrohim Muminov ko‘chasi, 4
                    </p>
                </div>
            </div>
            <div className={styles['footer-3']}>
                <h3>Asosiy havolalar</h3>
                <div className={styles['asosiy-havolalar']}>
                    <div className={styles['asosiy']}>
                        <img src="/assets/img/asosiy/variant-1.svg" alt="" />
                        <a href="">{t('LH')}</a>
                    </div>
                    <div className={styles['asosiy']}>
                        <img src="/assets/img/asosiy/variant-1.svg" alt="" />
                        <a href="">{t('Kos')}</a>
                    </div>
                    <div className={styles['asosiy']}>
                        <img src="/assets/img/asosiy/variant-1.svg" alt="" />
                        <a href="">{t('RH')}</a>
                    </div>
                    <div className={styles['asosiy']}>
                        <img src="/assets/img/asosiy/variant-1.svg" alt="" />
                        <a href="">{t('QA')}</a>
                    </div>
                </div>
            </div>
            <div className={styles['footer-4']}>
                <h3>Asosiy havolalar</h3>
                <div className={styles['asosiy-havolalar']}>
                    <div className={styles['asosiy']}>
                        <img src="/assets/img/asosiy/variant-1.svg" alt="" />
                        <a href="digital.uz">digital.uz</a>
                    </div>
                    <div className={styles['asosiy']}>
                        <img src="/assets/img/asosiy/variant-1.svg" alt="" />
                        <a href="e-gov.uz">e-gov.uz</a>
                    </div>
                    <div className={styles['asosiy']}>
                        <img src="/assets/img/asosiy/variant-1.svg" alt="" />
                        <a href="lex.uz">lex</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
