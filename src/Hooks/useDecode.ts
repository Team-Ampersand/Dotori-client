import jwt from 'jwt-decode';

export const useDecode = () => {
	const token: string = localStorage.getItem('Dotori_accessToken') ?? '';
	const user = jwt(token);
	return user;
};
