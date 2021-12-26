import { getCookie } from 'Utils/Cookie';

const isLogin = () => !!localStorage.getItem('Dotori_accessToken');

export default isLogin;
