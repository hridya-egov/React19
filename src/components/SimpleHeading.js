// importing themecontext and using usecontext hook
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function SimpleHeading() {
  const theme = useContext(ThemeContext); 
  return <h1 style={{ color: theme.color }}>Hello, React 19!</h1>;
}

export default SimpleHeading;
