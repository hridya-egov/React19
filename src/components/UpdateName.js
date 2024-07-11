//usetransition hook feature
// updste updating update
import React, { useState, useTransition } from 'react';

function UpdateName() {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();

  const updateName = async (name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name === "error") {
          reject("Error updating name");
        } else {
          resolve();
        }
      }, 1000);
    }).catch((error) => error);
  };

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await updateName(name);
        alert("Name updated successfully!");
      } catch (error) {
        alert(error);
      }
    });
  };

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? 'Updating...' : 'Update'}
      </button>
    </div>
  );
}

export default UpdateName;
