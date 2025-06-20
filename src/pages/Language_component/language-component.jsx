import React from 'react'
import { useTranslation } from 'react-i18next'
import './language-component.css'

const language = [
    { code: 'en', lang: 'English' },
    { code: 'ru', lang: 'Russion' },
    { code: 'uz', lang: 'Uzbek' },
]

export const LanguageSelector = () => {
    const { i18n } = useTranslation()

    return (
        <div className="btn-container">
            {language.map((lng) => (
                <button
                    key={lng.code}
                    onClick={() => i18n.changeLanguage(lng.code)}
                >
                    {lng.lang}
                </button>
            ))}
        </div>
    )
}

export default LanguageSelector
