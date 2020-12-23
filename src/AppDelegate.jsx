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
        mode: "neon",
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
    const [mode, setMode] = useState("neon");

    const updateTheme = () => {
        if (mode === "classic") {
            setMode("neon")
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
            setMode("classic")
            setStyle(loadTheme({
                palette: {
                    themePrimary: '#1e6c93',
                    themeLighterAlt: '#010406',
                    themeLighter: '#051118',
                    themeLight: '#09212c',
                    themeTertiary: '#124159',
                    themeSecondary: '#1a5f82',
                    themeDarkAlt: '#2c799f',
                    themeDark: '#448aae',
                    themeDarker: '#6ca6c3',
                    neutralLighterAlt: '#f8f8f8',
                    neutralLighter: '#f4f4f4',
                    neutralLight: '#eaeaea',
                    neutralQuaternaryAlt: '#dadada',
                    neutralQuaternary: '#d0d0d0',
                    neutralTertiaryAlt: '#c8c8c8',
                    neutralTertiary: '#595959',
                    neutralSecondary: '#373737',
                    neutralPrimaryAlt: '#2f2f2f',
                    neutralPrimary: '#000000',
                    neutralDark: '#151515',
                    black: '#0b0b0b',
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