import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactHeader = () => {
    return(
        <Row>
            <Col className="header">
                <p id="header-slogan">Contact Me</p>
                <p id="header-title">Send Me a Message</p>
            </Col>
        </Row>
    )   
};

export default ContactHeader;