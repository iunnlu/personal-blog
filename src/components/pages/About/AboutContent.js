import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const AboutContent = () => {
    return (
        <Container className="about-content">
            <Row>
                
                <Col className="photo-col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-7">
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                ><Image
                src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                rounded
            /></div>
                    
                </Col>
                <Col className="content-col col-12 col-sm-12 col-md-12 col-lg-4 col-xl-5">
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                ><p className="about-title">
                ABOUT ME
            </p>
            <p className="about-me">
                I was born in 1996 in Istanbul. I'm living here since I'was born. I'm from Bilecik and have not got brother or sister.
                I started to study computer engineering in Sakarya in 2014. I studied at the language school for 1 year when I started university and finished successfully. I graduated from university with a grade average of 2.93 in 2020.
            </p>
            <p className="about-me">
                I completed my software internship abroad before graduating. I worked as a Frontend Developer in an ERP company in Slovenia for 3 months. I think that working abroad adds a lot to me.
                After my graduation, I learned react native and designed the corona app application for mobile phones. I follow various courses on Java, Spring, Web Design and I try to improve myself.
            </p>
            <Button variant="outline-info">Download CV</Button></div>
                    
                </Col>
            </Row>
        </Container>
    )
};

export default AboutContent;