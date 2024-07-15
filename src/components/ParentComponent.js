//Forwardref
import React, { forwardRef,useRef } from 'react';

// A button component that forwards the ref to the underlying button element
const FancyButton = forwardRef((props, ref) => (
  <button ref={ref} {...props} style={{ padding: '10px', border: '2px solid #333', borderRadius: '5px' }}>
    {props.children}
  </button>
));

const ParentComponent = () => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      alert('Button was clicked!');
    }
  };

  return (
    <div>
      <FancyButton ref={buttonRef} onClick={handleClick}>
        Click Me
      </FancyButton>
    </div>
  );
};

export default ParentComponent;
