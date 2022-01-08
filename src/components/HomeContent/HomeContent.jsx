import React, {useState} from 'react';
import Calendar from 'react-calendar';
import './homecontent.scss';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';
import 'react-calendar/dist/Calendar.css';

const HomeContent = () => {

    const [value, setvalue] = useState(new Date());

    const handleChange = (e) => {
        setvalue(e.target.value)
    }

    return(
            <div className='homeContent_container'>
                <div className='homeContent_container-taskbox'>
                    <h1>Your Tasks</h1>
                    <div className='homeContent_container-taskbox_main'>
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
                <div className='homeContent_container-calendar'>
                    <Calendar onChange={handleChange} value={value} />
                </div>
            </div>
    )
}

export default HomeContent;