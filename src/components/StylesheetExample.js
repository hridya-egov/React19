import React from 'react';

// This component demonstrates how to manage multiple stylesheets with different precedence levels.
// It adds stylesheets directly without using `Suspense`.

function StylesheetExample() {
  return (
    <div>
      {/* Add stylesheets with specified precedence for correct order of application */}
      <link 
        rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
        id="bootstrap-stylesheet" 
      />
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        id="font-awesome-stylesheet" 
      />
      
      {/* Content of the component */}
      <article className="foo-class bar-class">
        <h1 className="text-center text-primary">Welcome to My Component</h1>
        <p>This component uses stylesheets and ensures proper loading and precedence.</p>
        {/* Example of using Font Awesome icons */}
        <i className="fas fa-check-circle"></i> Font Awesome Icon
      </article>
    </div>
  );
}

export default StylesheetExample;
