import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: 'uz',
        resources: {
            en: {
                translation: {
                    THA: 'Digital government information systems and a single registry',
                    LH: 'Projects',
                    Kos: 'Instructions',
                    QA: 'Feedback',
                    Lang: 'En',
                    Perpage: 'Personal page',
                    axborot_r: 'Information systems and resources',
                    yagona_r: 'Unified registry',
                    placeholder_axborot:
                        'Enter the name of the information system',
                    yangi_h: 'Newly added project',
                    y_s_p: 'Unified sports platform',
                    "O'z DSt 1985-2018": 'UZ DSt 1985-2018',
                    "O'z DSt 1986-2018": 'UZ DSt 1986-2018',
                    'Ахборот технологияси': 'Information Technology',
                    long1: 'The standard defines the types, completeness, and specification of documents used in the development of information systems (IS) at various stages.',
                    long2: 'The standard outlines the requirements and methods for standardizing system security.',
                    "O'z DSt 2875-2020": "O'z DSt 2875-2020",
                    'Дастурий таъминот': 'Software',
                    long3: 'Stages and phases of creating an information system. The requirements defined by this standard are mandatory for all state and economic management bodies, as well as local government authorities when creating information systems.',
                    'Маълумотлар базаси': 'Database',
                    long4: 'Requirements for the integration and interaction of information systems used by government bodies within the framework of forming a national information system.',
                },
            },
            ru: {
                translation: {
                    THA: 'Цифровые государственные информационные системы и единый реестр',
                    LH: 'Проекты',
                    Kos: 'Инструкции',
                    QA: 'Обратная связь',
                    Lang: 'Рус',
                    Perpage: 'Личный кабинет',
                    axborot_r: 'Информационные системы и ресурсы',
                    yagona_r: 'Единый реестр',
                    placeholder_axborot:
                        'Введите название информационной системы',
                    yangi_h: 'Недавно добавленный проект',
                    y_s_p: 'Единая спортивная платформа',
                    "O'z DSt 1985-2018": "O'z DSt 1985-2018",
                    "O'z DSt 1986-2018": "O'z DSt 1986-2018",
                    'Ахборот технологияси': 'Информационные технологии',
                    long1: 'Стандарт определяет виды, полноту и обозначение документов, используемых на различных этапах создания информационных систем (ИС).',
                    long2: 'Стандарт описывает требования и методы стандартизации для обеспечения безопасности систем.',
                    "O'z DSt 2875-2020": "O'z DSt 2875-2020",
                    'Дастурий таъминот': 'Программное обеспечение',
                    long3: 'Этапы и стадии создания информационной системы. Требования, определённые этим стандартом, являются обязательными для всех государственных и хозяйственных органов управления, а также органов местной власти при создании информационных систем.',
                    'Маълумотлар базаси': 'База данных',
                    long4: 'Требования к интеграции и взаимодействию информационных систем, используемых государственными органами в рамках формирования национальной информационной системы.',
                },
            },
            uz: {
                translation: {
                    THA: 'Raqamli hukumatning axborot tizimlari va yagona reyestori',
                    LH: 'Loyihalar',
                    Kos: "Ko'rsatmalar",
                    QA: 'Qayta aloqa',
                    Lang: "O'z",
                    Perpage: 'Shaxsiy sahifa',
                    axborot_r: 'Axborot tizimlari va resurslari',
                    yagona_r: 'Yagona reyestri',
                    placeholder_axborot: 'Axborot tizimining nomini kiriting',
                    yangi_h: 'Yangi kiritilgan loyiha',
                    y_s_p: 'Yagona sport platformasi',
                    "O'z DSt 1985-2018": "O'z DSt 1985-2018",
                    "O'z DSt 1986-2018": "O'z DSt 1986-2018",
                    'Ахборот технологияси': 'Ахборот технологияси',
                    long1: 'Ахборот тизимларини яратишда ҳужжатларнинг турлари, комплектлиги ва белгиланиши белгиланган. Стандарт ахборот тизимини (АТ) яратиш босқичларида ишлаб чиқиладиган ҳужжатларнинг турлари, комплектлиги ва белгиланишини белгилайди.',
                    long2: 'Тизимлар хавфсизлиги учун стандартлаштириш талаблари ва усуллари кўрсатилган.',
                    "O'z DSt 2875-2020": "O'z DSt 2875-2020",
                    'Дастурий таъминот': "Dasturiy ta'minot",
                    long3: 'Ахборот тизимини яратиш босқичлари ва этаплари. Ушбу стандарт билан белгиланадиган талаблар барча давлат ва хўжалик бошқаруви органлари, маҳаллий давлат ҳокимияти органлари томонидан ахборот тизимларини яратишда қўллаш учун мажбурий.',
                    'Маълумотлар базаси': 'Маълумотлар базаси',
                    long4: 'Миллий ахборот тизимини шакллантириш доирасида давлат органлари томонидан фойдаланиладиган ахборот тизимлари интеграциясига ва ўзаро фаолиятига қўйиладиган талаблар.',
                },
            },
        },
    })
