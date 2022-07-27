import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation/Navigation';
import NotFoundView from './views/NotFoundView';
const HomeView = lazy(() => import('../components/views/HomeView'));
const MoviesView = lazy(() =>
  import('../components/views/MoviesView/MoviesView')
);
const MovieDetailsView = lazy(() =>
  import('../components/views/MoviesDetailsView/MovieDetailsView')
);
export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </>
  );
};
