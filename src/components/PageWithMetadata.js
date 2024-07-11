// automatic management of metadata, through elements like title inside the react components.

import React from 'react';

// Define the PageWithMetadata component
function PageWithMetadata() {
  return (
    <main>
      {/* Metadata elements */}
      <title>Hridya</title>
      <meta name="description" content="This is an awesome page built with React 19." />
      <meta name="keywords" content="React, JavaScript, Awesome" />
      <link rel="canonical" href="https://www.myawesomepage.com" />
      
      {/* Main content */}
      <h1>Welcome!</h1>
      <p>Testing.</p>
    </main>
  );
}

// Export the component
export default PageWithMetadata;
