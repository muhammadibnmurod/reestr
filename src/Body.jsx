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
            <h1 className={styles['yangi-h']}>Yangi kiritilgan loyiha</h1>
            <div className={styles['yangi-bosh']}>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2434
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                 30.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>0</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(0)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2430
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                26.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>5</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(1)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars1.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars1.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars1.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars1.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars1.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2426
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                21.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>0</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(0)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2423
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                30.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>0</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(0)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2419
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                26.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>0</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(0)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2412
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                28.04.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>2</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(4)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars1.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars1.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars1.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2434
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                30.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>0</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(0)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2434
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                30.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>0</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(0)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2434
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                30.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>0</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(0)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles['yangi-loyiha']}>
                    <div className={styles['yangi-in']}>
                        <div className={styles['yang-in-1']}>
                            <h3>Yagona sport platformasi</h3>
                            <p>
                                Sport vazirligi, viloyatlar va Toshkent shahar
                                sport boshqarmalari hamda sport-ta’lim
                                muassasalarining rasmiy veb- <br />
                                saytlarini, “Yagona darcha” tamoyili asosida,
                                yagona sport platformasida yaratish orqali,
                                aholi va yoshlarni sportga <br />
                                keng jalb etish hamda sohada ochiqlik va
                                shaffoflikni ta’minlash qaratilgan.
                            </p>
                        </div>
                        <div className={styles['yangi-in-2']}>
                            <p>
                                <span className={styles['highlite']}>
                                    Reg. №:
                                </span>{' '}
                                2434
                            </p>
                            <p>
                                <span className={styles['highlite']}>
                                    Sana:{' '}
                                </span>{' '}
                                30.05.2025
                            </p>
                            <div className={styles['yangi-inline']}>
                                <p>
                                    <span className={styles['zero']}>0</span>
                                </p>
                                <p>
                                    <span className={styles['qovus']}>(0)</span>
                                </p>
                                <div className={styles['yangi-stars']}>
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                    <img
                                        src="/assets/img/stars.svg"
                                        alt="Yangi Stars"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            <a className={styles['Yangi-pastki']}>
                                Ўзбекистон Республикаси Ёшлар сиёсати ва спорт
                                вазирлиги
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <button className={styles['barcha-loyhalar']}>
                Barcha loyihalar
                <img src="/assets/img/SVG/SVG.svg" alt="Yangi-Loyihalar" />
            </button>
        </div>
    )
}

export default Body
