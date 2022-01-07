import React, {useContext} from 'react';
import {TaskContext} from '../../../context/TaskContext';
import './tasklistcontent.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskListContent = ({duty}) => {

    const {removeTask, findItem} = useContext(TaskContext);

    return(
        <li className='list-items'>
            <span>{duty.duty}</span>
            <div className='list-items_box'>
                <div className='list-items_delete'
                     onClick={() => removeTask(duty.id)}>
                         <DeleteIcon />
                </div>
                <div className='list-items_edit'
                     onClick={() => findItem(duty.id)}>
                    <EditIcon />
                </div>
            </div>
        </li>
    )
}

export default TaskListContent;