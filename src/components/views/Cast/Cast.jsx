import { getMovieCredits } from '../../../services/api-service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './Cast.module.css';

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState(null);
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(setMovieCredits);
  }, [movieId]);

  return (
    movieCredits && (
      <div>
        <ul className={styles.cast__list}>
          {movieCredits.cast.map(
            ({ cast_id, original_name, character, profile_path }) =>
              profile_path && (
                <li className={styles.cast__item} key={cast_id}>
                  <img
                    className={styles.profile_image}
                    src={BASE_IMAGE_URL + profile_path}
                    alt={original_name}
                  />
                  <p>{original_name}</p>
                  <p>Character: {character}</p>
                </li>
              )
          )}
        </ul>
      </div>
    )
  );
}
