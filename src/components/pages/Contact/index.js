import React from 'react';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import { Container } from 'react-bootstrap';
import './contactStyles.scss';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <Container>
                    <ContactHeader />
                    <ContactForm />
                </Container>
            </div>
        </section>
    )
};

export default Contact;