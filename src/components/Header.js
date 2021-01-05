import React, { useEffect, useMemo } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'styled-components/macro';
import $ from 'jquery';

import Logo from '../assets/logo-header.png';

const Header = () => {
    const navLinks = useMemo(
        () => ['about', 'tracks', 'faq', 'sponsors', 'contact'],
        []
    );

    useEffect(() => {
        navLinks.forEach((name) => {
            $(`a[href='#${name}']`).on('click', () => {
                $('html,body').animate(
                    {
                        scrollTop: $(`.${name}`).offset().top,
                    },
                    'slow'
                );
            });
        });

        return () => {
            navLinks.forEach(({ href }) => $(`a[href='${href}']`).off());
        };
    }, [navLinks]);

    return (
        <Navbar
            bg="orange-light"
            expand="sm"
            css={`
                font-weight: 900;

                .navbar-nav {
                    margin-right: 9rem;
                    text-transform: uppercase;
                }

                .nav-link {
                    transition: color 0.1s;
                }
            `}
        >
            <Container>
                <Navbar.Brand href="#" className="mx-auto mr-md-auto">
                    <img src={Logo} alt="logo" height="40" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        {navLinks.map((name, i) => (
                            <Nav.Link href={`#${name}`} key={i}>
                                {name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
