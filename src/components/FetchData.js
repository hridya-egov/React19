//Useeffect hook example.to fetch the data from an api.

import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')//making a network request
      .then(response => response.json())// converting the object to json format
      .then(data => setData(data));//updates the data state with the fetched data
  }, []);  // Runs once on mount

  if (!data) return <p>Loading...</p>;// if no data fetched

  return <div>{data.someValue}</div>;//data.somevalue is a property from fetcheddata.
}

export default FetchData;
