// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/update-name">Update Name</Link></li>
          <li><Link to="/submit-form">Submit Form</Link></li>
          <li><Link to="/test-form-status">Test Form Status</Link></li>
          <li><Link to="/greeting">Greeting</Link></li>
          <li><Link to="/simple-heading">Simple Heading</Link></li>
          <li><Link to="/server-component">Server Component</Link></li>
          <li><Link to="/client-component">Client Component</Link></li>
          <li><Link to="/server-action">Server Action</Link></li>
          <li><Link to="/ref-component">Ref Component</Link></li>
          <li><Link to="/simple-context">Simple Context</Link></li>
          <li><Link to="/deferred-search">Deferred Search</Link></li>
          <li><Link to="/metadata">Metadata</Link></li>
          <li><Link to="/async-func">Async Function</Link></li>
          <li><Link to ="/counter">Counter Function</Link></li>
          <li><Link to ="/usecallback">Callback Function</Link></li>
          <li><Link to ="/statuscomponent">usedebugvalue hook</Link></li>
          <li><Link to ="/useid">useid hook</Link></li>
          <li><Link to ="/usememo">usememo hook</Link></li>
          
<li><Link to = "/usereducer"> usereducer hook</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
