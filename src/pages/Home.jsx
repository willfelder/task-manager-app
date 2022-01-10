import React from 'react';
import Header from '../components/Header/Header';
import HomeContent from '../components/HomeContent/HomeContent';
import Footer from '../components/Footer/Footer';
import TaskContextProvider from '../context/TaskContext';

const Home = () => {
    
    return(
            <TaskContextProvider>
                <Header />
                <HomeContent />
                <Footer />
            </TaskContextProvider>
    )
}

export default Home;