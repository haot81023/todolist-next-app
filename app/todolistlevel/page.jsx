"use client"

import React, { useState, createContext, useContext } from "react"
import TodoItem from "../../components/todolistlevel/TodoIterm"
import TodoList from "../../components/todolistlevel/TodoList"
import TodoHeader from "../../components/todolistlevel/TodoHeader"
import TodoForm from "../../components/todolistlevel/TodoForm"
import TodoFooter from "../../components/todolistlevel/TodoFooter"

const ThemmeContext = createContext()
export default function TodoListLevel() {

    const [task, setTask] = useState([])
    const [newtask, setNewTask] = useState("")
    const [edittingIndex, setEditingIndex] = useState(-1)

    return(
        <>
            <ThemmeContext.Provider value={task}>

            </ThemmeContext.Provider>
        </>
    )
}