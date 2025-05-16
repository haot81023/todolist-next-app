import { useContext } from "react";
import { ThemeContext } from "../../app/todolist/demousecontact/page";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Chế độ hiện tại: {theme === "light" ? "Sáng" : "Tối"}</h2>
            <button onClick={toggleTheme} className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Đổi chủ đề
            </button>
        </div>
    );
}
