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
import Competitions from "./pages/Competitions";

export const ThemeContext = React.createContext(
    {
        mode: "neon blue",
        style: loadTheme({
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
        }),
        updateTheme: () => { }
    }
);

export default function AppDelegate(props) {

    const [style, setStyle] = useState(getTheme());
    const [mode, setMode] = useState("neon blue");

    const updateTheme = () => {
        if (mode === "neon orange") {
            setMode("neon blue")
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
            setMode("neon orange")
            setStyle(loadTheme({
                palette: {
                    themePrimary: '#ff6a00',
                    themeLighterAlt: '#fff9f5',
                    themeLighter: '#ffe7d6',
                    themeLight: '#ffd2b3',
                    themeTertiary: '#ffa666',
                    themeSecondary: '#ff7c1f',
                    themeDarkAlt: '#e66000',
                    themeDark: '#c25100',
                    themeDarker: '#8f3c00',
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

        }
    }

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ mode, style, updateTheme }}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/competitions">
                        <Competitions />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </ThemeContext.Provider>
        </BrowserRouter>
    );
}