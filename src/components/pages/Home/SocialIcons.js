import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
    return(
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/ilhan-unlu/"><FaLinkedinIn id="linkedin-icon" /></a>
            <a href="https://github.com/iunnlu"><FaGithub id="github-icon" /></a>
            <a href="https://www.instagram.com/i.unnlu/"><FaInstagram id="instagram-icon" /></a>
        </div>
    )
};

export default SocialIcons;