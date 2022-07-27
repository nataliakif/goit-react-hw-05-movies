import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
    })
  ),
};
