import React, {useContext} from 'react';
import {TaskContext} from '../../context/TaskContext';
import TaskListContent from '../TaskListContent/TaskListContent';

const TaskList = () => {

    const {tasks} = useContext(TaskContext);

    return(
        <div>
            <ul className='list'>
                {tasks.map(value => {
                    return <TaskListContent task={value} key={value.id} />
                })}
            </ul>
        </div>
    )
}

export default TaskList;