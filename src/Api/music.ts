import { apiClient } from 'Utils/Libs/apiClient';
import { MusicController } from 'Utils/Libs/requestUrls';

export const music = async (role: string, musicUrl: string) => {
	try {
		const { data } = await apiClient.post(MusicController.music(role), {
			musicUrl: musicUrl,
		});
		return { data };
	} catch (e) {
		if (e.message === 'Request failed with status code 409') {
			alert('이미 노래를 신청 해 신청 하실 수 없어요');
		}
	}
};

export const deleteMusic = async (role: string, id: number) => {
	try {
		const { data } = await apiClient.delete(
			MusicController.deleteMusic(role, id)
		);
		return { data };
	} catch (e) {
		alert(e);
	}
};

export const dateMusic = async (role: string, date: any) => {
	try {
		const { data } = await apiClient.get(MusicController.dateMusic(role, date));
		return { data };
	} catch (e) {}
};
