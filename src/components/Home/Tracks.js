import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as Learning } from '../../assets/icons/learning.svg';
import { ReactComponent as Sustainability } from '../../assets/icons/sustainability.svg';
import { ReactComponent as Urban } from '../../assets/icons/urban.svg';
import { ReactComponent as Civic } from '../../assets/icons/civic.svg';

// import Building from '../../assets/svg/building-jacobs.svg';

const Tracks = () => {
    const [showTrack, setShowTrack] = useState(false);
    const [trackInfo, setTrackInfo] = useState({});
    const handleClose = () => setShowTrack(false);
    const handleShow = (i) => {
        setShowTrack(true);
        setTrackInfo(tracks[i]);
    };

    const tracks = [
        {
            name: 'health and well being',
            icon: <Learning />,
            description:
                'After 2 years of ups and downs, school closures, and isolation; many of us have had our mental and overall physical health suffer greatly. Teams in this track are encouraged to create solutions that can boost any form of health, whether that be focusing on mental health or even boosting an individuals physical activity.',
        },
        {
            name: 'civic engagement',
            icon: <Civic />,
            description:
                'In a country blighted by many challenges like rising concerns of inequity, and immense social changes, there is a need for more voices to be heard. Hackers are encouraged to develop solutions to amplify the voices of everyday people.',
        },
        {
            name: 'sustainability',
            icon: <Sustainability />,
            description:
                'Our climate is changing and it takes a systematic effort to combat it. This track encourages hackers to develop solutions tackling the challenges of climate change or educating the public about the environmental challenges we face.',
        },
        {
            name: 'community',
            icon: <Urban />,
            description:
                'In a growing society, we require new solutions tackling societal, environmental, and economic issues. This track spans everything from small neighborhood improvements to ambitious endeavors in large cities. Potential solutions include reducing carbon emissions, tackling transportation inequity, infrastructure improvements, or affordable housing.',
        },
        
    ];

    return (
        <TracksSection className="tracks">
            <Container>
                <Row>
                    <Col lg={5} md={12}>
                        <Title>
                            <span>this year's</span>
                            <br />
                            TRACKS
                        </Title>
                    </Col>
                    <Col className="track-container">
                        {tracks.map(({ name, icon }, i) => (
                            <TracksCard onClick={() => handleShow(i)} key={i}>
                                <Row>
                                    <Col md="8">
                                        <div className="track-num">
                                            TRACK {i + 1}
                                        </div>
                                        <div className="track-name">{name}</div>
                                    </Col>
                                    {/* <Col className="svg">{icon}</Col> */}
                                </Row>
                            </TracksCard>
                        ))}
                    </Col>
                </Row>
            </Container>
            {/* <img src={Building} className="building-img" alt="" /> */}

            <Modal size="lg" show={showTrack} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{trackInfo.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{trackInfo.description}</Modal.Body>
            </Modal>
        </TracksSection>
    );
};

const TracksSection = styled.section`
    background-color: black;
    position: relative;
    padding: 10rem 0;

    .track-container {
        z-index: 1;
    }
`;

const Title = styled.h1`
    color: var(--yellow);
    font-weight: 500;
    font-size: clamp(2rem, 15vw, 5rem);

    span {
        color: var(--bright-green);
        font-weight: 400;
        font-size: 1em;
    }
`;

const TracksCard = styled.div`
    color: var(--yellow);
    font-weight: 400;
    border: 0.5em solid;
    border-radius: 1.5em;
    padding-top: 1.5em;
    padding-bottom: 1em;
    margin-bottom: 2.5em;
    cursor: pointer;

    .track-num {
        color: var(--gray);
        background-color: var(--yellow);
        border-radius: 0 0.4em 0.4em 0;
        padding: 0.2em 0.5em;
        padding-bottom: 0.1em;
        width: fit-content;
        text-align: center;
    }

    .track-name {
        font-size: clamp(1rem, 10vw, 2.5rem);
        text-shadow: 0px 4px #201f26;

        margin-left: 1em;
    }

    .svg {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Tracks;
