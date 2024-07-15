//ref example
import React, { useRef } from 'react';

// Component that demonstrates the use of ref to focus an input field
const FocusInput = () => {
  // Create a ref to store the input DOM element
  const inputRef = useRef(null);

  // Function to focus the input field
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();  // Use the ref to access the input element and call focus()
    }
  };

  return (
    <div>
      <input
        ref={inputRef}  // Attach the ref to the input element
        type="text"
        placeholder="Click the button to focus me"
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button onClick={handleFocus} style={{ marginTop: '10px', padding: '10px 20px' }}>
        Focus the Input
      </button>
    </div>
  );
};

export default FocusInput;
