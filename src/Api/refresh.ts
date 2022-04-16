import { RefreshTokenController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';
import { toast } from 'react-toastify';

export const refresh = async () => {
	try {
		const { data } = await apiClient.get(RefreshTokenController.refresh());
		return { data };
	} catch (e: any) {
		if (
			e.message === 'Request failed with status code 401' ||
			e.message === 'Request failed with status code 403'
		) {
			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			window.location.replace('/');
			toast.info('로그아웃 되었어요');
		}
	}
};
