import { useState, useMemo } from 'react';

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(prevState => prevState + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(prevState => prevState + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>
          Increment Counter One: {counterOne}
        </button>
        <span>{isEven ? ' Even' : ' Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>
          Increment Counter Two: {counterTwo}
        </button>
      </div>
    </div>
  );
};

export default Counter;
