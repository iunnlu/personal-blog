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
                            Web Designer
                        </p>
                        <p id="person-content">
                            Lorem ipsum dolor sit amet,Stet clita kasd gubergren,
                            no sea takimata sanctus est is thelorem ipsum dolor sit amet.
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore is
                            the magna aliquyam.
                        </p>
                        <Button variant="primary">Contact Me</Button>
                        <Button variant="outline-primary" href="#about">Explore</Button>
                    </Col>
                </Row>
            </Container>
    )
};

export default HomeContent;