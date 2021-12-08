import { getCookie } from 'Utils/Cookie';
import RequestApi from 'Utils/Libs/requestApi';
import { MusicController } from 'Utils/Libs/requestUrls';
import { rolelookup } from 'Utils/Libs/roleLookup';

class Music {
	role = getCookie('role');
	music(musicUrl: string) {
		try {
			const data = {
				musicUrl: musicUrl,
			};
			return RequestApi({
				method: 'POST',
				url: MusicController.music(this.role),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	musicLookup() {
		try {
			return RequestApi({
				method: 'GET',
				url: MusicController.music(this.role),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	todayMusic() {
		try {
			return RequestApi({
				method: 'GET',
				url: MusicController.todayMusic(this.role),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	deleteMusic(id: number) {
		try {
			return RequestApi({
				method: 'DELETE',
				url: MusicController.deleteMusic(this.role, id),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Music();
