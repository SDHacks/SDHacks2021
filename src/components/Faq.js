import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import FaqData from '../data/SDHacksFAQ';

const Faq = () => {
    return (
        <FaqWrapper>
            <Container>
                <h1 className="title">
                    frequently asked
                    <br />
                    <span className="sub">QUESTIONS</span>
                </h1>

                <Row>
                    {FaqData.map((obj, i) => (
                        <Col
                            lg={6}
                            md={10}
                            xs={12}
                            key={i}
                            className="card-col"
                        >
                            <div className="card-wrapper">
                                <div className="card-main">
                                    <div className="card-front">
                                        <h2>{obj.question}</h2>
                                    </div>
                                    <div className="card-back">
                                        <h2>{obj.question}</h2>
                                        {obj.answer}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </FaqWrapper>
    );
};

const FaqWrapper = styled.section`
    background: #d2f6fb;
    padding: 5rem 0;

    .title {
        font-weight: 900;
        font-size: clamp(2rem, 10vw, 3rem);
        color: var(--dark);
        margin-bottom: 3rem;

        span {
            color: var(--cyan);
        }
    }

    .card-col {
        min-height: 35rem;
    }

    .card-wrapper {
        -webkit-backface-visibility: hidden;
        -webkit-perspective: 1000;
        perspective: 1000px;
        height: 80%;
        width: 85%;
        margin-bottom: 5rem;
    }

    .card-main {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        -webkit-transition: -webkit-transform 0.8s;
        transform-style: preserve-3d;
    }

    .card-wrapper:hover .card-main {
        transform: rotateY(180deg);
    }

    .card-front {
        display: flex;
        place-items: center;
        padding: 0 10%;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        box-shadow: 15px 15px 0px 0px var(--dark);
        background-color: var(--cyan);

        h2 {
            font-size: 2.5rem;
            font-weight: 900;
            color: var(--dark);
        }
    }

    .card-back {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 10%;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background-color: #181727;
        transform: rotateY(180deg);
        box-shadow: 15px -15px 0px 0px var(--cyan);

        h2 {
            font-size: clamp(1.3rem, 2vw, 1.5rem);
            font-weight: 900;
            color: var(--cyan);
            margin-bottom: 1rem;
        }

        p {
            font-size: clamp(1rem, 1.5vw, 18px);
            color: white;
            margin-bottom: 0;

            a {
                color: var(--cyan);
            }
        }

        p + p {
            margin-top: 1rem;
        }
    }

    @media only screen and (max-width: 768px) {
        .card-wrapper {
            width: 95%;
        }
    }
`;

export default Faq;
