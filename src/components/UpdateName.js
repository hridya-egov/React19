import React, { useState, useTransition } from 'react';

// Mock asynchronous update function
const updateNameList = async (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "error") {
        reject("Error updating name list");
      } else {
        resolve(name);
      }
    }, 1000);
  });
};

function UpdateName() {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState("");  // For showing success or error messages

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        // Adding a name to the list with asynchronous update
        const newName = await updateNameList(name);
        setNameList((prevList) => [...prevList, newName]);
        setName("");  // Clear input field after successful update
        setFeedback("Name updated successfully!");  // Set success feedback
      } catch (error) {
        setFeedback(error);  // Set error feedback
      }
    });
  };

  return (
    <div>
      <h2>Update Name List</h2>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter a name"
      />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? 'Updating...' : 'Add Name'}
      </button>
      {isPending && <div className="spinner">Loading...</div>}
      <div className="feedback">{feedback}</div>
      <ul>
        {nameList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateName;
