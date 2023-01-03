import React from 'react';
import TextFileds from './TextFileds';
import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { setIsAuth } = useContext(AuthContext)
    return (
        <div className='registration-page'>
            <Helmet>
                     <title>Todocom | Register</title>
                </Helmet>
            {/* <img src="./Icons/back.jpg" alt="shape" className='background-shape' /> */}
            <div className="register-block">
                <h1>Registration</h1>
                    <TextFileds setIsAuth={setIsAuth} />
            </div>
        </div>
    );
}

export default Register;
