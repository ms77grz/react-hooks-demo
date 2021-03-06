import { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>First Counter: {count.firstCounter}</h2>
      <h2>Second Counter: {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
        +II
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
        -II
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
};

export default CounterTwo;
