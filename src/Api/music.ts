import RequestApi from 'Utils/Libs/requestApi';
import { MusicController } from 'Utils/Libs/requestUrls';
import { rolelookup } from 'Utils/Libs/roleLookup';

class Music {
	async music(musicUrl: string) {
		try {
			const role = await rolelookup();
			const data = {
				musicUrl: musicUrl,
			};
			return RequestApi({
				method: 'POST',
				url: MusicController.music(role),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async musicLookup() {
		try {
			const role = await rolelookup();
			return RequestApi({
				method: 'GET',
				url: MusicController.music(role),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async todayMusic() {
		try {
			const role = await rolelookup();
			return RequestApi({
				method: 'GET',
				url: MusicController.todayMusic(role),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async deleteMusic(id: number) {
		try {
			const role = await rolelookup();
			return RequestApi({
				method: 'DELETE',
				url: MusicController.deleteMusic(role, id),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Music();
