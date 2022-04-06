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
                {/*
                Tier 1: https://app.simplypay.me/Paymentframe.php?guid=295A7DB4-9B04-4EA3-A655-FE9870C5EBAC 
                Tier 2: https://app.simplypay.me/Paymentframe.php?guid=7EF60BCC-2031-4DB9-B352-9C739ACCDDDD
                Tier 3: https://app.simplypay.me/Paymentframe.php?guid=812C9D32-9FBE-4379-9B9A-57F661A22541
                Tier 4: https://app.simplypay.me/Paymentframe.php?guid=967A97B2-A7B6-4D27-8AA1-1C45167AAC38
                */}

                <Row md="auto" sm={1}>
                    <table style={{maxWidth: '60vw',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                        <colgroup>
                            <col span={1} style={{width: '30%'}} /> 
                            <col span={4} style={{width: '17.5%'}} />  
                        </colgroup>
                        
                        <tbody>
                            <th>Tier</th>
                        <th>Village</th>
                        <th>Town</th>
                        <th>City</th>
                        <th>Metropolis</th>

                        <tr>
                            <td>Price</td>
                            <td>$500</td>
                            <td>$1000</td>
                            <td>$1500</td>
                            <td>$2000</td>
                        </tr>
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}} >Outreach</td>
                        </tr>
                        <tr>
                            <td>Discord Channel</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Social Media Shoutout</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>Individual Post</td>
                            <td>Individual Post</td>
                        </tr>
                        <tr>
                            <td>Logo in Email Blasts</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>Individual Post</td>
                            <td>Individual Post</td>
                        </tr>
                        <tr>
                            <td>Tech Talk</td>
                            <td></td>
                            <td>✓</td>
                            <td>Individual Post</td>
                            <td>Individual Post</td>
                        </tr>
                        <tr>
                            <td>Workshops</td>
                            <td></td>
                            <td>1</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Custom Prize</td>
                            <td></td>
                            <td></td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Opening/Closing Ceremony Speaker</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}} >Tech</td>
                        </tr>
                        <tr>
                            <td>Hackathon Challenge</td>
                            <td></td>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>API Gateway + Demo</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}} >Recruiting</td>
                        </tr>
                        <tr>
                            <td>Registrant Resume Access</td>
                            <td></td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Mentors</td>
                            <td>2</td>
                            <td>4</td>
                            <td>∞</td>
                            <td>∞</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{ margin: 'auto', display: 'block' }}>
                                <a href='https://app.simplypay.me/Paymentframe.php?guid=295A7DB4-9B04-4EA3-A655-FE9870C5EBAC' >
                                    <button>Get Started</button>
                                </a>
                            </td>
                            <td>
                                <a href='https://app.simplypay.me/Paymentframe.php?guid=7EF60BCC-2031-4DB9-B352-9C739ACCDDDD' >
                                    <button>Get Started</button>
                                </a>
                            </td>
                            <td>
                                <a href='https://app.simplypay.me/Paymentframe.php?guid=812C9D32-9FBE-4379-9B9A-57F661A22541' >
                                    <button>Get Started</button>
                                </a>
                            </td>
                            <td>
                                <a href='https://app.simplypay.me/Paymentframe.php?guid=967A97B2-A7B6-4D27-8AA1-1C45167AAC38' >
                                    <button>Get Started</button>
                                </a>
                            </td>
                        </tr>
                        </tbody>
                        
                    </table>
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

export default tiersTable;
