import { useState, useEffect } from 'react';
import { getTrending } from '../../services/api-service';
import MoviesList from 'components/MoviesList/MoviesList';
import { Link } from 'react-router-dom';

export default function MoviesView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(response => setMovies(response.results));
  }, []);
  return (
    <>
      {movies && (
        <>
          <h1>Trending today</h1>
          <MoviesList movies={movies} />
        </>
      )}
    </>
  );
}
