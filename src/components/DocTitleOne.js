import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const DocTitleOne = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Increment count
      </button>
    </div>
  );
};

export default DocTitleOne;
