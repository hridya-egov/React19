import React, { useState, useEffect, useDebugValue } from 'react';

// Custom hook
function useSimpleStatus() {
  const [status, setStatus] = useState('Loading...');

  useDebugValue(status); // Label for React DevTools

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setStatus('Online');
    }, 1000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return status;
}

export default function StatusComponent() { // Corrected function declaration
  const status = useSimpleStatus();

  return (
    <div>
      <h1>Status: {status}</h1>
    </div>
  );
}
