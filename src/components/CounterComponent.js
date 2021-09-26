import useCounter from '../hooks/useCounter';

const CounterComponent = () => {
  const [count, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterComponent;
