import React, { useState } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { getTheme, loadTheme } from "@fluentui/react";

export const ThemeContext = React.createContext(
    {
        mode: "light",
        style: getTheme(),
        updateTheme: () => { }
    }
);

export default function AppDelegate(props) {

    const [style, setStyle] = useState(getTheme());
    const [mode, setMode] = useState("light");

    const updateTheme = () => {
        if (mode === "light") {
            setMode("dark")
            setStyle(loadTheme({
                palette: {
                    themePrimary: '#00ffff',
                    themeLighterAlt: '#000a0a',
                    themeLighter: '#002929',
                    themeLight: '#004d4d',
                    themeTertiary: '#009999',
                    themeSecondary: '#00e0e0',
                    themeDarkAlt: '#19ffff',
                    themeDark: '#3dffff',
                    themeDarker: '#70ffff',
                    neutralLighterAlt: '#02162b',
                    neutralLighter: '#041c33',
                    neutralLight: '#092541',
                    neutralQuaternaryAlt: '#0e2c4a',
                    neutralQuaternary: '#123151',
                    neutralTertiaryAlt: '#274b6f',
                    neutralTertiary: '#c8c8c8',
                    neutralSecondary: '#d0d0d0',
                    neutralPrimaryAlt: '#dadada',
                    neutralPrimary: '#ffffff',
                    neutralDark: '#f4f4f4',
                    black: '#f8f8f8',
                    white: '#001020',
                }
            }))
        } else {
            setMode("light")
            setStyle(loadTheme({
                palette: {
                    themePrimary: '#1e6c93',
                    themeLighterAlt: '#f3f8fb',
                    themeLighter: '#cfe4ee',
                    themeLight: '#a9cddf',
                    themeTertiary: '#63a0bf',
                    themeSecondary: '#307ba1',
                    themeDarkAlt: '#1b6285',
                    themeDark: '#165270',
                    themeDarker: '#113d53',
                    neutralLighterAlt: '#faf9f8',
                    neutralLighter: '#f3f2f1',
                    neutralLight: '#edebe9',
                    neutralQuaternaryAlt: '#e1dfdd',
                    neutralQuaternary: '#d0d0d0',
                    neutralTertiaryAlt: '#c8c6c4',
                    neutralTertiary: '#a19f9d',
                    neutralSecondary: '#605e5c',
                    neutralPrimaryAlt: '#3b3a39',
                    neutralPrimary: '#323130',
                    neutralDark: '#201f1e',
                    black: '#000000',
                    white: '#ffffff',
                }
            }))

        }
    }

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ mode, style, updateTheme }}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </ThemeContext.Provider>
        </BrowserRouter>
    );
}