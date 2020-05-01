import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import blogIcon from '../../../assets/images/blog-icon.png';

const BlogHeader = () => {
    return (
        <Row>
            <Col className="blog-header">
                <Image src={blogIcon} />
                <p>My Blog</p>
            </Col>
        </Row>
    )
};

export default BlogHeader;