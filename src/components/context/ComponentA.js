import { useContext } from 'react';
import { CounterCountext } from '../../App';

const ComponentA = () => {
  const counterContext = useContext(CounterCountext);
  const { counterState: count, counterDispatch: dispatch } = counterContext;

  return (
    <div>
      <h2>Component A {count}</h2>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
};

export default ComponentA;
