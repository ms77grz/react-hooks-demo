import React from 'react';

const HookCounter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Count {count}
      </button>
    </div>
  );
};

export default HookCounter;
