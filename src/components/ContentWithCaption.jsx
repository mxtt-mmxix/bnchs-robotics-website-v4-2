import React, { useContext } from 'react'
import { ThemeContext } from '../AppDelegate'
import VCenter from './VCenter'

export default function ContentWithCaption(props) {

    const theme = useContext(ThemeContext)

    const styles = {
        color: theme.style.palette.themePrimary,
    }

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col">
                    {props.children}
                </div>
                <div className="col">
                    <VCenter>
                        {props.title != undefined && <h1 style={styles} className="display-1 bladerunner-font">{props.title}</h1>}
                        <p className="lead">{props.caption}</p>
                    </VCenter>
                </div>
            </div>
        </div>
    )
}