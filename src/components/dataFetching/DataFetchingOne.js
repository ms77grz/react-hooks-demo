import { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingOne = () => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setloading(false);
        setPost(response.data);
        setError('');
      })
      .catch(error => {
        setloading(false);
        setPost({});
        setError(`Something went wrong: ${error.message}`);
      });
  }, []);

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <h2>{post.title}</h2>}
      {error ? <h2>{error}</h2> : null}
    </div>
  );
};

export default DataFetchingOne;
