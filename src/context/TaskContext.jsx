import React, {useState, createContext} from 'react';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([
        {id: 1, duty: 'First taks'},
        {id: 2, duty: 'Second taks'},
        {id: 3, duty: 'Third taks'},
    ]);

    return(
        <TaskContext.Provider value={{
            tasks
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;