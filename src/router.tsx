/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/layout';

class AppRouter extends React.Component {
  render(): JSX.Element {
    return (
      <Routes>
        <Route
          path="/"
          element={<Layout title="Home" content={<HomePage />} />}
        />
        <Route
          path="/about"
          element={<Layout title="About us" content={<AboutPage />} />}
        />
        <Route
          path="*"
          element={<Layout title="Page not found" content={<NotFoundPage />} />}
        />
      </Routes>
    );
  }
}

export default AppRouter;
