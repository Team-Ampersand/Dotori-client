export const baseURL =
	process.env.NODE_ENV === 'development'
		? 'http://15.164.184.247:8080/v1'
		: 'https://server.dotori-gsm.com/v1';
