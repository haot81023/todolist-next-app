import React from "react";

export default function TodoForm(){
    return (
        <form>
            <input 
                type="text"
                placeholder = "Nhập vào danh sách công việc"
                value={newtask}
                onChange={(e) => setNewtask} 
            />
        </form>
    )
}