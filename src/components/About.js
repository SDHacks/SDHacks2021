import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as Train } from '../assets/svg/train-1.svg';
import { ReactComponent as Trees } from '../assets/svg/trees.svg';

const About = () => {
    return (
        <AboutSection className="about">
            <StyledContainer>
                <Row>
                    <Col xl={5} lg={6}>
                        <Title>
                            <span>about</span>
                            <br />
                            SDHACKS
                        </Title>
                    </Col>
                    <Col>
                        <Description>
                            SD Hacks has been one of the largest hackathons in
                            California since its inception back in 2015. We take
                            pride in being a fully student organized event,
                            while partnering with numerous other student-run
                            engineering organizations at UC San Diego.
                        </Description>
                        <Description>
                            SD Hacks 2021 will provide the support and
                            mentorship necessary to develop innovative software
                            projects. With mentorship coming from a variety of
                            engineering disciplines and companies, SD Hacks 2021
                            is shaping up to become an unforgettable 36 hours of
                            collaboration, empowerment, and innovation. This
                            year, SD Hacks will be going completely virtual and
                            bringing the hackathon to you.
                        </Description>
                    </Col>
                </Row>
            </StyledContainer>
            <Train className="train"/>
            <Trees className="trees"/>
        </AboutSection>
    );
};

const AboutSection = styled.section`
    background-color: var(--orange-light);
    position: relative;

    .train {
        position: absolute;
        bottom: 0%;
        left: 0%;
        width: 100%;

        @media (max-width: 576px) {
            display: none;
        }
    }

    .trees {
        position: absolute;
        bottom: -5%;
        right: 0%;
        width: 40%;

        @media (max-width: 1375px) {
            bottom: -7%;
        }

        @media (max-width: 920px) {
            bottom: -8%;
        }

        @media (max-width: 800px) {
            bottom: -9%;
        }

        @media (max-width: 576px) {
            display: none;
        }
    }

`;

const StyledContainer = styled(Container)`
    color: var(--dark);
    font-family: Trap, sans-serif;
    padding-top: 15rem;
    padding-bottom: 18rem;

    @media (max-width: 576px) {
        padding-bottom: 15rem;
    }
`;

const Title = styled.h1`
    font-weight: 900;
    font-size: clamp(2rem, 15vw, 5rem);
    margin-bottom: 2rem;

    span {
        color: var(--orange);
        font-weight: 900;
        font-size: 1em;
    }
`;

const Description = styled.p`
    font-weight: 300;
    font-size: 1em;
    line-height: 160%;
    margin-bottom: 2rem;
`;

export default About;
