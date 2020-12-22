import React from 'react'
import { ThemeContext } from '../AppDelegate'
import { useContext } from 'react';

export default function Footer(props) {

    const theme = useContext(ThemeContext)

    const styles = {
        background: theme.style.palette.neutralLighter,
        color: theme.style.palette.neutralDark
    };

    return (
        <footer>
            <div style={styles}>
                <div className="py-5">
                    <div className="container">
                        <div className="text-center">
                            <p>Copyright &copy; {new Date().getFullYear()} BNCHS Sentinels. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}