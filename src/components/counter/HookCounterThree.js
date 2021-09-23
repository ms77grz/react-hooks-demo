import React from 'react';

const HookCounterThree = () => {
  const [name, setName] = React.useState({ firstName: '', lastName: '' });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type='text'
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />
      <h2>First name: {name.firstName}</h2>
      <h2>Last name: {name.lastName}</h2>
      <h2>{JSON.stringify(name)} </h2>
    </form>
  );
};

export default HookCounterThree;
