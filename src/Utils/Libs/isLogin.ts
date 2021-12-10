import { getCookie } from 'Utils/Cookie';

const isLogin = () => !!getCookie('Dotori_accessToken');

export default isLogin;
