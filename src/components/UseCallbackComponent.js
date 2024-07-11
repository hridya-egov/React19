//usecallback hook
import React, { useState, useCallback } from 'react';

// button component that accepts a callback
const Button = React.memo(({ onClick }) => {
  console.log('Button re-rendered');
  return <button onClick={onClick}>Increment</button>;
});

function UseCallbackComponent() {
  const [count, setCount] = useState(0);

  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} />
    </div>
  );
}

export default UseCallbackComponent;
