import { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [inputId, setInputId] = useState(1);
  const [postId, setPostId] = useState(1);

  const handleClick = () => {
    setPostId(inputId);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId || 1}`)
      .then(response => setPost(response.data))
      .catch(error => console.log(error));
  }, [postId]);

  return (
    <div>
      <input
        type='text'
        value={inputId}
        onChange={e => setInputId(e.target.value)}
      />
      <button type='button' onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
    </div>
  );
};

export default DataFetching;
