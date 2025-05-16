"use client";

import React, { useState, useEffect} from "react";
import TodoItem from "../../components/todolist/TodoItem";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editingIndex, setEditingIndex] = useState(-1)

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== "") {
            if(editingIndex > -1){
                const updateStask = [...tasks]
                updateStask[editingIndex] = newTask.trim()
                setTasks(updateStask)
                setEditingIndex(-1)
            }
            else {
                setTasks([...tasks, newTask.trim()])
            }
            setNewTask("");
        }
    };

    const handleEditTask = (index) =>{
      
        setNewTask(tasks[index]);
        setEditingIndex(index);
    }

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    useEffect(() =>{
        const savetask = localStorage.getItem("task")
        if(savetask){
            setTasks(JSON.parse(savetask))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(tasks))
    }, [tasks])
    
    return (
        <div className="w-[70%] mx-auto flex flex-col items-center justify-center ">
            <h3 className="text-2xl font-bold mb-4">DANH SÁCH CÔNG VIỆC HÀNG NGÀY</h3>
            
            <form onSubmit={handleAddTask} className="flex flex-col items-center gap-2 w-full">
                <input 
                    type="text" 
                    placeholder="Nhập vào danh sách công việc" 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-[50%]"
                />
                <input 
                    type="submit" 
                    value="Add"
                    className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer w-[50%]"
                />
            </form>

            <ul className="mt-6 w-full text-left">
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        index={index}
                        onDelete={handleDeleteTask}
                        onEdit={handleEditTask}
                    />
                ))}
            </ul>
        </div>
    );
}
