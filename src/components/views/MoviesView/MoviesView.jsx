import { useState, useEffect } from 'react';
import MoviesList from '../../MoviesList/MoviesList';
import styles from './MoviesView.module.css';
import { getBySearchQuery } from '../../../services/api-service';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  let [_, setSearchParams] = useSearchParams();
  const { search } = useLocation();

  const handleInputChange = e => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      console.log('Type your search query');
      return;
    }
    setSearchParams(`query=${query.trim().toLowerCase()}`);
    getBySearchQuery(query.trim().toLowerCase()).then(setMovies);
  };
  console.log(search);

  useEffect(() => {
    if (!search) {
      return;
    }
    getBySearchQuery(search.slice(7)).then(response => {
      console.log(response.results);
      setMovies(response.results);
    });
  }, [search]);
  console.log(movies);
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          className={styles.SearchForm_input}
          type="text"
          name="query"
          onChange={handleInputChange}
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Type your query"
        />
        <button type="submit" className={styles.SearchForm_button}>
          <label className={styles.SearchForm_label}>Search</label>
        </button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}
