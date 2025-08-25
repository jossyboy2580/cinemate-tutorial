import { Route, Routes } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';

export default function AllRoutes() {
  return (
    <div className='dark:bg-darkbg'>
      <main>
	<Routes>
	  <Route path='/' element={<MovieList api={'movie/now_playing'} title='Home' />} />
	  <Route path='movies/:id' element={<MovieDetail />} />
	  <Route path='movies/popular' element={<MovieList api={'movie/popular'} title='Popular Movies' />} />
	  <Route path='movies/top' element={<MovieList api={'movie/top_rated'} title='Top Rated' />} />
	  <Route path='movies/upcoming' element={<MovieList api={'movie/upcoming'} title='Upcoming'/>} />
	  <Route path='search' element={<Search api={'search/movie'} />} />
	  <Route path='*' element={<PageNotFound title='Page Not Found'/>} />
	</Routes>
      </main>
    </div>
  )
}
