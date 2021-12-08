import RequestApi from '../Utils/Libs/requestApi';
import { SelfstudyController } from '../Utils/Libs/requestUrls';
import { getCookie } from 'Utils/Cookie';

class SelfStudy {
	role = getCookie('role');
	selfstudy() {
		return RequestApi({
			method: 'PUT',
			url: SelfstudyController.selfStudy(this.role),
		});
	}
	lookupstudy() {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.selfStudy(this.role),
		});
	}
	cancelstudy() {
		return RequestApi({
			method: 'PUT',
			url: SelfstudyController.cancelStudy(this.role),
		});
	}
	countstudy() {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.countStudy(this.role),
		});
	}
	classlookup(classID: string) {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.classLookup(parseInt(classID), this.role),
		});
	}
	studystatus() {
		return RequestApi({
			method: 'GET',
			url: SelfstudyController.studyStatus(this.role),
		});
	}
}

export default new SelfStudy();
