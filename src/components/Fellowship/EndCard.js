import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';

import HeroImg from '../../assets/svg/building-hero-bl.svg';

const endTable = () => {
    return (
        <EndContainer className='end'>
            <Container>
                <br></br>
                <br></br>
                <Row md={1} sm={1}>
                    <h1
                        style={{
                            fontWeight: '900',
                            fontSize: 'clamp(2rem, 15vw, 8rem)',
                        }}
                    >
                        THANK YOU
                        <br></br>
                        FOR
                        <br></br>
                        SPONSORING!
                    </h1>
                </Row>
            </Container>
        </EndContainer>
    );
};

const EndContainer = styled.div`
    background-color: var(--yellow-light);
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

export default endTable;
