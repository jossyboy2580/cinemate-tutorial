import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { MovieCard } from '../components';

import useUpdatePageTitle from '../hooks/useUpdatePageTitle';

export default function Search({ api }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  
  const { data: movies } = useFetch(api, queryTerm);

  useUpdatePageTitle(`Search results for ${queryTerm}`);
  
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
	<div className='flex justify-start flex-wrap'>
	  {movies.map((movie) => (
	    <MovieCard key={movie.id} movie={movie} />
	  ))}
	</div>
      </section>
    </main>
  )
}
