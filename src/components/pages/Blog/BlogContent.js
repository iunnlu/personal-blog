import React, { useState } from 'react';
import { Container, Row, Col, CardDeck, Card, Button, CardColumns } from 'react-bootstrap';
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import $ from 'jquery';

const BlogContent = () => {
    const blogs = [
        { id: 1, date: "1 February 2020", title: "WhatsApp to stop working on millions of phones", content: "Messaging service WhatsApp will no longer work on millions of smartphones from 1 February. Android and iPhone devices which only support outdated operating systems will no longer be able to run the Facebook-owned app.", image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/15218/production/_110725568_gettyimages-1048818328.jpg" },
        { id: 2, date: "1 February 2020", title: "Facebook settles facial recognition disputes", content: "Facebook has settled a long-running legal dispute about the way it scans and tags people's photos. It will pay $550m (£421m) to a group of users in Illinois, who argued that its facial recognition tool was in violation of the state's privacy laws.", image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/127E6/production/_110705757_facialrecognitionwoman.gif" },
        { id: 3, date: "1 February 2020", title: "Sonos apologises for revealing customer email addresses", content: "Speaker-maker Sonos has apologised after accidentally revealing the email addresses of hundreds of its customers to each other. The firm upset people last week by saying it will stop issuing software updates for its older devices from May.", image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/C3AA/production/_110709005_sonos-getty.jpg" },
        { id: 4, date: "1 February 2020", title: "MEPs vote for universal charging cable for mobiles", content: "Members of the European Parliament have voted in favour of introducing a single universal charging method for mobile phones, which Apple had argued against. The resolution passed with 582 votes in favour to 40 against. MEPs will now urge the European Commission (EC) to adopt the new rules.", image: "https://ichef.bbci.co.uk/news/624/cpsprodpb/176D2/production/_110545959_usb_cables640-nc.png" },
        { id: 5, date: "1 February 2020", title: "Huduma Namba: Kenya court halts biometric ID over data fears", content: "Kenya's High Court has halted a controversial biometric ID scheme until new data protection laws are enacted. Sensitive information, such as contact details, fingerprints and a person's profession, was collected last year.", image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/12D9C/production/_110721277_gettyimages-1144218760.jpg" },
        { id: 6, date: "1 February 2020", title: "https://ichef.bbci.co.uk/news/660/cpsprodpb/12D9C/production/_110721277_gettyimages-1144218760.jpg", content: "Amazon sales soared over the Christmas season, rising 21% from the previous year, in sharp contrast to weakness reported by other retailers. The e-commerce juggernaut said it earned $87bn (£66bn) in sales in the last three months of 2019, well ahead of analyst expectations.", image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/5CAE/production/_107762732_a.png" }
    ]
    const [minValue, setMinValue] = useState(3);
    const renderContent = () => {
        return blogs.slice(0, minValue).map(item => {
            return (
                <Card key={item.id}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Text id="card-date">{item.date}</Card.Text>
                        <Card.Title>{item.title}</Card.Title>
                        <svg className="Line_1" viewBox="0 0 400 15">
                            <path fill="transparent" stroke="rgba(100,120,149,1)" strokeWidth="6px" strokeLinejoin="miter" strokeLinecap="butt" strokeDasharray="20" strokeDashoffset="0" strokeMiterlimit="4" shapeRendering="auto" id="Line_1" d="M 0 0 L 97.92683410644531 0">
                            </path>
                        </svg>
                        <Card.Text id="card-content">
                            {item.content}
                        </Card.Text>
                        <Card.Text style={{ cursor: "pointer" }} id="show-more">Show More <FiArrowRight /></Card.Text>
                    </Card.Body>
                </Card>
            )
        });
    }
    const clickButton = () => {
        setMinValue(blogs.length);
        $(".button-blog-col").attr('style', 'display: none');
        $('.card-col').attr('style', 'margin-bottom: 10vh');
    }
    return (
        <Container>
            <Row>
                <Col className="card-col">
                    <CardColumns>
                        {renderContent()}
                    </CardColumns>
                </Col>
            </Row>
            <Row>
                <Col className="button-blog-col">
                    <p onClick={clickButton}>Load More <FiArrowDown /></p>
                </Col>
            </Row>
        </Container>
    )
};

export default BlogContent;