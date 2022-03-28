import jwt from 'jwt-decode';

type user = {
	sub: string;
	iat: number;
	exp: number;
	auth: string[];
};

export const useDecode = () => {
	const user: user = jwt(localStorage.getItem('Dotori_accessToken') ?? '');
	return user;
};
