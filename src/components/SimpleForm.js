//useid hook. for generating unique id for  form elements.
import React, { useId } from 'react';

function SimpleForm() {
  const id = useId();//generates a uniqueid for elements.
  const nameInputId = `${id}-name`;

  return (
    <form>
      <label htmlFor={nameInputId}>Your Name:</label>
      {/* connects the label to the name input field */}
      <input
        type="text"
        id={nameInputId}//assigns the uniqueid to the name input field
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
