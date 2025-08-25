import { useState, useEffect } from 'react';

export default function useFetch(api, queryTerm='') {
  const [data, setData] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${api}?api_key=${api_key}&query=${queryTerm}`

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results)
    }

    fetchData();
  }, [url]);

  return { data };
}
