import React from 'react'
import YagonaPlatforma from './YagonaPlatforma.jsx'
import style from './YagonaList.module.css'
import { useTranslation } from 'react-i18next'

const YagonaList = () => {
    const { t } = useTranslation()
    const projects = [
        {
            id: 1,
            title: t('YSP'),
            description: t(`YSP_description`),
            regNumber: 2426,
            date: '21.05.2025',
            stars: 5,
            organization: t('YSP_organization'),
        },
        {
            id: 2,
            title: t('MSL'),
            description: t('MSL_description'),
            regNumber: 2750,
            date: '10.06.2025',
            stars: 4,
            organization: t('MSL_organization'),
        },
    ]
    return (
        <div className={style['project-grid']}>
            {projects.map((project) => (
                <YagonaPlatforma key={project.id} project={project} />
            ))}
        </div>
    )
}

export default YagonaList
