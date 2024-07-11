import React, { useState, useLayoutEffect, useRef } from 'react';

export function SimpleLayoutEffectComponent() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);//reference created to point to div element.

  useLayoutEffect(() => {
    if (boxRef.current) {
      const newWidth = boxRef.current.scrollWidth;//reads the width of div
      setWidth(newWidth);//update width state with new width
    }
  }, [width]);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ overflow: 'auto', backgroundColor: 'lightcoral', width: `${width}px` }}
      >
        This box adjusts its width based on its content.
      </div>
      <p>The width of the box is: {width}px</p>
    </div>
  );
}
