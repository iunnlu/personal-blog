import React from 'react';
import Navbar from './Navbar';
import SocialIcons from './SocialIcons';
import HomeContent from './HomeContent';

import { Image } from 'react-bootstrap';
import homeImage from '../../../assets/images/home-image.png';
import './homeStyles.scss';

const Home = () => {
    return (
        <section className="home" id="home">
            <Navbar />
            <SocialIcons />
            <HomeContent />
            <div className="home-image">
                <Image className="custom-image" src={homeImage} />
            </div>
        </section>
    )
};

export default Home;