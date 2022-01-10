import React, {useContext, useState, useEffect} from 'react';
import './taskform.scss';
import {TaskContext} from '../../../context/TaskContext';

const TaskForm = () => {

    const {clearTask, addTask, editItem, editTask} = useContext(TaskContext);
    const [duty, setDuty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!editItem){
            addTask(duty);
            setDuty('');
        } else {
            editTask(duty, editItem.id)
        }
    }

    const handleChange = (e) => {
        setDuty(e.target.value)
    }

    useEffect(() => {
        if(editItem){
            setDuty(editItem.duty)
            console.log(editItem)
        } else {
            setDuty('')
        }
    }, [editItem])

    return(
        <form className='form_container'
              onSubmit={handleSubmit}>
                  
            <input type='text'
                    className='form_container-input'
                    placeholder='Add your Task'
                    value={duty}
                    onChange={handleChange}
                    required />

            <div className='form_container-buttons'>
                <button className='form_container-buttons_add btn'
                        type='submit'>
                            {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button className='form_container-buttons_delete btn'
                        onClick={clearTask}
                        data-testid='clearBtn'>Clear All</button>
            </div>

        </form>
    )
}

export default TaskForm;