import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Sponsors from './components/Sponsors'
import Team from './components/Team'

class SDHacksPage extends Component {
    render() {
        return (
            <>
                <Hero />
                <About />
                <Sponsors />
                <Team />
            </>
        );
    }
}

export default withRouter(SDHacksPage);
