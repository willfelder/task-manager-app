import React, {useContext} from 'react';
import './tasklist.scss';
import {TaskContext} from '../../../context/TaskContext';
import TaskListContent from '../TaskListContent/TaskListContent';

const TaskList = () => {

    const {tasks} = useContext(TaskContext);

    return(
        
        <div>
            {tasks.length ? (
                <ul className='list'>
                    {tasks.map(value => {
                        return <TaskListContent duty={value} key={value.id} />
                    })}
                </ul>
            ) : (
                <div className='no-task'>No Tasks</div>
            )}
        </div>
    )
}

export default TaskList;