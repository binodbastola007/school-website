import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <BrowserRouter>
                <Navbar />
                <main className='main-container'>{children}</main>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Layout;
