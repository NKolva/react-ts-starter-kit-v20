import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { type AppDispatch } from 'src/app/rootStore';

import { ROUTE } from 'src/constants/routes';

export const ProtectedRoute = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const isLoading = true; // useSelecter(isLoadingSelector)

  useEffect(() => {
    // here is check token validity logic eg dispatch(validateToken())
  }, [dispatch, navigate]);

  const divStyles = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return isLoading ? (
    <div style={divStyles}>
      <div>loader...</div>
    </div>
  ) : token ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTE.AUTH.LOGIN} />
  );
};
