import { useEffect } from 'react';
import {MovieCard} from '../components'

import useFetch from '../hooks/useFetch';
import useUpdatePageTitle from '../hooks/useUpdatePageTitle';

export default function MovieList({ title, api }) {
  const { data: movies } = useFetch(api);

  useUpdatePageTitle(title);
  
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
	<div className='flex justify-start flex-wrap gap-2 other:justify-evenly'>
	  {movies.map(movie => (
	    <MovieCard key={movie.id} movie={movie} />
	  ))}
	</div>
      </section>
    </main>
  )
}
