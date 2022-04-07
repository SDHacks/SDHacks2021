import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';

import tierImg from '../../assets/svg/sponsor-tiers-sdhacks2022.svg';

const tiersTable = () => {
    return (
        <TierContainer className='tiers'>
            <Container>
                <Row md={1} sm={1}>
                    <h1
                        style={{
                            fontWeight: '900',
                            fontSize: 'clamp(2rem, 15vw, 5rem)',
                        }}
                    >
                        SPONSOR TIERS
                    </h1>
                </Row>
                <Row md="auto" sm={1}>
                    <img src={tierImg} alt="" style={{
                        maxWidth: '60vw',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }} />
                </Row>
            </Container>
        </TierContainer>
    );
};

const TierContainer = styled.div`
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

export default tiersTable;
