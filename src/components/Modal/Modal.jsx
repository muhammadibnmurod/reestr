import React from 'react'
import styles from './Modal.module.css'

function Modal({ toggleModal }) {
    const stopClick = (e) => {
        e.stopPropagation()
    }

    return (
        <div className={styles.modal} onClick={toggleModal}>
            <div className={styles.overlay}></div>
            <div className={styles.modalcontent} onClick={stopClick}>
                <h2>Shaxsiy sahifaga kirish</h2>
                <p>
                    OneId yagona identifikatsiya tizimi hisoblanib, raqamli
                    hukumat axborot tizimlariga oson kirish uchun mo'ljallangan.
                </p>
                <p>
                    OneID sizning ma'lumotlaringizning xavfsizligi va
                    maxfiyligini ta'minlaydi.
                </p>
                <button>OneID Orqali Kirish</button>
            </div>
        </div>
    )
}

export default Modal
