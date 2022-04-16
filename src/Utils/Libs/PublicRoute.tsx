import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from 'Utils/Libs/isLogin';

const PublicRoute = ({ restricted, children }) => {
	return isLogin() && restricted ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
