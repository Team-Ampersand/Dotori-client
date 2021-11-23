import { rolelookup } from 'Utils/Libs/roleLookup';
import RequestApi from '../Utils/Libs/requestApi';
import { MemberSelfstudyController } from '../Utils/Libs/requestUrls';

class SelfStudy {
	async selfstudy() {
		const role = await rolelookup();
		return RequestApi({
			method: 'PUT',
			url: MemberSelfstudyController.selfStudy(role),
		});
	}
	async lookupstudy() {
		const role = await rolelookup();
		return RequestApi({
			method: 'GET',
			url: MemberSelfstudyController.selfStudy(role),
		});
	}
	async cancelstudy() {
		const role = await rolelookup();
		return RequestApi({
			method: 'PUT',
			url: MemberSelfstudyController.cancelStudy(role),
		});
	}
	async countstudy() {
		const role = await rolelookup();
		return RequestApi({
			method: 'GET',
			url: MemberSelfstudyController.countStudy(role),
		});
	}
	async classlookup(classID: string) {
		const role = await rolelookup();
		return RequestApi({
			method: 'GET',
			url: MemberSelfstudyController.classLookup(parseInt(classID), role),
		});
	}
}

export default new SelfStudy();
