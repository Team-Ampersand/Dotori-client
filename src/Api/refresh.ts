import { RefreshTokenController } from 'Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class Refresh {
	refresh() {
		try {
			return RequestApi({
				method: 'GET',
				url: RefreshTokenController.refresh(),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Refresh();
