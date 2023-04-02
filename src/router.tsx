import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import FormPage from './pages/FormPage';

const AppRouter: FC = () => {
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
        path="/forms"
        element={<Layout title="Form" content={<FormPage />} />}
      />
      <Route
        path="*"
        element={<Layout title="Page not found" content={<NotFoundPage />} />}
      />
    </Routes>
  );
};

export default AppRouter;
