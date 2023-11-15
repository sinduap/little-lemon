import { useState, useEffect } from 'react';

const useFetch = (url, initialState = null) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return data;
};

export default useFetch;
