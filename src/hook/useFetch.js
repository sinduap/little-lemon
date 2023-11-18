import { useState, useEffect } from 'react';

const useFetch = (url, initialState = null) => {
  const [state, setState] = useState({
    status: 'idle',
    data: initialState,
    error: null,
  });

  useEffect(() => {
    setState({ ...state, status: 'loading', error: null, data: initialState });
    fetch(url)
      .then(res => res.json())
      .then(data => setState({ ...state, status: 'resolved', data }))
      .catch(error => setState({ ...state, status: 'rejected', error }));
  }, [url]);

  return state;
};

export default useFetch;
