import React, {useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskListContent = ({duty}) => {

    return(
        <li className='list-items'>
            <span>{duty.duty}</span>
            <div>
                <button><DeleteIcon /></button>
                <button><EditIcon /></button>
            </div>
        </li>
    )
}

export default TaskListContent;