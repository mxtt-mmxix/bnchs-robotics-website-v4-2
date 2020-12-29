import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../AppDelegate'
import { useContext } from 'react'
import { Layer, Text, Toggle } from '@fluentui/react'
import * as Feather from 'react-feather';
import VCenter from './VCenter'

export default function Navigation(props) {

    const theme = useContext(ThemeContext)
    const [isNavOpen, setIsNavOpen] = useState(false)

    const activeStyle = {
        color: theme.style.palette.themePrimary
    }

    const navStyle = {
        color: theme.style.palette.black
    }

    if (isNavOpen) {
        return (
            <div>
                <div className="vh-100 vw-100" style={{ backdropFilter: 'blur(32px) saturate(180%)', backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'fixed', color: theme.style.palette.black, overflowY: 'scroll' }} >
                    <VCenter>
                        <div className="container">
                            <nav>
                                <div className="row py-5">
                                    <div className="col py-3">
                                        <h3 className="display-3">About</h3>
                                        <div className="fs-3">
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/">Home</NavLink>
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/competitions">Competitions</NavLink>
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/team">Our Team</NavLink>
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/robots">Our Robots</NavLink>
                                        </div>
                                    </div>
                                    <div className="col py-3">
                                        <h3 className="display-3">Resources</h3>
                                        <div className="fs-3">
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/calender">Calendar</NavLink>
                                            <a style={navStyle} className="text-decoration-none d-block" href="https://flic.kr/ps/3b8mmU">Gallery</a>
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/resources">Documents and Resources</NavLink>
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/signin">Sign In</NavLink>
                                        </div>
                                    </div>
                                    <div className="col py-3">
                                        <h3 className="display-3">Community</h3>
                                        <div className="fs-3">
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/blog">Social Media</NavLink>
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/projects">Projects</NavLink>
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/sponsors">Sponsors</NavLink>
                                            <NavLink style={navStyle} exact activeStyle={activeStyle} className="text-decoration-none d-block" to="/contact">Contact Us</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="row pb-5">
                                <div className="col-auto ms-auto">
                                    <Toggle inlineLabel label="Theme" onText="Neon Orange" offText="Neon Blue" onChange={theme.updateTheme} defaultChecked={theme.mode === "neon orange"} />
                                </div>
                            </div>
                        </div>
                    </VCenter>
                </div>
                <div className="rounded-circle m-5 p-3" style={{ position: 'fixed', bottom: '0', right: '0', backgroundColor: theme.style.palette.red }}>
                    <button className="btn p-0" style={navStyle} type="button" onClick={() => { setIsNavOpen(!isNavOpen) }}>
                        <Feather.X />
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="rounded-circle m-5 p-3" style={{ backdropFilter: 'blur(32px)', position: 'fixed', bottom: '0', right: '0' }}>
                <button className="btn p-0" style={navStyle} type="button" onClick={() => { setIsNavOpen(!isNavOpen) }}>
                    <Feather.Menu />
                </button>
            </div>
        )
    }
}