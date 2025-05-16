"use client";

import React, { useState, createContext, useContext } from "react";
import ThemeSwitcher from "../../../components/usecontact/themeswitcher";
import TheManager from "../../../components/usecontact/thememanage";

export const ThemeContext = createContext();

export default function ThemeProvide({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
       <>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === "light" ? "bg-gray-100 min-h-screen" : "bg-gray-900 min-h-screen text-white"}>
                {children}
            </div>
        </ThemeContext.Provider>
        
       </>
        
    );
}
