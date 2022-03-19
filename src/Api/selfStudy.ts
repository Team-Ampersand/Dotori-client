import RequestApi from '../Utils/Libs/requestApi';
import { SelfstudyController } from '../Utils/Libs/requestUrls';

class SelfStudy {
	selfstudy() {
		return RequestApi({
			method: 'PUT',
			url: SelfstudyController.selfStudy(localStorage.getItem('role')),
		});
	}
	lookupstudy() {
		try {
			return RequestApi({
				method: 'GET',
				url: SelfstudyController.selfStudy(localStorage.getItem('role')),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	cancelstudy() {
		try {
			return RequestApi({
				method: 'PUT',
				url: SelfstudyController.cancelStudy(localStorage.getItem('role')),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	classlookup(classID: string) {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.classLookup(
				parseInt(classID),
				localStorage.getItem('role')!
			),
		});
	}
	studyinfo() {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.studyInfo(localStorage.getItem('role')),
		});
	}
}

export default new SelfStudy();
