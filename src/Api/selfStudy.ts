import { selfStudyController } from 'Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class selfStudy {
	async apply() {
		try {
			return await RequestApi({
				method: 'PUT',
				url: selfStudyController.apply(),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new selfStudy();
