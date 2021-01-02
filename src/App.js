import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';

class SDHacksPage extends Component {
    render() {
        return (
            <>
                <Hero />
                <About />
                <Tracks />
            </>
        );
    }
}

export default withRouter(SDHacksPage);
