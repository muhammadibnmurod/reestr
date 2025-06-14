import React from 'react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'
import { Link } from 'react-router-dom'
import './Loyihalar-styles.css'

function Loyihalar() {
    return (
        <div className="Loyihalar">
            <div className="loyihalar">
                <Link to="/">
                    <p className="BackAsosiy">Asosiy</p>
                </Link>
                <img src="/assets/img/Loyihalar/variant=4.svg" alt="" />
                <p>Loyihalar</p>
            </div>
            <div className="main-background">
                <div className="main-text1">
                    <h2> Loyihalar</h2>
                </div>
                <div className="main-background-form">
                    <input
                        type="text"
                        placeholder={'Axborot tizimining nomini kiriting'}
                        className="styled-input"
                    />
                    <button className="main-button">
                        <img src="/assets/img/form-main.svg" alt="Main-Form" />
                    </button>
                    <a>Izlash</a>
                </div>
            </div>
        </div>
    )
}

export default Loyihalar
