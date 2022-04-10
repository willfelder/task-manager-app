import React, {useState, createContext, useEffect} from 'react';
import {v4 as uuid} from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {

    const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialState);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])

    const clearTask = () => {
        setTasks([])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(value => value.id !== id))
    }

    const addTask = (duty) => {
        setTasks([...tasks, {duty, id: uuid()}])
    }

    const findItem = (id) => {
        const item = tasks.find(value => value.id === id)
        setEditItem(item);
    }

    const editTask = (duty, id) => {
        const newTask = tasks.map(value => (value.id === id ? {duty, id} : value))
        setTasks(newTask)
        setEditItem(null)
    }

    return(
        
        <TaskContext.Provider 
            value={{
                tasks,
                clearTask,
                removeTask,
                addTask, 
                findItem,
                editTask,
                editItem
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;