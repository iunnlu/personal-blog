import React from 'react';
import AboutContent from './AboutContent';
import AboutHeader from './AboutHeader';
import './aboutStyles.scss';

const About = () => {
    return (
        <section className="about" id="about">
            <AboutContent />
        </section>
    )
};

export default About;