import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import Loyihalar from './pages/Loyihalar/Loyihalar.jsx'
import Korsatmalar from './pages/Korsatmalar/Korsatmalar.jsx'
import QaytaAloqa from './pages/QaytaAloqa/QaytaAloqa.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <div style={{ background: '#F2F7FB' }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/loyihalar" element={<Loyihalar />} />
                    <Route path="/korsatmalar" element={<Korsatmalar />} />
                    <Route path="/qaytaaloqa" element={<QaytaAloqa />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
