import React, {Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import circle from "../assets/Team/circle.svg"

import Anurag from "../assets/Team/Anurag.jpg"
import Johnny from "../assets/Team/Johnny.png"
import Oscar from "../assets/Team/Oscar.jpeg"
import Sid from "../assets/Team/Roof Pic - Siddharth Nag.jpg"
import Sarayu from "../assets/Team/slide-text-bg.png"
import Shin from "../assets/Team/Shin.jpeg"
import Suditi from "../assets/Team/Suditi.jpg"
import Building_tl from "../assets/svg/building-footer-tl.svg"

const Team = () => {
        const desStyle = {
                color: "black",
                'font-weight': '600',
                'font-size': '70%',
                'line-height': '15px'
        };

        return (
                <TeamSection>
                        <TeamHeader>meet the <span style={{color: "#81CB72"}}>team</span></TeamHeader>
                        <TeamContainer fluid>
                                <TeamRow xl={4} md={1} sm={1} xs={1}>
                                        <TeamCol />
                                        <TeamCol>
                                                <MemberContainer>
                                                        <Member src={Sid}/>
                                                        <Description>Siddharth Nag<br/><span style={desStyle}>SD Hacks Co-Director</span></Description>
                                                </MemberContainer>
                                        </TeamCol>
                                        <TeamCol>
                                                <MemberContainer>
                                                        <Member src={Anurag}/>
                                                        <Description>Anurag Pamuru<br/><span style={desStyle}>SD Hacks Co-Director</span></Description>
                                                </MemberContainer>
                                        </TeamCol>
                                </TeamRow>
                                <Building src={Building_tl} />
                                <TeamRow xl={4} md={1} sm={1} xs={1}>
                                        <TeamCol />
                                        <TeamCol>
                                                <MemberContainer>
                                                        <Member src={Johnny}/><Description fluid="md">Johnny Nguyen</Description>
                                                </MemberContainer>
                                        </TeamCol>
                                        <TeamCol>
                                                <MemberContainer>
                                                        <Member src={Oscar}/><Description fluid>Oscar Acevado</Description>
                                                </MemberContainer>
                                        </TeamCol>
                                </TeamRow>
                                <TeamRow xl={4} md={1} sm={1} xs={1}>
                                        <TeamCol />
                                        <TeamCol>
                                                        <MemberContainer>
                                                                <Member src={Sarayu}/><Description fluid>Sarayu Pai</Description>
                                                        </MemberContainer>
                                        </TeamCol>
                                        <TeamCol>
                                                <MemberContainer>
                                                        <Member src={Shin}/><Description fluid>Shin Ehara</Description>
                                                </MemberContainer>
                                        </TeamCol>
                                       
                                </TeamRow>
                                <TeamRow xl={4} md={1} sm={1} xs={1}>
                                        <TeamCol />
                                        <TeamCol>
                                                <MemberContainer>
                                                        <Member src={Suditi}/><Description fluid>Suditi Bhatt</Description>
                                                </MemberContainer>
                                        </TeamCol>
                                </TeamRow>
                        </TeamContainer>
                </TeamSection>
        );
}


const TeamSection = styled.section`
        background-color: #191826;
        width: 100%;
        font-family: Trap, sans-serif;
`;
const TeamHeader = styled.h1`
        color: white;
        margin-bottom: 1.5em;
        padding-top: 5%;
        text-align: center;
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 53px;
`;
const TeamContainer = styled(Container)`
`;

const TeamRow = styled(Row)`
        color: #81CB72;
`;
const TeamCol = styled(Col)`
        margin-bottom: 2%;
`;

const MemberContainer = styled(Container)`
        position: relative;
`;
const Member = styled.img`
        height: auto;
        max-width: 100%;
        border-radius: 50%;
`;
const Description = styled(Container)`
        background-color: white;
        position: absolute;
        bottom: 0;
        text-align: center;
        font-weight: 900;
        font-size: 0.8em;
        padding-top: 2%;
        width: auto;
        height: 30%;
`;

const Building = styled.img`
        max-width: 30%;
        height: auto;
        position: absolute;
        left: 0;
`;

export default Team;