import axios, { AxiosRequestConfig } from 'axios';
import jwt from 'jwt-decode';
import { baseURL } from 'Utils/Config/Config';
import { apiClient } from 'Utils/Libs/apiClient';
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

	if (user.exp < nowDate) {
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
		localStorage.setItem('Dotori_accessToken', data.NewAccessToken);
		localStorage.setItem('Dotori_refreshToken', data.NewRefreshToken);
	}
	return config;
};
