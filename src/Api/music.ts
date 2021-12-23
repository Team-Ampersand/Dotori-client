import { getCookie } from 'Utils/Cookie';
import RequestApi from 'Utils/Libs/requestApi';
import { MusicController } from 'Utils/Libs/requestUrls';

class Music {
	async music(musicUrl: string) {
		try {
			const data = {
				musicUrl: musicUrl,
			};
			return RequestApi({
				method: 'POST',
				url: MusicController.music(await getCookie('role')),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async musicLookup() {
		try {
			return RequestApi({
				method: 'GET',
				url: MusicController.music(await getCookie('role')),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async todayMusic() {
		try {
			return RequestApi({
				method: 'GET',
				url: MusicController.todayMusic(await getCookie('role')),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async deleteMusic(id: number) {
		try {
			return RequestApi({
				method: 'DELETE',
				url: MusicController.deleteMusic(await getCookie('role'), id),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Music();
