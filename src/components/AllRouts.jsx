import React, { useContext } from 'react';
import HomePage from '../Pages/HomePage';
import AsideComp from '../Layouts/AsideComp';
import { Route, Routes } from "react-router-dom";
import Deleted from '../Pages/Deleted';
import AboutUs from '../Pages/AboutUs';
import Register from './Register';
import PageNotfound from '../Pages/PageNotfound';
import { AuthContext } from '../Context/Context';
import HolaPage from '../Pages/HolaPage';
import Settings from '../Pages/Settings';
const AllRouts = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        <div>
            {
                isAuth 
                ?
            <Routes>
                <Route path='/' element={<AsideComp></AsideComp>}>
                    <Route index path='/' element={<HomePage></HomePage>}/>
                    <Route  path='/login' replace='/' element={<HomePage></HomePage>}/>
                    <Route path='/deleted' element={<Deleted></Deleted>}/>
                    <Route path='/about-us' element={<AboutUs></AboutUs>}/>
                    <Route path='/settings' element={<Settings></Settings>}/>
                </Route>
                    <Route path='*' element={<PageNotfound></PageNotfound>}/>
            </Routes>
            :
            <Routes>
                <Route index path='/hola' element={<HolaPage></HolaPage>} />
                  <Route path='/' replace='/hola' element={<HolaPage></HolaPage>} />
                  <Route path='/login' loader={'loading...'} element={<Register />} />
                  <Route path='/about-us' element={<AboutUs></AboutUs>}/>
                  <Route path='*' element={<PageNotfound></PageNotfound>}/>
                  <Route path='/settings' element={<Settings></Settings>}/>
            </Routes>
            }
        </div>
    );
}

export default AllRouts;