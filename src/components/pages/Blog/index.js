import React from 'react';
import { Container } from 'react-bootstrap';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import './blogStyles.scss';

const Blog = () => {
    return (
        <section className="blog" id="blog">
            <div
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <Container>
                    <BlogHeader />
                    <BlogContent />
                </Container>
            </div>
        </section>
    )
};

export default Blog;