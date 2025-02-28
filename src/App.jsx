import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import WorkoutTable from './Workout_table';
import workoutsData from './Data';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <div>
        <WorkoutTable workoutsGroup={workoutsData} />
      </div>
    </ThemeProvider>
  );
}

export default App;