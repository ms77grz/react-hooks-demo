import React from 'react';

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = React.useState(initialCount);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevState => prevState - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default HookCounterTwo;
