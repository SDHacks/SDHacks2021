import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';
const About = () => {
    return (
        <AboutContainer className="about">
            <Container>
                <h1
                    css={`
                        font-weight: 800;
                        font-size: clamp(2rem, 15vw, 5rem);
                    `}
                >
                    WHAT IS SD HACKS
                </h1>
                <div
                    css={`
                        font-weight: 150;
                        font-size: 30px;
                    `}
                >
                    <p>
                    SD Hacks has been one of the largest hackathons in California since its 
                    conception back in 2015. We take pride in being a fully student-organized 
                    event run by the Triton Engineering Student Council (TESC) at UCSD. We partner 
                    with numerous other student-run engineering organizations at UC San Diego to 
                    lead technical workshops and host social events. This year, SD Hacks 2022 will 
                    be entirely virtual and is shaping up to become an unforgettable 36 hours of 
                    collaboration, empowerment, and innovation.{' '}
                    </p>{' '}
                    <p></p>
                </div>
            </Container>
        </AboutContainer>
    );
};

const AboutContainer = styled.section`
    background-color: var(--yellow);
    color: var(--dark);
    padding: 5% 0;

    h1 {
        text-align: center;
        margin-bottom: 2%;
    }
    h2 {
        color: var(--gray);
    }
    p {
        font-size: 80%;
    }
`;
export default About;
