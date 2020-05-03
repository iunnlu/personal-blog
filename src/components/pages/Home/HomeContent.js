import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomeContent = () => {
    return (
            <Container className="home-content-container">
                <Row>
                    <Col>
                        <span id="welcome-title">
                            Welcome! I'M
                        </span>
                        <h3>İlhan Ünlü</h3>
                        <p id="title">
                            Software Developer
                        </p>
                        <p id="person-content">
                            You can learn lots of things about me in this website. I'm currently searching a new job as a software developer.
                            I'm working on different project in Java, React and following courses in Udemy platform. You can click on the link below for more information about me.
                        </p>
                        <Button variant="primary">Contact Me</Button>
                        <Button variant="outline-primary" href="#about">Explore</Button>
                    </Col>
                </Row>
            </Container>
    )
};

export default HomeContent;