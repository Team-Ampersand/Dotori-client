import RequestApi from '../Utils/Libs/requestApi';
import { SelfstudyController } from '../Utils/Libs/requestUrls';
import { getCookie } from 'Utils/Cookie';

class SelfStudy {
	async selfstudy() {
		const role = await getCookie('role');
		return RequestApi({
			method: 'PUT',
			url: SelfstudyController.selfStudy(role),
		});
	}
	async lookupstudy() {
		const role = await getCookie('role');
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.selfStudy(role),
		});
	}
	async cancelstudy() {
		const role = await getCookie('role');
		return RequestApi({
			method: 'PUT',
			url: SelfstudyController.cancelStudy(role),
		});
	}
	async classlookup(classID: string) {
		const role = await getCookie('role');
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.classLookup(parseInt(classID), role),
		});
	}
	async studyinfo() {
		const role = await getCookie('role');
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.studyInfo(role),
		});
	}
}

export default new SelfStudy();
