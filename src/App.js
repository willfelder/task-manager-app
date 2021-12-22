import React from 'react';
import './App.css';
import TaskContextProvider from './context/TaskContext';
import Home from './pages/Home/Home';

const App = () => {
  
  return(
    <div>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </div>
  )
}

export default App;
