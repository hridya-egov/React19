// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/deferred-search">Deferred Search</Link></li>
          <li><Link to="/fetch-data">fetch-data</Link></li>
         
          <li><Link to="/update-name">Update Name</Link></li>
          <li><Link to="/useformstatus">FormWithStatus</Link></li>
          <li><Link to="/pagewithmetadata">pagewithmetadata</Link></li>
          <li><Link to ="/forwardref">forwardref</Link></li>
          <li><Link to="/ref-component">Ref Component</Link></li>
          <li><Link to="/server-component">Server Component</Link></li>
          <li><Link to="/client-component">Client Component</Link></li>
          <li><Link to="/server-action">Server Action</Link></li>
          <li><Link to="/simple-heading">Simple Heading</Link></li>
          <li><Link to="/simple-context">Simple Context</Link></li>
          <li><Link to ="/useid">useid hook</Link></li>
          
          <li><Link to="/layouteffect">layouteffect</Link></li>
         
          <li><Link to ="/usecallback">Callback Function</Link></li>
          <li><Link to ="/stylesheetexample">stylesheetexample</Link></li>
          <li><Link to ="/statuscomponent">usedebugvalue hook</Link></li>
          <li><Link to ="/usememo">usememo hook</Link></li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Home;
