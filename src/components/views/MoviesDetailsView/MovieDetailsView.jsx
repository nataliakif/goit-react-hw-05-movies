import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import { getMovieDetails } from '../../../services/api-service';
import styles from './MovieDetailsView.module.css';
const Cast = lazy(() => import('../Cast/Cast'));
const Review = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      console.log(response);
      setMovie(response);
    });
  }, [movieId]);
  useEffect(() => console.log('useEffect'), []);
  console.log(movie);

  return (
    movie && (
      <div className={styles.content}>
        <button
          className={styles.back_btn}
          onClick={() => {
            const prevRoute = window.sessionStorage.getItem('prevRoute');
            navigate(prevRoute ?? '/');
          }}
        >
          &#8592; Go back
        </button>
        <div className={styles.film__card}>
          <div className={styles.image__wrapper}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              height="531"
            />
          </div>
          <div className={styles.info__wrapper}>
            <h2 className={styles.film__title}>{movie.original_title}</h2>
            <ul className={styles.params}>
              <li className={styles.param}>
                <p className={styles.param__title}>Vote / Votes</p>

                <p className={styles.param__value_votes}>
                  {movie.vote_average}
                </p>
              </li>
              <li className={styles.param}>
                <p className={styles.param__title}>Popularity</p>
                <p className={styles.param__value_votes}>
                  {Math.round(movie.popularity)}
                </p>
              </li>
              <li className={styles.param}>
                <p className={styles.param__title}>Original Title</p>
                <p className={styles.param__value}>{movie.original_title}</p>
              </li>
              <li className={styles.param}>
                <p className={styles.param__title}>Genre</p>
                <p className={styles.param__value}>
                  {movie.genres.map(genre => genre.name).join(', ')}
                </p>
              </li>
            </ul>
            <span className={styles.film__owervier}>ABOUT</span>
            <div className={styles.film__owervier}>
              <p className={styles.film__owerviertext}>{movie.overview}</p>
            </div>
            <div>
              <p className={styles.param__title}>Additional information:</p>
              <ul>
                <li className={styles.param}>
                  <Link
                    to={pathname.split('/').slice(0, 3).join('/') + '/cast'}
                  >
                    Cast
                  </Link>
                </li>
                <li className={styles.param}>
                  <Link
                    to={pathname.split('/').slice(0, 3).join('/') + '/reviews'}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Suspense fallback={<>loading...</>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Routes>
        </Suspense>
      </div>
    )
  );
}
