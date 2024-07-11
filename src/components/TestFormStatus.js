import React from 'react';
import { useFormStatus } from 'react-dom';

export default function TestFormStatus() {
  // Destructure formStatus and startTransition from useFormStatus hook
  const { formStatus, startTransition } = useFormStatus();

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data from the form element
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

    // Use startTransition to manage the async form submission process
    startTransition(async () => {
      try {
        formStatus.setFormState('submitting'); // Set the form status to 'submitting'

        // Simulate a form submission with a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        // Log the form data
        console.log('Form submitted with data:', data);

        // After successful submission, update the form status to 'submitted'
        formStatus.setFormState('submitted');
      } catch (error) {
        console.error('Form submission error:', error);

        // If an error occurs, update the form status to 'error'
        formStatus.setFormState('error');
      }
    });
  }

  return (
    <div>
      <h1>Test Form Status</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input type="tel" id="mobile" name="mobile" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display form status messages based on the current form state */}
      {formStatus.status === 'submitting' && <p>Submitting...</p>}
      {formStatus.status === 'submitted' && <p>Form submitted successfully!</p>}
      {formStatus.status === 'error' && <p>Submission failed. Please try again.</p>}
    </div>
  );
}
