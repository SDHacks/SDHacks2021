import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as BuildingBR } from '../assets/svg/building-hero-br.svg';
import { ReactComponent as BuildingBL } from '../assets/svg/building-hero-bl.svg';
import { ReactComponent as BuildingTL } from '../assets/svg/building-hero-tl.svg';
import { ReactComponent as BuildingTR } from '../assets/svg/building-hero-tr.svg';
import { ReactComponent as Logo } from '../assets/svg/hero-logo.svg';

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <Logo className="hero-logo" />
                <div className="cta">
                    <h1 className="mb-4">
                        Completely
                        <br />
                        Virtual
                    </h1>
                    <Button
                        size="lg"
                        href="https://www.tesc.events/register/sdhacks2021"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apply Now
                    </Button>
                </div>
            </Container>
            <BuildingTR className="building-TR" />
            <BuildingTL className="building-TL" />
            <BuildingBR className="building-BR" />
            <BuildingBL className="building-BL" />
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
    height: 85vh;
    min-height: 800px;
    background-color: var(--orange-light);
    position: relative;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .hero-logo {
        width: 40%;

        @media (max-width: 576px) {
            width: 70%;
        }
    }

    .cta {
        z-index: 1;
        text-align: center;
        margin-top: 1rem;

        h1 {
            font-weight: 800;
            font-size: clamp(3rem, 30vw, 4rem);
        }
    }

    .building-BR {
        position: absolute;
        bottom: -25%;
        right: 0;
        width: 20%;
        z-index: 1;

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-BL {
        position: absolute;
        bottom: -5%;
        left: 10%;
        width: 18%;
        z-index: 1;

        @media (max-width: 1375px) {
            width: 20%;
        }

        @media (max-width: 1350px) {
            width: 25%;
        }

        @media (max-width: 1100px) {
            width: 27%;
            left: 16%;
            bottom: -2%;
        }

        @media (max-width: 960px) {
            left: 13%;
            bottom: 3%;
        }

        @media (max-width: 760px) {
            left: 8%;
        }

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-TR {
        position: absolute;
        top: 6%;
        right: 10%;
        width: 18%;

        @media (max-width: 1375px) {
            width: 20%;
        }

        @media (max-width: 1350px) {
            width: 23%;
        }

        @media (max-width: 1100px) {
            width: 25%;
            right: 18%;
            top: 9%;
        }

        @media (max-width: 960px) {
            right: 15%;
            top: 14%;
        }

        @media (max-width: 760px) {
            right: 10%;
        }

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-TL {
        position: absolute;
        top: 0%;
        left: -3.5%;
        width: 15%;

        @media (max-width: 576px) {
            display: none;
        }
    }
`;

export default Hero;
