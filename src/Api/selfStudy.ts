import RequestApi from '../Utils/Libs/requestApi';
import { SelfstudyController } from '../Utils/Libs/requestUrls';
import { getCookie } from 'Utils/Cookie';

class SelfStudy {
	async selfstudy() {
		return RequestApi({
			method: 'PUT',
			url: SelfstudyController.selfStudy(localStorage.getItem('role')),
		});
	}
	async lookupstudy() {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.selfStudy(localStorage.getItem('role')),
		});
	}
	async cancelstudy() {
		return RequestApi({
			method: 'PUT',
			url: SelfstudyController.cancelStudy(localStorage.getItem('role')),
		});
	}
	async classlookup(classID: string) {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.classLookup(
				parseInt(classID),
				localStorage.getItem('role')!
			),
		});
	}
	async studyinfo() {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.studyInfo(localStorage.getItem('role')),
		});
	}
}

export default new SelfStudy();
