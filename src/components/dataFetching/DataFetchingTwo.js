import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: `Something went wrong: ${action.payload}`,
      };
    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  }, []);

  const { loading, error, post } = state;

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <h2>{post.title}</h2>}
      {error ? <h2>{error}</h2> : null}
    </div>
  );
};

export default DataFetchingTwo;
