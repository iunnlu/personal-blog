import React from 'react';
import { Container } from 'react-bootstrap';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import './blogStyles.scss';

const Blog = () => {
    return(
        <section className="blog" id="blog ">
            <Container>
                <BlogHeader />
                <BlogContent />
            </Container>
        </section>
    )
};

export default Blog;