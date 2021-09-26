import { useState } from 'react';

const useCounter = (inititalCount = 0, value) => {
  const [count, setCount] = useState(inititalCount);

  const increment = () => setCount(prevState => prevState + value);

  const decrement = () => setCount(prevState => prevState - value);

  const reset = () => setCount(inititalCount);

  return [count, increment, decrement, reset];
};

export default useCounter;
