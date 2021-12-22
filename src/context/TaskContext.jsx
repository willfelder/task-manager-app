import React, {useState, createContext} from 'react';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([
        {id: 1, duty: 'First example'},
        {id: 2, duty: 'Second example'},
        {id: 3, duty: 'Third example'},
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