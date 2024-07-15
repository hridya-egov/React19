import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);  // Added to store any errors

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Replace with your API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Throw an error for non-200 responses
        }
        return response.json();  // Convert the response to JSON format
      })
      .then(data => setData(data))  // Update state with fetched data
      .catch(error => setError(error.message));  // Catch and set any errors
  }, []);  // Empty dependency array ensures this runs only once on mount

  if (error) return <p>Error: {error}</p>;  // Display error message if there is an error
  if (!data) return <p>Loading...</p>;  // Display loading message while fetching data

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default FetchData;
