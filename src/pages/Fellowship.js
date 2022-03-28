import React from 'react';
import { withRouter } from 'react-router-dom';
import Hero from '../components/Fellowship/Hero';
import Benefits from '../components/Fellowship/Benefits';
import Sponsor from '../components/Fellowship/Sponsor';
import About from '../components/Fellowship/About';
import Faq from '../components/Fellowship/Faq';
import Tiers from '../components/Fellowship/Tiers';
import EndCard from '../components/Fellowship/EndCard';

const FellowshipPage = () => {
    return (
        <>
            <Hero />
            <About />
            <Benefits />
            <Tiers />
            <EndCard />
        </>
    );
};

export default withRouter(FellowshipPage);
