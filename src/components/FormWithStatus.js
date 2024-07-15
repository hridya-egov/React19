//useformstatus hook
import React from 'react';
import { useFormStatus } from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for Toastify

// Simulated form submission function
async function submitForm(data) {
  // Simulate a network request with a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Form submitted:', data);
  return data;  // Simulate successful form submission
}

export default function ComplexFormWithToast() {
  // Get the form status from useFormStatus
  const { pending } = useFormStatus();

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Extract form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());  // Convert FormData to a plain object

    try {
      // Call the submitForm function and wait for it to complete
      await submitForm(data);
      // Form submission was successful
      toast.success('Form submitted successfully!');  // Show success toast
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle error and show error toast
      toast.error('Form submission failed. Please try again.');
    }
  }

  return (
    <div>
      <h1>Complex Form with Toast Notification</h1>
      <form action={submitForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <select id="state" name="state" required>
            <option value="">Select a state</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="NY">New York</option>
            {/* Add more states as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input type="text" id="zipCode" name="zipCode" required />
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="4" />
        </div>
        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {/* Display form status messages based on the current form state */}
      {pending && <p>Submitting your form...</p>}

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
}
