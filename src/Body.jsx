import { useCallback, useState } from 'react'
import styles from './Body.module.css'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './pages/Language_component/language-component.jsx'
import StandartCard from './components/Standart-Card/StandartCard.jsx'
import YagonaList from './components/YagonaPlatforma/YagonaList.jsx'
import { Link } from 'react-router-dom'

const Body = () => {
    const { t } = useTranslation()
    const [showLanguages, setShowLanguages] = useState(false)

    const standartData = [
        {
            title: "O'z DSt 1985-2018",
            subtitle: 'Ахборот технологияси',
            description: `Ахборот тизимларини яратишда хужжатларнинг
             турлари, комплектлиги ва белгиланган. Стандарт ахборот тизимини
              (АТ) яратиш босқичларида ишлаб чиқиладиган ҳужжатларнинг турлари, 
              комплектлиги ва белгиланишини белгилайди.`,
        },
        {
            title: "O'z DSt 1986-2018",
            subtitle: 'Ахборот технологияси',
            description: `Тизимлар хавфсизлиги учун <br />
стандартлаштириш талаблари ва <br />
усуллари кўрсатилган.`,
        },
        {
            title: "O'z DSt 2875-2020",
            subtitle: 'Дастурий таъминот',
            description: `Ахборот тизимини яратиш босқичлари ва этаплари. 
            Ушбу стандарт билан белгиланадиган талаблар барча давлат ва 
            хўжалик бошқаруви органлари, маҳаллий давлат ҳокимияти органлари
            томонидан ахборот тизимларини яратишда қўллаш учун мажбурий.`,
        },
        {
            title: "O'z DSt 3100-2021",
            subtitle: 'Маълумотлар базаси',
            description: `Миллий ахборот тизимини шакллантириш доирасида давлат
             органлари томонидан фойдаланиладиган ахборот тизимлари 
             интеграциясига ва ўзаро фаолиятига қўйиладиган талаблар.`,
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
                Barcha loyihalar
                <img src="/assets/img/SVG/SVG.svg" alt="Yangi-Loyihalar" />
            </Link>
        </div>
    )
}

export default Body
