import React, { useState, useLayoutEffect, useRef } from 'react';

export function SimpleLayoutEffectComponent() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null); // Reference to point to the div element

  useLayoutEffect(() => {
    if (boxRef.current) {
      const newWidth = boxRef.current.scrollWidth; // Read the width of the div
      setWidth(newWidth); // Update width state with new width
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div
        ref={boxRef}
        style={{ overflow: 'auto', backgroundColor: 'lightcoral', padding: '10px' }}
      >
        This box adjusts its width based on its content.
      </div>
      <p>The width of the box is: {width}px</p>
    </div>
  );
}
