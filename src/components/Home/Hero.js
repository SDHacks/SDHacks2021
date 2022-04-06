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
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
    height: 80vh;
    min-height: 800px;
    background-color: var(--yellow);
    position: relative;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80%;
    }

    .hero-logo {
        width: 39%;

        @media (max-width: 576px) {
            width: 80%;
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
