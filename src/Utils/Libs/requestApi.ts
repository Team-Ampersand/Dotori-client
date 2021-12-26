import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, BASE_HEADER } from '../Config/Config.json';
import { getCookie } from 'Utils/Cookie';

export interface HasToken {
	HasToken?: boolean;
}

const RequestApi = async (
	p: AxiosRequestConfig,
	condition: HasToken = { HasToken: false }
) => {
	let accessToken: string | null = null;
	let refreshToken: string | null = null;
	if (!condition.HasToken) {
		accessToken = localStorage.getItem('Dotori_accessToken');
		refreshToken = localStorage.getItem('Dotori_refreshToken');
	}
	try {
		let header = Object.assign(BASE_HEADER, p.headers);
		if (refreshToken) {
			header = Object.assign(header, {
				Authorization: accessToken,
				RefreshToken: refreshToken,
			});
		}
		const res = axios({
			method: p.method,
			baseURL: BASE_URL,
			url: p.url,
			data: p.data,
			headers: header,
		});
		return res;
	} catch (error) {
		throw error;
	}
};

export default RequestApi;
