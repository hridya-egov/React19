//usecontext is not a new feature.

import React, { createContext, useContext } from 'react';

// Create a Context with a default value
const ThemeContext = createContext('default value');

function SimpleContext() {
  // Get the context value from the provider
  const theme = useContext(ThemeContext);

  return (
    <div style={{ padding: '20px', background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <h1>The current theme is: {theme}</h1>
    </div>
  );
}

// Export the context and the component
export { ThemeContext };
export default SimpleContext;
