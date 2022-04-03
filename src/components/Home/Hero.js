import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Fade, Slide } from 'react-reveal';

// import BuildingBR from '../../assets/svg/building-hero-br.svg';
// import BuildingBL from '../../assets/svg/building-hero-bl.svg';
// import BuildingTL from '../../assets/svg/building-hero-tl.svg';
// import BuildingTR from '../../assets/svg/building-hero-tr.svg';
import Logo from '../../assets/svg/hero-logo.svg';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <Fade>
                    <img src={Logo} alt="logo" className="hero-logo" />
                    <div className="cta">
                        {/* COMMENTED OUT VIRTUAL FOR TITLE
                        <h1 className="mb-4">
                            Completely
                            <br />
                            Virtual
                        </h1>
                        */}
                        <Button
                            size="lg"
                            href="https://forms.gle/Pa1211WbZdRMo9gS8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 ml-3 mr-3"
                        >
                            Apply as a Participant
                        </Button>
			<Button
                            size="lg"
                            href="https://forms.gle/rgLxLporyqKgqkma9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 ml-3 mr-3"
                        >
                            Apply as a Mentor
                        </Button>
			<Button
                            size="lg"
                            href="https://forms.gle/zKWdGFWTvmdHQshr7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 ml-3 mr-3"
                        >
                            Apply as a Judge
                        </Button>


                    </div>
                </Fade>
            </Container>

            {/* <Parallax className="building-TR" y={[100, 0]}>
                <img src={BuildingTR} alt="" />
            </Parallax>
            <Slide right>
                <img src={BuildingBR} alt="" className="building-BR" />
            </Slide>

            <Parallax className="building-BL" y={[0, 50]}>
                <img src={BuildingBL} alt="" />
            </Parallax>
            <Slide left>
                <img src={BuildingTL} className="building-TL" alt="" />
            </Slide> */}
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
    height: 85vh;
    min-height: 800px;
    background-color: var(--yellow-light);
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
            font-size: clamp(2rem, 15vw, 5rem);
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
        z-index: 1;
        animation: float 5s ease 2s infinite;

        img {
            width: 25vw;
        }

        @media (max-width: 576px) {
            display: none;
        }
    }

    .building-TR {
        position: absolute;
        top: 6%;
        right: 7%;
        animation: float 5s infinite;

        img {
            width: 20vw;
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

    @keyframes float {
        from {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(20px);
        }

        to {
            transform: translateY(0);
        }
    }
`;

export default Hero;
