import React from 'react';
import {Helmet} from "react-helmet";
import { AiTwotonePhone } from 'react-icons/ai'
const AboutUs = () => {
    return (
        <div className='about-us'>
            <Helmet>
                <title>Todocom | About-us</title>
            </Helmet>
            <h1>Todocom</h1>
            <p className='prj-info'>This project was created from student of <a href="https://www.wepro.uz/">"Wepro"</a> it school.</p>
            <h2>Our contacts:</h2>
            <div className="phone-numbers">
                <AiTwotonePhone size={'25px'} />
                <p>+998 (90) 197-71-00</p>
            </div>

            <div className="map-block">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab91c45cf5b1bec1bb10c3e40ea1eeadc9cfa4467269b89fc7dfac822ee62dd1c&amp;source=constructor" width="1050" height="400" frameborder="0"></iframe>
            </div>
        </div>
    );
}

export default AboutUs;
