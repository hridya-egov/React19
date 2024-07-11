//usememo hook
import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(0);//initial render calculationg factorial of 5

  const factorial = useMemo(() => {//if num doent change , the hook stores the last calculated result
    console.log('Calculating factorial...');
    const calculateFactorial = (num) => {
      if (num <= 0) return 1;
      return num * calculateFactorial(num - 1);
    };
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial of {number} is {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;
//without this hook calculatefactorial function wil recompute on every render. now it will store the value. it will only recompute when number changes.