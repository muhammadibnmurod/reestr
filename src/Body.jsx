import { useCallback } from 'react'
import styles from './Body.module.css'

const Body = () => {
    return (
        <div className={styles.Main}>
            <div className={styles['main-background']}>
                <div className={styles['main-text1']}>
                    Аxborot tizimlari va resurslari <br />
                    Yagona reyestri
                </div>
                <div className={styles['main-background-form']}>
                    <input
                        type="text"
                        placeholder={'Axborot tizimining nomini kiriting'}
                    />
                    <img src="/assets/img/form-main.svg" alt="Main-Form" />
                    <a>Izlash</a>
                </div>
            </div>
            <div className={styles['milliy-standartlar']}>
                <h1>Milliy Standartlar</h1>
                <div className={styles['standartlar-pages']}>
                    <div className={styles['standartlar-1']}>
                        <div className={styles['page-i']}>
                            <div className={styles['standartlar-content']}>
                                <h3>O'z DSt 1985-2018</h3>
                                <p>Ахборот технологияси</p>
                            </div>
                            <div className={'standartlar-content1'}>
                                <img
                                    className={styles['image-standartlar']}
                                    src="/assets/img/download.svg"
                                    alt="Download Icons"
                                />
                            </div>
                        </div>
                        <p className={styles['standartlar-description']}>
                            Ахборот тизимларини яратишда <br />
                            хужжатларнинг турлари, комплектлиги ва <br />
                            белгиланган. Стандарт ахборот тизимини <br />
                            (АТ) яратиш босқичларида ишлаб <br />
                            чиқиладиган ҳужжатларнинг турлари, <br />
                            комплектлиги ва белгиланишини <br />
                            белгилайди.
                        </p>
                    </div>
                    <div className={styles['standartlar-1']}>
                        <div className={styles['page-i']}>
                            <div className={styles['standartlar-content']}>
                                <h3>O'z DSt 1985-2018</h3>
                                <p>Ахборот технологияси</p>
                            </div>
                            <div className={'standartlar-content1'}>
                                <img
                                    className={styles['image-standartlar']}
                                    src="/assets/img/download.svg"
                                    alt="Download Icons"
                                />
                            </div>
                        </div>
                        <p className={styles['standartlar-description']}>
                            Ахборот тизимларини яратишда <br />
                            хужжатларнинг турлари, комплектлиги ва <br />
                            белгиланган. Стандарт ахборот тизимини <br />
                            (АТ) яратиш босқичларида ишлаб <br />
                            чиқиладиган ҳужжатларнинг турлари, <br />
                            комплектлиги ва белгиланишини <br />
                            белгилайди.
                        </p>
                    </div>
                    <div className={styles['standartlar-1']}>
                        <div className={styles['page-i']}>
                            <div className={styles['standartlar-content']}>
                                <h3>O'z DSt 1985-2018</h3>
                                <p>Ахборот технологияси</p>
                            </div>
                            <div className={'standartlar-content1'}>
                                <img
                                    className={styles['image-standartlar']}
                                    src="/assets/img/download.svg"
                                    alt="Download Icons"
                                />
                            </div>
                        </div>
                        <p className={styles['standartlar-description']}>
                            Ахборот тизимларини яратишда <br />
                            хужжатларнинг турлари, комплектлиги ва <br />
                            белгиланган. Стандарт ахборот тизимини <br />
                            (АТ) яратиш босқичларида ишлаб <br />
                            чиқиладиган ҳужжатларнинг турлари, <br />
                            комплектлиги ва белгиланишини <br />
                            белгилайди.
                        </p>
                    </div>
                    <div className={styles['standartlar-1']}>
                        <div className={styles['page-i']}>
                            <div className={styles['standartlar-content']}>
                                <h3>O'z DSt 1985-2018</h3>
                                <p>Ахборот технологияси</p>
                            </div>
                            <div className={'standartlar-content1'}>
                                <img
                                    className={styles['image-standartlar']}
                                    src="/assets/img/download.svg"
                                    alt="Download Icons"
                                />
                            </div>
                        </div>
                        <p className={styles['standartlar-description']}>
                            Ахборот тизимларини яратишда <br />
                            хужжатларнинг турлари, комплектлиги ва <br />
                            белгиланган. Стандарт ахборот тизимини <br />
                            (АТ) яратиш босқичларида ишлаб <br />
                            чиқиладиган ҳужжатларнинг турлари, <br />
                            комплектлиги ва белгиланишини <br />
                            белгилайди.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
