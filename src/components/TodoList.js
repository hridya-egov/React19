// import React, { useState } from 'react';
// import { useOptimistic } from 'react-use';

// // Mock API function to add a new todo item
// const mockAddTodo = (todo) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {  // Simulate a 50% chance of failure
//         resolve(todo);  // Resolve with the new todo item
//       } else {
//         reject(new Error('Failed to add todo'));
//       }
//     }, 1000);  // Simulate a 1-second delay
//   });
// };

// // TodoList component
// export  default function TodoList() {
//   const [newTodo, setNewTodo] = useState('');
//   const [todos, setTodos] = useState(['Buy groceries', 'Walk the dog']);
  
//   // useOptimistic hook for optimistic updates
//   const [optimisticTodos, addTodo] = useOptimistic(todos, (newTodo) => {
//     // Add new todo optimistically
//     const updatedTodos = [...todos, newTodo];
//     setTodos(updatedTodos);

//     // Simulate API request
//     mockAddTodo(newTodo)
//       .then(() => {
//         console.log('Todo added successfully!');
//       })
//       .catch((error) => {
//         console.error(error);
//         // Rollback to the previous state if the API request fails
//         addTodo(todos);
//       });
//   }, (rollback) => {
//     // Rollback to the previous state if the request fails
//     setTodos(rollback);
//   });

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       addTodo(newTodo);
//       setNewTodo('');  // Clear the input field
//     }
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         {optimisticTodos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         placeholder="Add a new todo"
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//     </div>
//   );
// }
