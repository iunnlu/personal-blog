import React from 'react';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import { Container } from 'react-bootstrap';
import './contactStyles.scss';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <ContactHeader />
                <ContactForm />
            </Container>
        </section>
    )
};

export default Contact;