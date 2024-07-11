import React, { useState, useTransition } from 'react';

// Simple component to demonstrate useTransition hook
function SimpleTransition() {
  const [count, setCount] = useState(0); // State to hold the count value
  const [isPending, startTransition] = useTransition(); // Initialize useTransition hook

  // Function to increment the count with a simulated delay
  const incrementCount = () => {
    startTransition(() => {
      // Simulate a long-running task with a delay
      setTimeout(() => {
        setCount(count + 1); // Update the count value
      }, 2000); // 2-second delay
    });
  };

  return (
    <div>
      <button onClick={incrementCount} disabled={isPending}>
        {isPending ? 'Updating...' : 'Increment Count'} {/* Show loading state */}
      </button>
      <p>Count: {count}</p> {/* Display the current count */}
    </div>
  );
}

export default SimpleTransition;
