import React from 'react'
import { Link } from 'react-router-dom'
import './QaytaAloqa.style.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

function QaytaAloqa() {
    return (
        <div className="qaytaAloqa">
            <div className="loyihalar">
                <Link to="/">
                    <p className="BackAsosiy">Asosiy</p>
                </Link>
                <img src="/assets/img/Loyihalar/variant=4.svg" alt="" />
                <p>Qayta Aloqa</p>
            </div>
            <div className="qayta-aloqa-1">
                <div className="qayta1">
                    <div className="qayta-h3-p">
                        <h3>Aloqa va xizmatni texnik qo'llab-quvvatlash</h3>
                        <p>
                            Agar sizda savol bo'lsa yoki siz allaqachon ariza
                            bergan bo'lsangiz, savolingizga javobni yordam
                            bo'limida ham <br /> tezroq topishingiz mumkin.
                        </p>
                        <p>
                            Boshqa savollar uchun, bo'limlarimizga murojaat
                            qiling:
                        </p>
                    </div>
                    <div className="qayta-h3-p">
                        <h3>Texnik yordam:</h3>
                        <p>E-mail: info@egov.uz</p>
                        <p>Тел: (+998) 55-501-36-06 (1027)</p>
                        <p>Ish vaqti: Du-Ju 10:00 dan 16:00 gacha</p>
                    </div>
                    <div className="qayta-h3-p">
                        <h3>Devonxona:</h3>
                        <p>E-mail: info@egov.uz</p>
                        <p>Тел: (+998) 55-501-36-06 (1027)</p>
                        <p>Ish vaqti: Du-Ju 10:00 dan 16:00 gacha</p>
                    </div>
                    <div className="qayta-h3-p">
                        <h3>Po'chta jo'natmalari uchun:</h3>
                        <p>
                            Yozishmalar va pochta xabarlarini qabul qilish uchun
                            manzil:
                        </p>
                        <p>Indeks: 100128</p>
                        <p>
                            Manzil: 100164, Toshkent shahri, Ibrohim Muminov
                            ko‘chasi, 4
                        </p>
                        <p>Ish vaqti: Du-Ju 10:00 dan 16:00 gacha</p>
                    </div>
                </div>
                <div className="qayta2">
                    <h3>Loyihani ko'rib chiqish va tasdiqlash</h3>
                    <p>Sizga 24 soat ichida javob beramiz.</p>
                    <form>
                        <label>
                            <input
                                className="qayta2-radio-input"
                                type="radio"
                                name="aloqa"
                                value="Texnik Yordam"
                            />
                            Texnik Yordam
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="aloqa"
                                value="Devonxona"
                            />
                            Devonxona
                        </label>
                    </form>
                    <div className="qayta-input">
                        <div>
                            <input
                                className="qayta-i1"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="F.I.SH"
                            />
                        </div>
                        <div>
                            <input
                                className="qayta-i1"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E.MAIL"
                            />
                        </div>
                    </div>
                    <button>Yuborish</button>
                </div>
            </div>

            <YMaps>
                <Map
                    defaultState={{
                        center: [41.311081, 69.279678],
                        zoom: 17,
                    }}
                    width="100%"
                    height="400px"
                >
                    <Placemark geometry={[41.311081, 69.279678]} />
                </Map>
            </YMaps>
        </div>
    )
}

export default QaytaAloqa
