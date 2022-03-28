import axios from 'axios';
import { baseURL } from 'Utils/Config/Config';
import { getRefresh } from 'Utils/Libs/getRefresh';

export const apiClient = axios.create({
	baseURL: baseURL,
	headers: {
		Authorization: localStorage.getItem('Dotori_accessToken') ?? '',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,POST,DELETE,PATCH,PUT,OPTIONS',
	},
});

apiClient.interceptors.request.use(getRefresh);
