import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../AppDelegate'
import { useContext } from 'react'
import { Toggle } from '@fluentui/react'

export default function NavBar(props) {

    const theme = useContext(ThemeContext)

    const navStyles = {
        background: theme.style.palette.white,
    }

    const styles = {
        color: theme.style.palette.themePrimary,
    }

    return (
        <nav style={navStyles} className={`d-none d-md-block navbar navbar-expand-lg fixed-top ${theme.mode === "light" ? "navbar-light" : "navbar-dark"} `}>
            <div className="container">
                <NavLink style={styles} className="navbar-brand bladerunner-font" to="/">The Sentinels</NavLink>
                <Toggle styles={theme.style} label="Theme" inlineLabel onText="Dark" offText="Light" onChange={theme.updateTheme} />
            </div>
        </nav>
    )
}