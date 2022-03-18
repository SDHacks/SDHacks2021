import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';

import StatsImg from '../../assets/svg/stats-sdhacks2022.svg';

const provide = () => {
    return (
        <ProvideContainer className="benefits">
            <Container>
                <h1
                    style={{
                        fontWeight: '900',
                        fontSize: 'clamp(2rem, 15vw, 5rem)',
                    }}
                >
                    WHY BE A SPONSOR?
                </h1>
                <Row md={1} sm={1}>
                    {provideInfo.map((infos, i) => (
                        <Col key={i} className="my-4">
                            <h2>{infos.title}</h2>
                            <p>{infos.info}</p>
                        </Col>
                    ))}
                </Row>
                <h1
                    style={{
                        fontWeight: '900',
                        fontSize: 'clamp(2rem, 15vw, 5rem)',
                    }}
                >
                    BENEFITS EXPLAINED
                </h1>
                <Row md={1} sm={1}>
                    {explainInfo.map((infos, i) => (
                        <Col key={i} className="my-4">
                            <h2>{infos.title}</h2>
                            <p>{infos.info}</p>
                        </Col>
                    ))}
                </Row>
                <Row md={1} sm={1}>
                    <img src={StatsImg} alt="" width="" />
                </Row>
            </Container>
        </ProvideContainer>
    );
};

const provideInfo = [
    {
        title: 'OUTREACH',
        info:
            'SD Hacks is an excellent way to establish your brand among hundreds of talented participants both from the UCSD community and worldwide. Teach hackers what your company is all about by hosting talks and workshops, getting featured on our online outreach channels, and branding your logo on swag and prizes.',
    },
    {
        title: 'TECH',
        info:
            'A great way to market your technology to hackers is to let them build with it. Let eager SD Hacks developers build with your API. Let them discover new, unforeseen use cases for your technologies while they gain experience with valuable tools!',
    },
    {
        title: 'RECRUITING',
        info:
            'At SD Hacks, we strive to bring together a unique pool of solution-oriented hackers from a wide variety of disciplines and backgrounds. We invite the top talent from across the world and, not to mention, a hand-picked group of hackers from UCSD’s 8000+ engineering students.',
    },
];

const ProvideContainer = styled.div`
    background-color: var(--orange-light);
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

const explainInfo = [
    {
        title: 'DISCORD CHANNEL',
        info:
            'Get your own Discord Channel where you are able to interact with hackers through text and voice channels. Make announcements, answer questions, and spread the news about your company’s products and services.',
    },
    {
        title: 'TECH TALK ($150)',
        info:
            'Conduct a live streamed, recorded 30 minute tech talk to hackers about your technology/your company.',
    },
    {
        title: 'WORKSHOPS ($250)',
        info:
            'Conduct a live streamed, recorded 30min-1hr minute workshop for hackers where they can learn how to use your technology and give feedback to mentors.',
    },
    {
        title: 'OPENING/CLOSING CEREMONY SPEAKER ($250)',
        info:
            'Give a 10 minute livestreamed keynote speech at the beginning or end of the hackathon to all participants.',
    },
    {
        title: 'HACKATHON CHALLENGE ($250)',
        info:
            'Offer participants your own individual hackathon challenge where you can reward projects for the most innovative hack using your API. Judging for these challenges will be handled by your mentors.',
    },
    {
        title: 'CUSTOM PRIZE',
        info:
            'Offer the winners of your hackathon challenge a personalized/branded prize.',
    },
    {
        title: 'API GATEWAY + DEMO',
        info:
            'Give SD Hacks participants an opportunity to use your proprietary API gateway.',
    },
    {
        title: 'REGISTRANT RESUME ACCESS ($250)',
        info:
            'Gain access to a packet of all SD Hacks attendee resumes.',
    },
];

export default provide;
