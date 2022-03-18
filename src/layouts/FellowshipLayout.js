import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const FellowshipLayout = ({ children }) => {
    return (
        <>
            <Header navItems={['about', 'benefits','tiers']} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default FellowshipLayout;
