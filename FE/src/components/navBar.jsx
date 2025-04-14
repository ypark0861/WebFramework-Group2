/**
 Elijah Atta-Konadu
 4/14/2024
 Navigation bar
*/


import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";

function NavBar() {
    const navRef = useRef(null); 
    const [isNavVisible, setIsNavVisible] = useState(false); 

    const showNavBar = () => {
        setIsNavVisible(!isNavVisible); 
        if (navRef.current) {
            navRef.current.classList.toggle("responsive_nav");
        }
    };

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef} className={isNavVisible ? "responsive_nav" : ""}>
                <a href="#home">Home</a>
                <a href="#About">About</a>
                <a href="#Services">Services</a>
                <a href="#Location">Contact</a>
                <button onClick={showNavBar} className="nav-btn nav-close-btn">
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showNavBar} className="nav-btn">
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;
