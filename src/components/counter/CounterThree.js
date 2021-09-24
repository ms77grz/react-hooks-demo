import { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter One: {countOne}</h2>
      <button onClick={() => dispatchOne('increment')}>+</button>
      <button onClick={() => dispatchOne('decrement')}>-</button>
      <button onClick={() => dispatchOne('reset')}>Reset</button>
      <h2>Counter Two: {countTwo}</h2>
      <button onClick={() => dispatchTwo('increment')}>+</button>
      <button onClick={() => dispatchTwo('decrement')}>-</button>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>
    </div>
  );
};

export default CounterThree;
