import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
    return(
        <div className="social-icons">
            <FaLinkedinIn id="linkedin-icon" />
            <FaGithub id="github-icon" />
            <FaInstagram id="instagram-icon" />
        </div>
    )
};

export default SocialIcons;