import { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, useLocation, Link, Routes, Route } from 'react-router-dom';
import { getMovieDetails } from '../../../services/api-service';
import styles from './MovieDetailsView.module.css';
import { Circles } from 'react-loader-spinner';
// const Cast = lazy(() =>
//   import('../Cast/Cast.js' /*webpackChunkName: 'Cast' */)
// );
// const Review = lazy(() =>
//   import('../Review/Review.js' /*webpackChunkName: 'Review' */)
// );
export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('error');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getMovieDetails(movieId)
      .then(response => {
        setMovie(response.data);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(true));
  }, [movieId]);
  console.log(movie);
  const genres = movie.genres;
  const genreStr = genres.map(genre => genre.name).join(', ');
  const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  // if (loading || !movie) {
  //   return (
  //     <Circles color="#3f51b5" height={80} width={80} ariaLabel="loading" />
  //   );
  // }
  // if (error) {
  //   return (
  //     <div>
  //       <p>Something vent wrong</p>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.film__card}>
      <div className={styles.image__wrapper}>
        <img
          className={styles.image}
          src={posterPath}
          alt={movie.original_title}
          height="531"
        />
      </div>
      <div className={styles.info__wrapper}>
        <h2 className={styles.film__title}>{movie.original_title}</h2>
        <table>
          <tr className={styles.param}>
            <td className={styles.param__title}>Vote / Votes</td>
            <td className={styles.param__value}>
              <div className={styles.film__votes}>
                <span className={styles.param__value__vote}>
                  {movie.vote_average}
                </span>
                <span className={styles.param__value__votes}>
                  {movie.vote_count}
                </span>
              </div>
            </td>
          </tr>
          <tr className={styles.param}>
            <td className={styles.param__titel}>Popularity</td>
            <td className={styles.param__value}>
              {Math.round(movie.popularity)}
            </td>
          </tr>
          <tr className={styles.param}>
            <td className={styles.param__titel}>Original Title</td>
            <td className={styles.param__value}>{movie.original_title}</td>
          </tr>
          <tr className={styles.param}>
            <td className={styles.param__titel}>Genre</td>
            <td className={styles.param__value}>{genreStr}</td>
          </tr>
        </table>
        <span className={styles.film__owervier}>ABOUT</span>
        <div className={styles.film__owervier}>
          <p className={styles.film__owerviertext}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
