import { Button } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HolaPage = () => {

    return (
        <div className='hola-page'>
            <Helmet>
                     <title>Todocom | Hello</title>
                </Helmet>
            <header className='hola-header'>
                <div className="logo-todo-left">
                    <img src="/Icons/todo.svg" alt="todo" height='50px' />
                    <p>Todocom</p>
                </div>
                <div className="main-animated-text">
                    <p>Create daily tasks, be disciplined...</p>
                </div>
                <div className="nav-todo-right">
                    <nav>
                    <ul>
                        <Link to='/about-us'>
                           <li>About us</li>
                        </Link>
                    </ul>
                    </nav>
                    <Link to='/login'>
                <Button variant="outlined">Register</Button>
                    </Link>
                </div>
            </header>
            <main className='hola-main'>
                <h1>Distribute the daily routine <br /> <span>and plan anything</span></h1>
                <p className='txt-loc'>With Todocom you will be able to do everything</p>
                <div className="grid">
                    <div className="item">
                        <div className="img-block">
                            <img src="/Icons/checklist.svg" alt="checklist" height='100px' />
                        </div>
                        <h2>Make plans for the whole year</h2>
                        <p>You can plan your plans for the whole year and don't worry about them. Our program will save your plans and will remind you at the time!</p>
                    </div>
                    <div className="item">
                        <div className="img-block">
                            <img src="/Icons/checklist2.webp" alt="checklist" height='100px' />
                        </div>
                        <h2>You can return back your deleted notes </h2>
                        <p>It can help u if u deleted your notes by mistake. It's our advantage over our competitors!</p>
                    </div>
                    <div className="item">
                        <div className="img-block">
                            <img src="/Icons/checklist3.svg" alt="checklist" height='100px' />
                        </div>
                        <h2>We will remind you about your notes</h2>
                        <p>Even if u forget about your note,no poblem! Our program will remind you about this in push-notification. Is it cool?</p>
                    </div>
                </div>
                <div className="reg-btn-block">
                    <Link to='/login'>
                         <Button variant="contained" sx={{height: '50px', width: '250px'}}>Register</Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default HolaPage;
