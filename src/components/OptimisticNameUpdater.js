// import React from 'react';
// import { useOptimistic } from 'react-dom';

// // Simple async function to simulate name update
// async function mockUpdateName(newName) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(newName);  // Simulate a successful update
//     }, 1000);  // Simulate network delay
//   });
// }

// function OptimisticNameUpdater({ initialName }) {
//   // useOptimistic initializes with the initialName and provides a function to set a new optimistic state
//   const [optimisticName, setOptimisticName] = useOptimistic(initialName);

//   // Function to handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();  // Prevent default form submission behavior
//     const newName = event.target.elements.name.value;  // Get the new name from the input field

//     // Set the optimistic state to the new name
//     setOptimisticName(newName);

//     // Perform the async operation to update the name
//     await mockUpdateName(newName);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>Your name is: {optimisticName}</p>  {/* Display the current optimistic name */}
//       <label>
//         New Name:
//         <input type="text" name="name" />
//       </label>
//       <button type="submit">Update Name</button>  {/* Submit the form */}
//     </form>
//   );
// }

// export default OptimisticNameUpdater;
