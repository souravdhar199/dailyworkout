import React from 'react';
import './App.css';
import WorkoutTable from './Workout_table';
import workoutsData from './Data';

function App() {
  return (
    <div>
      <WorkoutTable workoutsGroup={workoutsData} />
    </div>
  );
}

export default App;
