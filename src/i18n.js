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
                    YSP: 'Unified Sports Platform',
                    YSP_description:
                        "Aimed at promoting mass engagement of the population and youth in sports, and ensuring transparency in the sector by developing official websites of the Ministry of Sports, regional and Tashkent city sports departments, and sports educational institutions within a single sports platform based on the 'one-stop-shop' principle.",
                    YSP_organization:
                        'Ministry of Youth Policy and Sports of the Republic of Uzbekistan',

                    MSL: 'Neighborhood Sports Project',
                    MSL_description:
                        'Development of sports clubs in local communities (mahallas)...',
                    MSL_organization: 'Tashkent City Sports Department',
                    Barchaloyihalar: 'All projects',
                    RHAT: 'Unified Registry of Information Systems and Resources of Digital Government',
                    SHL: 'The website was developed by the Digital Government Project Management Center',
                    SMH: 'When using materials from the site, full or partial attribution to the site must be provided',
                    AMR: 'Contact Information',
                    Devonxona: 'Office',
                    TQB: 'Technical Support',
                    RH: 'About the Registry',
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
                    YSP: 'Единая спортивная платформа',
                    YSP_description:
                        'Создание официальных веб-сайтов Министерства спорта, спортивных управлений регионов и города Ташкента, а также спортивно-образовательных учреждений на единой спортивной платформе по принципу «единого окна» с целью широкого привлечения населения и молодежи к спорту, обеспечения открытости и прозрачности в отрасли.',
                    YSP_organization:
                        'Министерство по делам молодежи и спорта Республики Узбекистан',

                    MSL: 'Проект «Спорт в махалле»',
                    MSL_description:
                        'Развитие спортивных кружков в махаллях...',
                    MSL_organization: 'Спортивное управление города Ташкента',
                    Barchaloyihalar: 'Все проекты',
                    RHAT: 'Единый реестр информационных систем и ресурсов цифрового правительства',
                    SHL: 'Сайт разработан Центром управления проектами цифрового правительства',
                    SMH: 'При использовании материалов сайта необходимо полностью или частично указывать на источник',
                    AMR: 'Контактная информация',
                    Devonxona: 'Канцелярия',
                    TQB: 'Техническая поддержка',
                    RH: 'О реестре',
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
                    YSP: 'Yagona sport platformasi',
                    YSP_description:
                        'Sport vazirligi, viloyatlar va Toshkent shahar sport boshqarmalari hamda sport-ta’lim muassasalarining rasmiy veb-saytlarini, “Yagona darcha” tamoyili asosida, yagona sport platformasida yaratish orqali, aholi va yoshlarni sportga keng jalb etish hamda sohada ochiqlik va shaffoflikni ta’minlash qaratilgan.',
                    YSP_organization:
                        'Ўзбекистон Республикаси Ёшлар сиёсати ва спорт вазирлиги',
                    MSL: 'Mahalla sport loyihasi',
                    MSL_description:
                        'Mahallalarda sport to‘garaklarini rivojlantirish...',
                    MSL_organization: 'Toshkent shahar sport boshqarmasi',
                    Barchaloyihalar: 'Barcha loyihalar',
                    RHAT: 'Raqamli hukumatning axborot tizimlari va resurslari yagona reyestri',
                    SHL: 'Sayt raqamli hukumat loyihalarini boshqarish markazi tomonidan ishlab chiqilgan',
                    SMH: "Sayt materiallaridan foydalanilganda saytning yorliqlari to'liq yoki qisman ko'rsatilishi zarur",
                    AMR: "Aloqa ma'lumotlari",
                    Devonxona: 'Devonxona',
                    TQB: "Texnik qo'llab quvvatlash",
                    RH: 'Reyester Haqida',
                },
            },
        },
    })
