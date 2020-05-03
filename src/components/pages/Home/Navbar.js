import React from 'react';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <FiMenu />
            </label>
            <div className="nav-menu">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <MdClose style={{ color:"white" }} />
                </label>
                <label className="logo">I. Unlu</label>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about me</a></li>
                    <li><a href="#blog">blog</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;