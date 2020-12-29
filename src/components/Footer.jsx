import React from 'react'
import { ThemeContext } from '../AppDelegate'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {

    const theme = useContext(ThemeContext)

    const styles = {
        background: theme.style.palette.neutralLighter,
        color: theme.style.palette.neutralDark
    };

    const activeStyle = {
        color: theme.style.palette.themePrimary
    };

    const navStyle = {
        color: theme.style.palette.black
    };

    return (
        <footer>
            <div style={styles}>
                <div className="py-5">
                    <div className="container">
                        <div className="row pb-5">
                            <div className="col py-3">
                                <h3>About</h3>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/">Home</Link>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/competitions">Competitions</Link>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/team">Our Team</Link>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/robots">Our Robots</Link>
                            </div>
                            <div className="col py-3">
                                <h3>Resources</h3>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/calender">Calendar</Link>
                                <a style={navStyle} className="text-decoration-none d-block" href="https://flic.kr/ps/3b8mmU">Gallery</a>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/resources">Documents and Resources</Link>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/signin">Sign In</Link>
                            </div>
                            <div className="col py-3">
                                <h3>Community</h3>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/blog">Social Media</Link>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/projects">Projects</Link>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/sponsors">Sponsors</Link>
                                <Link style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/contact">Contact Us</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="pb-5" >Copyright &copy; {new Date().getFullYear()} BNCHS Sentinels. All Rights Reserved.</p>
                            <p>FIRST&reg;, the FIRST&reg; logo, FIRST&reg; Robotics Competition, and FIRST&reg; Tech Challenge are trademarks of For Inspiration and Recognition of Science and Technology (FIRST). LEGO&reg; is a registered trademark of the LEGO Group. FIRST&reg; LEGO&reg; League is a jointly held trademark of FIRST and the LEGO Group. &copy; 2020 FIRST. All rights reserved. FI084</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}