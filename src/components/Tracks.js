import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as Education } from '../assets/remote-education.svg';
import { ReactComponent as Sustainability } from '../assets/sustainability.svg';
import { ReactComponent as Innovation } from '../assets/urban-innovation.svg';
import { ReactComponent as Engagement } from '../assets/civic-engagement.svg';
import { ReactComponent as Building } from '../assets/building-tracks.svg';
import { ReactComponent as Train } from '../assets/train-tracks.svg';

const Tracks = () => {
    return (
        <TracksSection className="tracks">
            <StyledContainer>
                <Row>
                    <Col xl={5} lg={6}>
                        <Title>
                            <span>this year's</span>
                            <br />
                            TRACKS
                        </Title>
                    </Col>
                    <Col>
                        <TracksCard>
                            <div>TRACK 1</div>
                            <span>remote education</span>
                            <Education />
                        </TracksCard>
                        <TracksCard>
                            <div>TRACK 2</div>
                            <span>sustainability</span>
                            <Sustainability />
                        </TracksCard>
                        <TracksCard>
                            <div>TRACK 3</div>
                            <span>urban innovation</span>
                            <Innovation />
                        </TracksCard>
                        <TracksCard>
                            <div>TRACK 4</div>
                            <span>civic engagement</span>
                            <Engagement />
                        </TracksCard>
                    </Col>
                </Row>
            </StyledContainer>
            <Building className="building-img" />
            <Train className="train-img" />
        </TracksSection>
    );
};

const TracksSection = styled.section`
    background-color: var(--gray);
    min-height: 80em;

    .building-img {
        position: absolute;
        top: 275%;
        left: 10%;
    }

    .train-img {
        position: absolute;
        top: 367%;
        left: 0%;
        width: 100%;
    }
`;

const StyledContainer = styled(Container)`
    color: white;
    padding-top: 5rem;
    padding-bottom: 5rem;
    font-family: Trap, sans-serif;
`;

const Title = styled.h1`
    color: var(--green);
    font-weight: 900;
    font-size: 2em;
    float: right;
    margin-bottom: 2rem;
    margin-right: 4rem;

    span {
        color: var(--white);
        font-weight: 900;
        font-size: 1em;
    }
`;

const TracksCard = styled.div`
    color: var(--green);
    font-weight: 900;

    border: 0.5em solid;
    border-radius: 1.5em;
    max-width: 43.625em;
    padding-top: 1.5em;
    padding-bottom: 0.25em;
    padding-left: 2em;
    margin-bottom: 2.5em;

    div {
        color: var(--gray);
        font-size: 1em;
        line-height: 1.3em;

        background-color: var(--green);
        border-radius: 0.4em;
        width: 5em;
        text-align: center;
    }

    span {
        font-size: 2em;
        text-shadow: 0px 6px #201F26;

        margin-right: 1em;
    }
`;

export default Tracks;