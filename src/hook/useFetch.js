import { useReducer, useEffect } from 'react';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { ...state, status: 'loading' };
    case 'resolved':
      return { ...state, data: action.data, status: 'resolved' };
    case 'rejected':
      return { ...state, data: null, status: 'rejected' };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const useFetch = (url, initialState = null) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState,
  });

  useEffect(() => {
    dispatch({ type: 'loading' });
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: 'resolved', data }))
      .catch(error => dispatch({ type: 'rejected', error }));
  }, [url]);

  return state;
};

export default useFetch;
