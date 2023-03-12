import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthorizeWrapper = () => {
	const auth = localStorage.getItem('isAuth');
	return auth ? <Outlet /> : <Navigate to="/login" />;
};
