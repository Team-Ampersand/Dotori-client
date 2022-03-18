import axios, { AxiosRequestConfig } from 'axios';
import { BASE_HEADER } from '../Config/Config.json';
import { baseURL } from 'Utils/Config/Config';

const RequestApi = (p: AxiosRequestConfig) => {
	try {
		let header = Object.assign(BASE_HEADER, p.headers, {
			Authorization: localStorage.getItem('Dotori_accessToken') ?? '',
			RefreshToken: localStorage.getItem('Dotori_refreshToken') ?? '',
		});
		const res = axios({
			method: p.method,
			baseURL: baseURL,
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
