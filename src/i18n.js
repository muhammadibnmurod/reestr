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
                    axborot_r: 'Аxborot tizimlari va resurslari',
                    yagona_r: 'Yagona reyestri',
                    placeholder_axborot: 'Axborot tizimining nomini kiriting',
                    yangi_h: 'Yangi kiritilgan loyiha',
                    y_s_p: 'Yagona sport platformasi',
                },
            },
        },
    })
