import React from 'react';
import './App.css';
import Calendar from './components/calendar';
import WorkTime from './components/work-time';

function App() {
  return (
    <div className="App">
      <Calendar />
      <WorkTime />
    </div>
  );
}

export default App;
