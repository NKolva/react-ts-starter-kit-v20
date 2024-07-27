import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from 'src/features';

import { Layout } from 'src/components';

import { ProtectedRoute } from 'src/hoc/protectedRoute';
import { ROUTE } from 'src/constants';

import './app.scss';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}></Route>
        </Route>

        <Route path="*" element={<Navigate to={ROUTE.AUTH.LOGIN} />} />
      </Routes>
    </div>
  );
};
