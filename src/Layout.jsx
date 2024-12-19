import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <ScrollToTop />
                <Navbar />
                <main className='main-container'>{children}</main>
                <Footer />

        </div>
    );
};

export default Layout;
