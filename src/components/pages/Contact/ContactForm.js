import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaArrowUp } from "react-icons/fa";

const ContactForm = () => {
    return (
        <Form>
            <Row>
                <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Form.Group controlId="formName">
                        <Form.Control style={{ float: "right" }} type="name" placeholder="Enter your name" />
                    </Form.Group>
                </Col>
                <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Form.Group controlId="formEmail">
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Form.Group controlId="formTopic">
                        <Form.Control style={{ float: "right" }} type="topic" placeholder="Enter a topic" />
                    </Form.Group>
                </Col>
                <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Form.Group controlId="formTitle">
                        <Form.Control type="title" placeholder="Enter your title" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className="textarea-col">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="5" placeholder="Enter your message" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className="button-contact-col">
                    <Button variant="info">Send Message</Button>
                </Col>
            </Row>
            <Row>
                <Col className="icon-contact-col">
                    <a href="#home"><FaArrowUp className="contact-arrow-up" /></a>
                </Col>
            </Row>
        </Form>
    )
};

export default ContactForm;