import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import isLogin from 'Utils/Libs/isLogin';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin() ? <Component {...props} /> : <Redirect to="/signin" />
			}
		/>
	);
};

export default PrivateRoute;
