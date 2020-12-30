import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Faq from './components/Faq';

class SDHacksPage extends Component {
    render() {
        return (
            <>
                <Hero />
                <About />
            </>
        );
export default withRouter(SDHacksPage);
