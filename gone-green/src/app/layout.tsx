// // Layout.tsx
import React from 'react';
import Footer from './components/Footer';

const Layout = ({ children }) => {
    return (
        <>
        <main>{children}</main>
        <Footer />
        </>
    );
};

export default Layout;