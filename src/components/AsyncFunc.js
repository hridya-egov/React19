//this is for using the scripts in a component. even if the component renders multiple times,react ensures script is load only once.

import React from 'react';
// Define a component with an async script
function AsyncFunc() {
  return (
    <div>
      {/* Add an async script */}
      <script async={true} src="https://example.com/my-script.js" />
      <h1>Hello World</h1>
    </div>
  );
}

// Export the component
export default AsyncFunc;
