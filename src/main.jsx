import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import Button from 'react-bootstrap/Button'

// or less ideallyç
// import { Button } from 'react-bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
