import React, {useContext} from 'react';
import './tasklistcontent.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskListContent = ({duty}) => {

    return(
        <li className='list-items'>
            <span>{duty.duty}</span>
            <div className='list-items_box'>
                <div className='list-items_delete'><DeleteIcon /></div>
                <div className='list-items_edit'><EditIcon /></div>
            </div>
        </li>
    )
}

export default TaskListContent;