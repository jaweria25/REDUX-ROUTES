import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const UnAuthorizedWrapper = () => {
	const auth = localStorage.getItem('isAuth');
	return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};
