import React from 'react';
import './TaskForm.css';


const TaskForm = () => {
    return(
        <form className='form__container'>
            <input className='form__container-input'
                   type='text'
                   placeholder='Add a new task'
                   required />
            <div className='form__container-buttons'>
                <button type='submit'
                        className='form__container-buttons_add btn'>Add task</button>
                <button className='form__container-buttons_delete btn'>Clear All</button>
            </div>
        </form>
    )
}

export default TaskForm;