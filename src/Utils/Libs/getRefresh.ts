import axios, { AxiosRequestConfig } from 'axios';
import jwt from 'jwt-decode';
import { baseURL } from 'Utils/Config/Config';
import { RefreshTokenController } from 'Utils/Libs/requestUrls';

type user = {
	sub: string;
	iat: number;
	exp: number;
	auth: string[];
};

export const getRefresh = async (config: AxiosRequestConfig) => {
	let accessToken = localStorage.getItem('Dotori_accessToken') ?? '';
	const user: user = accessToken
		? jwt(accessToken)
		: { sub: 'auth', iat: 0, exp: 9999999999999, auth: [] };
	const nowDate = new Date().getTime() / 1000;
	config.headers.common['authorization'] = accessToken;

	if (user.exp < nowDate) {
		try {
			const { data } = await axios.put(
				`${baseURL}${RefreshTokenController.refresh()}`,
				{ email: user.sub },
				{
					headers: {
						Authorization: '',
						RefreshToken: localStorage.getItem('Dotori_refreshToken'),
					},
				}
			);
			config.headers.common['authorization'] = await data.data.NewAccessToken;

			localStorage.setItem('Dotori_accessToken', data.data.NewAccessToken);
			localStorage.setItem('Dotori_refreshToken', data.data.NewRefreshToken);
		} catch (e: any) {
			if (e.message === 'Request failed with status code 400') {
				alert('로그아웃 되었어요');
				localStorage.removeItem('Dotori_accessToken');
				localStorage.removeItem('Dotori_refreshToken');
				window.location.replace('/');
			} else alert(e);
		}
	}
	return config;
};
