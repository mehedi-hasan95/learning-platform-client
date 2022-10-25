import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import Menu from '../pages/Menu';

const Main = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;