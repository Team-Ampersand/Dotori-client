import { PenaltyController } from 'Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class penaltyInfo {
	async getStuInfo(role: string | null) {
		try {
			return await RequestApi({
				method: 'GET',
				url: PenaltyController.getStuInfo(role),
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 404') {
				alert('등록된 학생 정보가 없어요');
			} else if (e.message === 'Request failed with status code 401') {
				alert('로그아웃 되었어요');
				localStorage.removeItem('Dotori_accessToken');
				localStorage.removeItem('Dotori_refreshToken');
				localStorage.removeItem('role');
				window.location.reload();
			} else throw Error(e);
		}
	}
	async getClassStuInfo(role: string | null, classId: number) {
		try {
			return await RequestApi({
				method: 'GET',
				url: PenaltyController.getClassStuInfo(role, classId),
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 404') {
				alert('해당 반에 등록된 학생 정보가 없어요');
			} else return;
		}
	}
	async getPenaltyInfo(role: string | null, stuNum: string) {
		try {
			return await RequestApi({
				method: 'GET',
				url: PenaltyController.getPenaltyInfo(role, stuNum),
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 404') {
				alert('등록된 학생 규정위반 정보가 없어요');
			} else return;
		}
	}
	updatePenaltyInfo(date: string, rule: string, stuNum: Array<string>) {
		try {
			const data = {
				date: date,
				rule: rule,
				stuNum: stuNum,
			};
			return RequestApi({
				method: 'POST',
				url: PenaltyController.updatePenaltyInfo(localStorage.getItem('role')),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async getModifyPenaltyInfo(role: string | null, stuNum) {
		try {
			return await RequestApi({
				method: 'GET',
				url: PenaltyController.getModifyPenaltyInfo(role, stuNum),
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 404') {
				alert('등록된 학생 규정위반 정보가 없어요');
			} else return;
		}
	}
	async deletePenaltyInfo(role: string | null, PenaltyId: number) {
		try {
			return await RequestApi({
				method: 'DELETE',
				url: PenaltyController.deletePenaltyInfo(role, PenaltyId),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async searchName(role: string | null, name: string) {
		try {
			if (name === '') {
				return await this.getStuInfo(role);
			}
			return await RequestApi({
				method: 'GET',
				url: PenaltyController.searchName(role, name),
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 404') {
				alert('해당하는 학생이 없어요');
			} else throw Error(e);
		}
	}
	getPenaltyMainInfo() {
		try {
			return RequestApi({
				method: 'GET',
				url: PenaltyController.getPenaltyMainInfo(localStorage.getItem('role')),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new penaltyInfo();
