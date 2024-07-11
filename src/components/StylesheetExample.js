import React, { Suspense } from 'react';

// Define the MyComponent component
function StylesheetExample() {
  return (
    <Suspense fallback="loading...">
      {/* Add stylesheets with specified precedence */}
      <link rel="stylesheet" href="https://example.com/foo.css" precedence="default" />
      <link rel="stylesheet" href="https://example.com/bar.css" precedence="high" />
      
      <article className="foo-class bar-class">
        <h1>Welcome to My Component</h1>
        <p>This component uses stylesheets and ensures proper loading and precedence.</p>
      </article>
    </Suspense>
  );
}

// Export the component
export default StylesheetExample;
// to manage style within component. before content displayed to ensure stylesheet is loaded.