//server side data processing and interaction directly from components.
import React from 'react';

// Define the Server Action ,process formdata and return the result
export async function handleFormSubmit(formData) {
console.log('Server received form data:', formData);
return { success: true };
  // Simulate server processing and return a result
  
}

// Server Component with a form that calls the Server Action
export default function ServerAction() {
  async function submitForm(event) {
    event.preventDefault();//prevents default form submission behaviour
    const formData = new FormData(event.target);//obj to collect form data from form element.
    const data = Object.fromEntries(formData.entries());

    // Call the Server Action
    const result = await handleFormSubmit(data);

    if (result.success) {
      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed.');
    }
  }

  return (
    <div>
      <h1>Server Action Example</h1>
      <form onSubmit={submitForm}>
        <input name="name" type="text" placeholder="Enter your name" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
