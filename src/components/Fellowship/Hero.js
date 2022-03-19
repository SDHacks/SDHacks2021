import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

import HeroImg from '../../assets/svg/building-hero-bl.svg';

const Hero = () => {
    return (
        <HeroContainer>
            <Container>
                <Row xs={1} lg={2}>
                    <Col className="heading-col">
                        <h1>
                            SPONSORSHIP
                            <br />
                            DECK
                        </h1>
                        <h2>
                            April 8-10, 2022
                        </h2>

                        {/* <Button
			    onClick={() => setVisibility(true)}
                            size="lg"
                            className="mt-3"
                        >
                            Buy Now
                        </Button>
			*/}
			<h2>
			    Payment form coming soon!
			</h2>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <h5 style={{textAlign: 'center'}}>
                    Virtual • 36 hours • 3000+ applicants • 700 attendees • 100+ projects
                </h5>
            </Container>
        </HeroContainer>
    );
};


const HeroContainer = styled.section`
    background: var(--yellow-light);
    padding-top: 5rem;
    padding-bottom: 5rem;

    .heading-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-weight: 800;
            font-size: clamp(2rem, 15vw, 5rem);
            text-align: center;
        }

        p {
            margin-bottom: 3rem;
        }
    }
`;

export default Hero;
