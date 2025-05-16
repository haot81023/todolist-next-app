"use client"

import React, {useState, useEffect} from "react"

export default function Demoreact() {
    const [color, setColor] = useState("red")
    const changColor = () => {
        setColor(color === "red" ? "blue" : "red")
    }
    return (
        <>
            <p>Day la trang on tap ve react</p>
            <p>Day la vi du ve usestate voi state co color {color}</p>
            <button 
                onClick={changColor} 
                className="
                    bg-cyan-200
                    text-violet-950 
                    border-b-fuchsia-200 
                    px-4 py-2
                    rounded-2xl
                    hover:bg-fuchsia-200 hover:text-cyan-600
                    transition-all duration-300
                    active:scale-95
                    shadow-lg shadow-fuchsia-200/50"
            >
                Đổi màu
            </button>
        </>
    )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<demoreact/>)