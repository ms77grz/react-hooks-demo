import React from 'react';

const HookCounterOne = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    console.log('useEffect - Updating document title');
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounterOne;
