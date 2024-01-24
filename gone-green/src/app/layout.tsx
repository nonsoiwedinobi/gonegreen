// // Layout.tsx
import React from 'react';
import Footer from '../components/Footer/Footer';
import { type } from 'os';

type RootLayoutProps= {
    children: React.ReactNode
}

const Layout = ({ children }:RootLayoutProps) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>GoneGreen</title>
        </head>
        <body>   
        <main className='main-body'>{children}</main>
        <Footer />
        </body>
        </html>
    );
};

export default Layout;