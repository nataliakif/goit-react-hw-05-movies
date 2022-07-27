import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AppBar from './AppBar/AppBar';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView/MoviesView';
import NotFoundView from './views/NotFoundView';
import MovieDetailsView from './views/MoviesDetailsView/MovieDetailsView';

export const App = () => {
  // const Status = {
  //   IDLE: 'idle',
  //   PENDING: 'pending',
  //   RESOLVED: 'resolved',
  //   REJECTED: 'rejected',
  // };
  return (
    <>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/movies" element={<MoviesView />} />
        <Route path="*" element={<NotFoundView />} />
        <Route path="/movies/:movieId/" element={<MovieDetailsView />} />
      </Routes>
    </>
  );
};
