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
import veins from '../../assets/svg/veins-faq.svg';

const Faq = () => {
    return (
        <FaqWrapper>
        <img src={veins} className="veinsFaq" alt="green veins" />
            <Container className="faq mt-5">
                <h1 className="title">
                    frequently asked
                    <br />
                    <span className="sub">QUESTIONS</span>
                </h1>
                <div class="row"> 
                    <div class="column"> 
                    <img src={Rules} className="circle-img" alt="" />
                    <img src={Fee} className="circle-img" alt="" />
                    <img src={Mentor} className="circle-img" alt="" />
                    <img src={Hackathon} className="circle-img" alt="" />
                    </div>
                    <div class="column"> 
                    <img src={Big} className="circle-img" alt="" />
                    <img src={Design} className="circle-img" alt="" />
                    <img src={Team} className="circle-img" alt="" />
                    <img src={Attend} className="circle-img" alt="" />
                    </div>
                </div>
	        </Container>
        
        </FaqWrapper>
    );
};

const FaqWrapper = styled.section`
    // background: white;
    position: relative;

    .veinsFaq {
        position: absolute; 
        z-index: -1;
        width: 100%;
        height: 100%;
        @media (max-width: 700px) {
            display: none;
        }
    }

    .title {
        font-weight: 900;
	    font-family: Roboto Condensed, sans-serif;
        font-size: clamp(2rem, 10vw, 3rem);
        color: var(--yellow-light);
        margin-bottom: 3rem;

        span {
            color: var(--green);
            font-weight: 500;
        }
    }

    .circle-col {
        min-height: 35rem;
    }

    .circle-img {
        height: auto;
        width: auto;
        max-width: 600px;
        max-height: 600px;
        padding-top: 20px;
        padding-right: 50px;
        padding-bottom: 20px;
        padding-left: 20px;
    }

    .row {
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    }
    
    .column {
        flex: 50%;
        padding: 0 4px;
        text-align: center;
    }
      
    .column img {
        margin-top: 8px;
        vertical-align: middle;
    }

`;

export default Faq;
