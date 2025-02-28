import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      cursor: 'pointer',
      border: '2px solid #ccc' // Ensure the button is visible in both themes
    }}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
