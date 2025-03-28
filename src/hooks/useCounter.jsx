import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialValue);
  const set = (value) => setCount(value);

  return { count, increment, decrement, reset, set };
}

export default useCounter;