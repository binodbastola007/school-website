import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
