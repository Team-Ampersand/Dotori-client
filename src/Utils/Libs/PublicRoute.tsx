import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from 'Utils/Libs/isLogin';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
