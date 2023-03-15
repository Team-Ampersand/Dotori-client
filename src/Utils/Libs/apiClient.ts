import axios from 'axios';
import { baseURL } from 'Utils/Config/Config';
import { getRefresh } from 'Utils/Libs/getRefresh';
import  BASE_HEADER  from 'Utils/Config/Config.json';

export const apiClient = axios.create({
	baseURL: baseURL,
	headers: BASE_HEADER
});

apiClient.interceptors.request.use(getRefresh);
