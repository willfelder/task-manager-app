import React from 'react';
import './taskform.scss';

const TaskForm = () => {

    return(
        <form className='form_container'>
            <input type='text'
                    className='form_container-input'
                    placeholder='Add your Task'
                    required />
            <div className='form_container-buttons'>
                <button className='form_container-buttons_add btn'>Add Task</button>
                <button className='form_container-buttons_delete btn'>Clear All</button>
            </div>
        </form>
    )
}

export default TaskForm;