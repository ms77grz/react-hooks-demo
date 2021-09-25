import { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(prevState => prevState + 1);
  }, []);

  const incrementSarary = useCallback(() => {
    setSalary(prevState => prevState + 1000);
  }, []);

  // const incrementAge = () => setAge(prevState => prevState + 1);

  // const incrementSarary = () => setSalary(prevState => prevState + 1000);

  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salary' count={salary} />
      <Button handleClick={incrementSarary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
