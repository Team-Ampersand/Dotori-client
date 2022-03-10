import { MassageController } from 'Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class Massage {
	massage() {
		try {
			return RequestApi({
				method: 'PUT',
				url: MassageController.massage(localStorage.getItem('role')),
			});
		} catch (e: any) {
			alert('이미 안마의자 신청을 하셨거나 할 수 없는 상태에요\n' + e);
		}
	}
	massageLookup() {
		try {
			return RequestApi({
				method: 'GET',
				url: MassageController.massage(localStorage.getItem('role')),
			});
		} catch (e) {}
	}
	massageInfo() {
		try {
			return RequestApi({
				method: 'GET',
				url: MassageController.massageInfo(localStorage.getItem('role')),
			});
		} catch (e: any) {
			alert(e);
		}
	}
	cancelMassage() {
		try {
			return RequestApi({
				method: 'PUT',
				url: MassageController.cancelMassage(localStorage.getItem('role')),
			});
		} catch (e: any) {
			alert('이미 안마의자 신청을 취소 하셨거나 할 수 없는 상태에요\n' + e);
		}
	}
}

export default new Massage();
