import React from 'react';
import './TaskListContent.css';

const TaskListContent = ({task}) => {

    return(
        <li className='list_items'>
            <span>{task.duty}</span>
            <div>
                <button className='list_items-button button_delete'>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className='list_items-button button_edit'>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default TaskListContent;