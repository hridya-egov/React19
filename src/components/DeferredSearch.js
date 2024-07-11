//used in scenarios where frequent updates may cause performance  issue.
// deffer the low priority updates, to enhance the ui response
import React, { useState, useDeferredValue } from 'react';

function DeferredSearch() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query, 'initial search');
//when the input field value changes,updates the query state
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
      />
{/* deffered query passed as prop */}
      <Results query={deferredQuery} />
    </div>
  );
}

function Results({ query }) {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <h1>Search Query: {query}</h1>
    </div>
  );
}

export default DeferredSearch;
