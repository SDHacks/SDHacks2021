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
                    <table className='maintable'>
                        <colgroup>
                            <col span={1} style={{width: '30%'}} /> 
                            <col span={4} style={{width: '17.5%'}} />  
                        </colgroup>
                        
                        <tbody>
                            <th className="labels"><h4>Tier</h4></th>
                            <th className='village'><h4>Village</h4></th>
                            <th className='town'><h4>Town</h4></th>
                            <th className='city'><h4>City</h4></th>
                            <th className='metropolis'><h4>Metropolis</h4></th>

                        <tr>
                            <td className='labels'>Price</td>
                            <td className='village'>$500</td>
                            <td className='town'>$1000</td>
                            <td className='city'>$1500</td>
                            <td className='metropolis'>$2000</td>
                        </tr>
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}} >OUTREACH</td>
                        </tr>
                        <tr>
                            <td className='labels'>Discord Channel</td>
                            <td className='village'>✓</td>
                            <td className='town'>✓</td>
                            <td className='city'>✓</td>
                            <td className='metropolis'>✓</td>
                        </tr>
                        <tr>
                            <td className='labels'>Social Media Shoutout</td>
                            <td className='village'>✓</td>
                            <td className='town'>✓</td>
                            <td className='city'>Individual Post</td>
                            <td className='metropolis'>Individual Post</td>
                        </tr>
                        <tr>
                            <td className='labels'>Logo in Email Blasts</td>
                            <td className='village'>✓</td>
                            <td className='town'>✓</td>
                            <td className='city'>Individual Post</td>
                            <td className='metropolis'>Individual Post</td>
                        </tr>
                        <tr>
                            <td className='labels'>Tech Talk</td>
                            <td className='village'></td>
                            <td className='town'>✓</td>
                            <td className='city'>Individual Post</td>
                            <td className='metropolis'>Individual Post</td>
                        </tr>
                        <tr>
                            <td className='labels'>Workshops</td>
                            <td className='village'></td>
                            <td className='town'>1</td>
                            <td className='city'>1</td>
                            <td className='metropolis'>2</td>
                        </tr>
                        <tr>
                            <td className='labels'>Custom Prize</td>
                            <td className='village'></td>
                            <td className='town'></td>
                            <td className='city'>✓</td>
                            <td className='metropolis'>✓</td>
                        </tr>
                        <tr>
                            <td className='labels'>Opening/Closing Ceremony Speaker</td>
                            <td className='village'></td>
                            <td className='town'></td>
                            <td className='city'></td>
                            <td className='metropolis'>✓</td>
                        </tr>
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}} >TECH</td>
                        </tr>
                        <tr>
                            <td className='labels'>Hackathon Challenge</td>
                            <td className='village'></td>
                            <td className='town'></td>
                            <td className='city'>1</td>
                            <td className='metropolis'>2</td>
                        </tr>
                        <tr>
                            <td className='labels'>API Gateway + Demo</td>
                            <td className='village'>✓</td>
                            <td className='town'>✓</td>
                            <td className='city'>✓</td>
                            <td className='metropolis'>✓</td>
                        </tr>
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}} >RECRUITING</td>
                        </tr>
                        <tr>
                            <td className='labels'>Registrant Resume Access</td>
                            <td className='village'></td>
                            <td className='town'>✓</td>
                            <td className='city'>✓</td>
                            <td className='metropolis'>✓</td>
                        </tr>
                        <tr>
                            <td className='labels'>Mentors</td>
                            <td className='village'>2</td>
                            <td className='town'>4</td>
                            <td className='city'>∞</td>
                            <td className='metropolis'>∞</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className='buttontable'>
                        <colgroup>
                            <col span={1} style={{width: '30%'}} /> 
                            <col span={4} style={{width: '17.5%'}} />  
                        </colgroup>

                        <tbody>
                            <tr style={{border: 'none'}}>
                                <td></td>
                                <td style={{ textAlign: 'center' }}>
                                    <a href='https://app.simplypay.me/Paymentframe.php?guid=295A7DB4-9B04-4EA3-A655-FE9870C5EBAC' >
                                        <button style={{borderRadius: '5px', border: 'none', padding: '0.5em', marginTop: '0.5em', backgroundColor: '#C4C4C4'}}>Get Started</button>
                                    </a>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <a href='https://app.simplypay.me/Paymentframe.php?guid=7EF60BCC-2031-4DB9-B352-9C739ACCDDDD' >
                                        <button style={{borderRadius: '5px', border: 'none', padding: '0.5em', marginTop: '0.5em', backgroundColor: '#81CB72'}}>Get Started</button>
                                    </a>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <a href='https://app.simplypay.me/Paymentframe.php?guid=812C9D32-9FBE-4379-9B9A-57F661A22541' >
                                        <button style={{borderRadius: '5px', border: 'none', padding: '0.5em', marginTop: '0.5em', backgroundColor: '#A0D98A'}}>Get Started</button>
                                    </a>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <a href='https://app.simplypay.me/Paymentframe.php?guid=967A97B2-A7B6-4D27-8AA1-1C45167AAC38' >
                                        <button style={{borderRadius: '5px', border: 'none', padding: '0.5em', marginTop: '0.5em', backgroundColor: '#C4C4C4'}}>Get Started</button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

    td, th {
        color: black;
    }

    tr, th {
        border-bottom: 2px solid black;
        border-top: 2px solid black;
    }

    .maintable {
        max-width: 60vw;          
        margin-left: auto;
        margin-right: auto;
    }

    .buttontable {
        max-width: 60vw;           
        margin-top: 2px;
        margin-left: auto;
        margin-right: auto;
    }

    .category {
        padding: 1em 0 1em 0;
    }

    .labels {
        background: #A0D98A;
        padding-left: 4pt;
    }

    .village {
        
        background: #C4C4C4;
        text-align: center;
    }
    .town {
        background: #81CB72;
        text-align: center;
    }
    .city {
        background: #A0D98A;
        text-align: center;
    }
    .metropolis {
        background: #C4C4C4;
        text-align: center;
    }
`;

export default tiersTable;
