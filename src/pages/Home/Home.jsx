import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import TaskList from '../../components/TaskList/TaskList';
import TaskForm from '../../components/TaskForm/TaskForm';

const Home = () => {

    return(
        <div className='home__container'>
            <div className='home__container-wrapper'>
                <Header />
                <div className='home__container-wrapper_main'>
                    <TaskForm />
                    <TaskList />
                </div>
            </div>
        </div>
    )
}

export default Home;