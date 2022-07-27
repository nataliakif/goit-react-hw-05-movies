import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => (
  <div className={styles.menu}>
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={({ isActive }) =>
          !isActive ? `${styles.link}` : `${styles.activeLink}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          !isActive ? `${styles.link}` : `${styles.activeLink}`
        }
      >
        Movies
      </NavLink>
    </nav>
  </div>
);
export default Navigation;
