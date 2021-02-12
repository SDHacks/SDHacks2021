import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Iframe from 'react-iframe';
import styled from 'styled-components';

import Logo from '../../assets/logo-header.png';

const Schedule = () => {
    return (
        <ScheduleContainer>
            <Navbar
                expand="lg"
                css={`
                    font-weight: 900;
                    font-size: 18px;

                    .navbar-brand img {
                        margin-left: 45px;

                        @media (max-width: 576px) {
                            height: 25px;
                        }
                    }

                    .navbar-nav {
                        margin-right: 14rem;
                        text-transform: uppercase;
                    }

                    .nav-link {
                        transition: color 0.1s;
                    }
                `}
            >
                <Container>
                    <Navbar.Brand href="/" className="mx-auto mr-md-auto">
                        <img src={Logo} alt="logo" height="40" />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <center><Iframe 
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=Y192cjZjYnBrZ3ZhMWY5ajhmaWE2ZTBkOGtvc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%233F51B5&amp;mode=AGENDA"
                styles="border:solid 1px #777"
                width="800"
                height="600"
                frameborder="0"
                scrolling="no" /></center>
        </ScheduleContainer>
    );
}

const ScheduleContainer = styled.section `
    background-color: var(--orange-light);
    height: 100vh;
`;

export default Schedule;