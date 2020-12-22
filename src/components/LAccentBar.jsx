import React, { useContext } from 'react'
import { ThemeContext } from '../AppDelegate'

export default function LAccentBar(props) {

    const theme = useContext(ThemeContext)

    const styles = {
        borderLeft: `0.25rem solid ${theme.style.palette.themePrimary}`
    }

    return (
        <div className="py-5">
            <div className="container py-2" style={styles} >
                {props.children}
            </div>
        </div>
    )
}