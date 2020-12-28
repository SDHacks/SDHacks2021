import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

// import { ReactComponent as Train } from '../assets/svg/train-1.svg';
// import { ReactComponent as Trees } from '../assets/svg/trees.svg';

import { ReactComponent as BuildingBR } from '../assets/svg/building-hero-br.svg';
import { ReactComponent as BuildingBL } from '../assets/svg/building-hero-bl.svg';
import { ReactComponent as BuildingTL } from '../assets/svg/building-hero-tl.svg';
import { ReactComponent as BuildingTR } from '../assets/svg/building-hero-tr.svg';
import { ReactComponent as Logo} from '../assets/svg/hero-logo.svg';

const Hero = () => {
    return (
        <HeroWrapper>
            <div className="application">
                {/* <h1>
                    <span>SD</span>
                    <br />
                    hacks
                </h1>
                <h2>February 19-21, 2021</h2> */}
                <h3 className="mb-4">Completely Virtual</h3>
                <Button
                    size="lg"
                    href="https://www.tesc.events/register/sdhacks2021"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Apply Now
                </Button>
            </div>
            <BuildingTR className="building-TR" />
            <BuildingTL className="building-TL" />
            <BuildingBR className="building-BR" />
            <BuildingBL className="building-BL" />
            <Logo className="hero-center"/>
        
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
    height: 85vh;
    min-height: 800px;
    background-color: var(--orange-light);
    display: flex;
    align-items: center;
    position: relative;

    .application {
        z-index: 1;
        position: absolute;
        bottom: 5%;
        right: 20%;

        @media (max-width: 576px) {
            bottom: 5%;
            right: 5%;
        }

    }

    h1 {
        font-weight: 900;
        font-size: clamp(5rem, 30vw, 11rem);
        line-height: 0.6em;

        span {
            color: var(--orange);
            position: relative;
            left: 0.3em;
        }
    }

    h2 {
        font-weight: 700;
        font-size: clamp(1.5rem, 7vw, 3.75rem);
        color: var(--orange);
    }

    .building-BR {
        position: absolute;
        bottom: -10%;
        right: 0;
        width: 20%;

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-BL {
        position: absolute;
        bottom: -5%;
        left: 20%;
        width: 15%;

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-TR {
        position: absolute;
        top: 6%;
        right: 22%;
        width: 18%;

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

    .hero-center {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        right: 0%;
        left: 0%;
        width: 40%;

        @media (max-width: 576px) {
            width: 70%;
        }
    }
`;

export default Hero;
