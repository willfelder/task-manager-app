import React from 'react';
import Header from '../components/Header/Header';
import HomeContent from '../components/HomeContent/HomeContent';
import Footer from '../components/Footer/Footer';
import TaskContextProvider from '../context/TaskContext';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    
    return(
        <Router>
            <TaskContextProvider>
                <Header />
                <HomeContent />
                <Footer />
            </TaskContextProvider>
        </Router>
    )
}

export default Home;