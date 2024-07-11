//useActionstate hook

import React from 'react';
import { useActionState } from 'react';

const updateData = async (formData) => {
  // Simulate an API call, with delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.get('input') === 'error') {
        reject('Submission failed'); // Simulate an error
      } else {
        resolve(); // Simulate a successful submission
      }
    }, 1000); // Simulate network delay
  });
};

function SubmitForm() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateData(formData);
      if (error) {
        return error;
      }
      return null;
    },
    null,
  );

  return (
    <form action={submitAction}>
      <input type="text" name="input" placeholder="Enter data" />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SubmitForm;
//provides loading state automatically to provide to give user feedback