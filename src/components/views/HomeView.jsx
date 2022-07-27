import { useState, useEffect } from 'react';
import { getTrending } from '../../services/api-service';
import { Link } from 'react-router-dom';

const styles = {
  content: {
    margin: '0 180px',
  },
  movies__list: {
    listStyle: 'none',
    fontSize: 18,
  },
};
export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(response => setMovies(response.results));
    window.sessionStorage.setItem('prevRoute', '/');
  }, []);
  return (
    <div style={styles.content}>
      {movies && (
        <>
          <h1>Trending today</h1>
          <ul style={styles.movies__list}>
            {movies.map(
              ({ id, original_title }) =>
                original_title && (
                  <li key={id}>
                    <Link to={`/movies/${id}`}>{original_title}</Link>
                  </li>
                )
            )}
          </ul>
        </>
      )}
    </div>
  );
}
