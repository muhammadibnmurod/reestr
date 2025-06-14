import React from 'react'
import { Link } from 'react-router-dom'
import './Korsatmalar.styles.css'

function Korsatmalar() {
    return (
        <div className="Korsatmalar">
            <div className="korsatmalar">
                <div className="loyihalar">
                    <Link to="/">
                        <p className="BackAsosiy">Asosiy</p>
                    </Link>
                    <img src="/assets/img/Loyihalar/variant=4.svg" alt="" />
                    <p>Ko'rsatmalar </p>
                </div>
                <div className="korsatmalar-you">
                    <h2>Ko'rsatmalar</h2>
                    <div className="korsatmalar-you">
                        <iframe
                            src="https://www.youtube.com/embed/c3jOWa09Qe4"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Korsatmalar
