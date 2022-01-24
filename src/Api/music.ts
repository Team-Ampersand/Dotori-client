import { getCookie } from 'Utils/Cookie';
import RequestApi from 'Utils/Libs/requestApi';
import { MusicController } from 'Utils/Libs/requestUrls';

class Music {
	music(musicUrl: string) {
		try {
			const data = {
				musicUrl: musicUrl,
			};
			return RequestApi({
				method: 'POST',
				url: MusicController.music(localStorage.getItem('role')),
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
				url: MusicController.music(localStorage.getItem('role')),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async deleteMusic(id: number) {
		try {
			return RequestApi({
				method: 'DELETE',
				url: MusicController.deleteMusic(localStorage.getItem('role'), id),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async dateMusic() {
		try {
			return RequestApi({
				method: 'GET',
				url: MusicController.dateMusic(localStorage.getItem('role')),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Music();
