import React, { Profiler } from 'react';
import './App.css';
import Newsapp from './components/Newsapp';


const App = () => {
  const handleRender = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(`Profiling ${id}:`, { phase, actualDuration, baseDuration, startTime, commitTime, interactions });
  };

  return (
    <Profiler id="Newsapp" onRender={handleRender}>
      <Newsapp />
    </Profiler>
  );
};

export default App;


