//usehook
//rendering suspended until a promise is resolved.
//allows to wait for the data to be available before rendering, component rendered when all the data is available.
import React from 'react';
import { use } from 'react';

// Simulate an async function to fetch a greeting message
const fetchGreeting = () => 
  new Promise((resolve) => 
    setTimeout(() => resolve(' React 19'), 1000) // Resolve after 1 second
  );

// Create a promise for the greeting data
const greetingPromise = fetchGreeting();

function Greeting() {
  // Using the use hook to suspend until `greetingPromise` resolves
  const greeting = use(greetingPromise);
  return <h1>{greeting}</h1>; // Render the greeting message
}

export default Greeting;
//why? react automatically handles the loading state