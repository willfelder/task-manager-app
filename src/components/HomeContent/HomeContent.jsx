import React from 'react';
import './homecontent.scss';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';

const HomeContent = () => {

    return(
            <div className='homeContent_container'>
                <div className='homeContent_container-taskbox'>
                    <h1>Your Tasks</h1>
                    <div className='homeContent_container-taskbox_main'>
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
    )
}

export default HomeContent;