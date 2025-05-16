import React from "react";
import ThemeProvide from "../../app/todolist/demousecontact/page";
import ThemeSwitcher from "./themeswitcher";

export default function TheManager() {
    return (
        <ThemeProvide>
            <ThemeSwitcher />
        </ThemeProvide>
    );
}
