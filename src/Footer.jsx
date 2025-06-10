import { useCallback } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles['Footer']}>
            <div className={styles['footer-1']}>
                <div className={styles['footer-content']}>
                    <img src="/assets/img/logo-1.svg" alt="Logo-1" />
                    <h2>
                        Raqamli hukumatning axborot tizimlari <br />
                        va resurslari yagona reyestri
                    </h2>
                </div>
                <div className={styles['footer-content']}>
                    <img src="/assets/img/logo-2.svg" alt="Logo-2" />
                    <h2>
                        Sayt raqamli hukumat loyihalarini boshqarish <br />
                        markazi tomonidan ishlab chiqilgan
                    </h2>
                </div>
                <p className={styles['footer-p-1']}>
                    Sayt materiallaridan foydalanilganda saytning yorliqlari
                    to'liq <br />
                    yoki qisman ko'rsatilishi zarur
                </p>
            </div>
            <div className={styles['footer-2']}>
                <h3>Aloqa ma'lumotlari</h3>
                <div className={styles['footer-2-1']}>
                    <img src="/assets/img/footer-2-2/1.svg" alt="Inbox Image" />
                    <p href="">info@egov.uz</p>
                </div>
                <div className={styles['footer-2-1']}>
                    <img src="/assets/img/footer-2-2/2.svg" alt="Inbox Image" />
                    <p href="">
                        (+998) 55-501-36-37 - Devonxona <br />
                        (+998) 55-501-36-06 (1027) Texnik qo'llab quvvatlash
                    </p>
                </div>
                <div className={styles['footer-2-1']}>
                    <img src="/assets/img/footer-2-2/2.svg" alt="Inbox Image" />
                    <p href="">
                        100164, Toshkent shahri, <br />
                        Ibrohim Muminov ko‘chasi, 4
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
