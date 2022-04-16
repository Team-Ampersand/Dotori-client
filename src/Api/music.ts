import { toast } from 'react-toastify';
import { apiClient } from 'Utils/Libs/apiClient';
import { MusicController } from 'Utils/Libs/requestUrls';

export const music = async (role: string, musicUrl: string) => {
	try {
		const { data } = await apiClient.post(MusicController.music(role), {
			musicUrl: musicUrl,
		});
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			toast.info('이미 노래를 신청 해 신청 하실 수 없어요');
		}
	}
};

export const deleteMusic = async (role: string, id: number) => {
	try {
		const { data } = await apiClient.delete(
			MusicController.deleteMusic(role, id)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			toast.warning('음악을 찾을 수 없어요');
		}
	}
};

export const dateMusic = async (role: string, date: any) => {
	try {
		const { data } = await apiClient.get(MusicController.dateMusic(role, date));
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
