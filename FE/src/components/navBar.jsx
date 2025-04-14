/**
 Elijah Atta-Konadu
 4/14/2024
 Navigation bar
*/

import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../reducers/userSlice';
import { Link } from 'react-router-dom'

import "./navBar.css";

function NavBar() {
    const navRef = useRef(null); // Reference to the nav element
    const [isNavVisible, setIsNavVisible] = useState(false); // State to track navbar visibility

    const showNavBar = () => {
        setIsNavVisible(!isNavVisible); // Toggle the visibility state
        if (navRef.current) {
            navRef.current.classList.toggle("responsive_nav");
        }
    };

    const navigate = useNavigate();
    const theuser = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    function userLogout() {
        dispatch(logout());
        const userlogout = googleLogout();
        console.log(userlogout);
        navigate("/");
    }

    function UserStatus() {
        if (theuser !== 'unknownuser') {
            console.log(theuser)
            return ([
                <Link to="/myfood"><button>My Food</button></Link>,
                <Link to="/mylist"><button>My List</button></Link>,
                <button onClick={userLogout}>Logout</button>,
            ])
        } 
        return <a href="/login">Login</a>
    };

    return (
        <header>
            <h3 href="/">HEALTHY CHOICE</h3>
            <nav ref={navRef} className={isNavVisible ? "responsive_nav" : ""}>
                <Link to="/" aria-current="page">
                <button> Home</button>
                </Link>
                <UserStatus />

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
