//manage state in functional components  usestate hook
import React, { useState } from 'react';


 // Declare a state variable named "count" and a function to update it named "setCount"
function Counter() {
  const [count, setCount] = useState(0); // The initial state is set to 0

  // Event handler for incrementing the count
  const increment = () => {
    setCount(count + 1); // Update the state to the new value
  };

  // Event handler for decrementing the count
  const decrement = () => {
    setCount(count - 1); // Update the state to the new value
  };

  return (
    <div>
      <h1>Count: {count}</h1>  {/* Display the current state value */}
      <button onClick={increment}>Increment</button> 
      <button onClick={decrement}>Decrement</button>  
    </div>
  );
}

export default Counter;
