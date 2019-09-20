import React from 'react';
import { Container } from '@material-ui/core';
import Contact from './contact';
import Socials from './socials';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Contact />
                <Socials />
            </Container>
        </footer>
    )
}

export default Footer