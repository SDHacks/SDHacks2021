import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-scroll-parallax';
import FaqData from '../../data/SDHacksFAQ';
import Rules from '../../assets/svg/AreThereAnyRules.svg';
import Big from '../../assets/svg/HowBigCanTeamsBe.svg';
import Fee from '../../assets/svg/RegistrationFee.svg';
import Design from '../../assets/svg/WhatCanIBuildDesign.svg';
import Mentor from '../../assets/svg/WhatDoVolunteersMentorDo.svg';
import Team from '../../assets/svg/WhatIfIDontHaveATeam.svg';
import Hackathon from '../../assets/svg/WhatIsAHackathon.svg';
import Attend from '../../assets/svg/WhoCanAttend.svg';

const Faq = () => {
    return (
        <FaqWrapper>
            <Container className="faq mt-5">
                <h1 className="title">
                    frequently asked
                    <br />
                    <span className="sub">QUESTIONS</span>
                </h1>
            </Container>
	    <Container>
		<img src={Rules} className="circle-img" alt="" />
		<img src={Big} className="circle-img" alt="" />
		<img src={Fee} className="circle-img" alt="" />
		<img src={Design} className="circle-img" alt="" />
		<img src={Mentor} className="circle-img" alt="" />
                <img src={Team} className="circle-img" alt="" />
                <img src={Hackathon} className="circle-img" alt="" />
                <img src={Attend} className="circle-img" alt="" />
	    </Container>
        </FaqWrapper>
    );
};

const FaqWrapper = styled.section`
    background: white;
    position: relative;

    .title {
        font-weight: 900;
	font-family: Trap, sans-serif;
        font-size: clamp(2rem, 10vw, 3rem);
        color: var(--yellow-light);
        margin-bottom: 3rem;

        span {
            color: var(--green);
        }
    }

    .circle-img {
	height: auto;
	width: auto;
	max-width: 600px;
	max-height: 600px;
	padding-top: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
	padding-left: 20px;
    }
`;

export default Faq;
