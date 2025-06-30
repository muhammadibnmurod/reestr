import { useCallback, useState } from 'react'
import styles from './Body.module.css'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './pages/Language_component/language-component.jsx'
import StandartCard from './components/Standart-Card/StandartCard.jsx'
import YagonaList from './components/YagonaPlatforma/YagonaList.jsx'
import { Link } from 'react-router-dom'

const Body = () => {
    const { t } = useTranslation()

    const standartData = [
        {
            title: t("O'z DSt 1985-2018"),
            subtitle: t('Ахборот технологияси'),
            description: t('long1'),
        },
        {
            title: t("O'z DSt 1986-2018"),
            subtitle: t('Ахборот технологияси'),
            description: t('long2'),
        },
        {
            title: t("O'z DSt 2875-2020"),
            subtitle: t('Дастурий таъминот'),
            description: t('long3'),
        },
        {
            title: "O'z DSt 3100-2021",
            subtitle: t('Маълумотлар базаси'),
            description: t('long4'),
        },
    ]

    return (
        <div className={styles.Main}>
            <div className={styles['main-background']}>
                <div className={styles['main-text1']}>
                    <h3> {t('axborot_r')}</h3>
                    <h2>{t('yagona_r')}</h2>
                </div>
                <div className={styles['main-background-form']}>
                    <input type="text" placeholder={t('placeholder_axborot')} />
                    <img src="/assets/img/form-main.svg" alt="Main-Form" />
                    <a>Izlash</a>
                </div>
            </div>
            <div className={styles['milliy-standartlar']}>
                <h2>Milliy Standartlar</h2>
                <div className={styles['standartlar-pages']}>
                    {standartData.map((item, index) => (
                        <StandartCard
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
            <h2 className={styles['yangi-h']}>{t('yangi_h')}</h2>
            <YagonaList />
            <Link to={'/loyihalar'} className={styles['barcha-loyhalar']}>
                {t('Barchaloyihalar')}
                <img src="/assets/img/SVG/SVG.svg" alt="Yangi-Loyihalar" />
            </Link>
        </div>
    )
}

export default Body
