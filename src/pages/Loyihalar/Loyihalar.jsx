import React from 'react'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils'
import { Link } from 'react-router-dom'
import '/src/pages/Loyihalar/Loyihalar-styles.css'

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
        </div>
    )
}

export default Loyihalar
