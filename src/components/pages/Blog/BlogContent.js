import React from 'react';
import { Row, Col, CardDeck, Card, Button, CardColumns } from 'react-bootstrap';
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

const BlogContent = () => {
    return (
        <>
            <Row>
                <Col>
                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src="https://odtukaltev.com.tr/wp-content/uploads/2018/04/person-placeholder.jpg " />
                            <Card.Body>
                                <Card.Text id="card-date">26th October,2019</Card.Text>
                                <Card.Title>I Used The Web For A Day On A 50 MB Budget</Card.Title>
                                <svg class="Line_1" viewBox="0 0 400 15">
                                    <path fill="transparent" stroke="rgba(100,120,149,1)" stroke-width="6px" stroke-linejoin="miter" stroke-linecap="butt" stroke-dasharray="20" stroke-dashoffset="0" stroke-miterlimit="4" shape-rendering="auto" id="Line_1" d="M 0 0 L 97.92683410644531 0">
                                    </path>
                                </svg>
                                <Card.Text id="card-content">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Card.Text style={{ cursor: "pointer" }} id="show-more">Show More <FiArrowRight /></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://odtukaltev.com.tr/wp-content/uploads/2018/04/person-placeholder.jpg " />
                            <Card.Body>
                                <Card.Text id="card-date">26th October,2019</Card.Text>
                                <Card.Title>I Used The Web For A Day On A 50 MB Budget</Card.Title>
                                <svg class="Line_1" viewBox="0 0 400 15">
                                    <path fill="transparent" stroke="rgba(100,120,149,1)" stroke-width="6px" stroke-linejoin="miter" stroke-linecap="butt" stroke-dasharray="20" stroke-dashoffset="0" stroke-miterlimit="4" shape-rendering="auto" id="Line_1" d="M 0 0 L 97.92683410644531 0">
                                    </path>
                                </svg>
                                <Card.Text id="card-content">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Card.Text style={{ cursor: "pointer" }} id="show-more">Show More <FiArrowRight /></Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://odtukaltev.com.tr/wp-content/uploads/2018/04/person-placeholder.jpg " />
                            <Card.Body>
                                <Card.Text id="card-date">26th October,2019</Card.Text>
                                <Card.Title>I Used The Web For A Day On A 50 MB Budget</Card.Title>
                                <svg class="Line_1" viewBox="0 0 400 15">
                                    <path fill="transparent" stroke="rgba(100,120,149,1)" stroke-width="6px" stroke-linejoin="miter" stroke-linecap="butt" stroke-dasharray="20" stroke-dashoffset="0" stroke-miterlimit="4" shape-rendering="auto" id="Line_1" d="M 0 0 L 97.92683410644531 0">
                                    </path>
                                </svg>
                                <Card.Text id="card-content">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Card.Text style={{ cursor: "pointer" }} id="show-more">Show More <FiArrowRight /></Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Col>
            </Row>
            <Row>
                <Col className="button-col">
                    <p>Load More <FiArrowDown /></p>
                </Col>
            </Row>
        </>
    )
};

export default BlogContent;