//ref
//for direct dom manipulation.
//before react 19 forwardref was used.
import React, { useRef } from 'react';

function RefComponent() {
  //  initializing a ref object with useref and giving value null
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Use the ref to access the input element and focus it
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* Pass the ref to the input element */}
      <input placeholder="Type something..." ref={inputRef} />
      <button onClick={handleButtonClick}>Focus the input</button>
    </div>
  );
}

export default RefComponent;
// allows to keep a value , before re rendering.