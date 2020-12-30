import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import { Container } from 'react-bootstrap';

import BuildingBottom from '../assets/svg/building-footer-b.svg';
import BuildingRight from '../assets/svg/building-footer-r.svg';

const Footer = () => {
    return (
        <StyledFooter className="">
            <Container>
                <p>
                    have any questions?
                    <br />
                    talk to us at{' '}
                    <a href="mailto:sdhacks@tesc.ucsd.edu">
                        sdhacks@tesc.ucsd.edu
                    </a>
                </p>
                <div className="logo-wrapper">
                    <h1 className="">TESC</h1>
                    <h2 className="">
                        triton engineering
                        <br />
                        student council
                    </h2>
                </div>
                <img src={BuildingBottom} alt="" />
                <img
                    src={BuildingRight}
                    alt=""
                    css={`
                        position: absolute;
                        right: 0;
                        top: -150px;
                    `}
                />
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 3rem;
    background: var(--dark);
    color: white;
    position: relative;

    p {
        text-align: center;
        font-size: clamp(1rem, 3vw, 1.5rem);

        a {
            font-weight: bold;
            color: var(--green);
        }

        a:hover {
            color: var(--green);
        }
    }

    .logo-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        color: var(--green);

        h1 {
            font-weight: 900;
            font-size: clamp(3rem, 13vw, 100px);
        }

        h2 {
            font-weight: 800;
            font-size: clamp(1rem, 5vw, 40px);
            line-height: 40px;
            position: relative;
            top: 15px;
            left: 15px;
        }
    }
`;

export default Footer;
