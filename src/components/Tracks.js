import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as Learning } from '../assets/icons/learning.svg';
import { ReactComponent as Sustainability } from '../assets/icons/sustainability.svg';
import { ReactComponent as Urban } from '../assets/icons/urban.svg';
import { ReactComponent as Civic } from '../assets/icons/civic.svg';

import { ReactComponent as Building } from '../assets/svg/building-jacobs.svg';
import { ReactComponent as Train } from '../assets/svg/train-2.svg';
import { ReactComponent as Bridge } from '../assets/svg/bridge.svg';

const Tracks = () => {
    return (
        <TracksSection>
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
                            <Row>
                                <Col md="8">
                                    <div className="track-num">TRACK 1</div>
                                    <div className="track-name">remote education</div>
                                </Col>
                                <Col>
                                    <Learning />
                                </Col>
                            </Row>
                        </TracksCard>
                        <TracksCard>
                            <Row>
                                <Col md="8">
                                    <div className="track-num">TRACK 2</div>
                                    <div className="track-name">sustainability</div>
                                </Col>
                                <Col>
                                    <Sustainability />
                                </Col>
                            </Row>
                        </TracksCard>
                        <TracksCard>
                            <Row>
                                <Col md="8">
                                    <div className="track-num">TRACK 3</div>
                                    <div className="track-name">urban innovation</div>
                                </Col>
                                <Col>
                                    <Urban />
                                </Col>
                            </Row>
                        </TracksCard>
                        <TracksCard>
                            <Row>
                                <Col md="8">
                                    <div className="track-num">TRACK 4</div>
                                    <div className="track-name">civic engagement</div>
                                </Col>
                                <Col>
                                    <Civic />
                                </Col>
                            </Row>
                        </TracksCard>
                    </Col>
                </Row>
            </StyledContainer>
            <Building className="building-img" />
            <Train className="train-img" />
            <Bridge className="bridge-img" />
        </TracksSection>
    );
};

const TracksSection = styled.section`
    background-color: var(--gray);
    position: relative;
    z-index: -2;

    .building-img {
        position: absolute;
        top: 22em;
        left: 7em;
        z-index: -1;
    }

    .train-img {
        position: absolute;
        top: 49em;
        left: 0em;
        z-index: -1;
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
    padding-top: 1.5em;
    padding-bottom: 1em;
    margin-bottom: 2.5em;

    .track-num {
        color: var(--gray);
        font-size: 1em;

        background-color: var(--green);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.4em;
        border-bottom-right-radius: 0.4em;
        
        width: 5em;
        text-align: center;
    }

    .track-name {
        font-size: 2em;
        text-shadow: 0px 6px #201F26;

        margin-left: 1em;
    }
`;

export default Tracks;