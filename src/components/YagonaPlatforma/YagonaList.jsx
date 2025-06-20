import React from 'react'
import YagonaPlatforma from './YagonaPlatforma.jsx'
import style from './YagonaList.module.css'

const projects = [
    {
        id: 1,
        title: 'Yagona sport platformasi',
        description: `Sport vazirligi, viloyatlar va Toshkent shahar
    sport boshqarmalari hamda sport-ta’lim
    muassasalarining rasmiy veb-saytlarini, “Yagona darcha” tamoyili asosida,
    yagona sport platformasida yaratish orqali, aholi va yoshlarni sportga
    keng jalb etish hamda sohada ochiqlik va shaffoflikni ta’minlash qaratilgan.`,
        regNumber: 2426,
        date: '21.05.2025',
        stars: 5,
        organization:
            'Ўзбекистон Республикаси Ёшлар сиёсати ва спорт вазирлиги',
    },
    {
        id: 2,
        title: 'Mahalla sport loyihasi',
        description: 'Mahallalarda sport to‘garaklarini rivojlantirish...',
        regNumber: 2750,
        date: '10.06.2025',
        stars: 4,
        organization: 'Toshkent shahar sport boshqarmasi',
    },
]

const YagonaList = () => {
    return (
        <div className={style['project-grid']}>
            {projects.map((project) => (
                <YagonaPlatforma key={project.id} project={project} />
            ))}
        </div>
    )
}

export default YagonaList
