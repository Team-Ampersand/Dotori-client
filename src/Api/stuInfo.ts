import { StuInfoController } from 'Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class stuInfo {
	async getStuInfo(role: string | null) {
		try {
			return await RequestApi({
				method: 'GET',
				url: StuInfoController.getStuInfo(role),
			});
		} catch (e: any) {
			if (e.massage === 'Request failed with status code 404') {
				alert('등록된 학생 정보가 없어요');
			} else if (e.massage === 'Request failed with status code 401') {
				alert('로그아웃 되었어요. 다시 로그인 해주세요');
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
				url: StuInfoController.getClassStuInfo(role, classId),
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 404') {
				alert('해당 반에 등록된 학생 정보가 없어요');
			} else return;
		}
	}
	async updateStuNum(role: string | null, stuId: number, stuNum: string) {
		try {
			const data = {
				receiverId: stuId,
				stuNum: stuNum,
			};
			return await RequestApi({
				method: 'PUT',
				url: StuInfoController.updateStuNum(role),
				data: data,
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 409') {
				return;
			} else throw Error(e);
		}
	}
	async updateStuName(role: string | null, stuId: number, memberName: string) {
		try {
			const data = {
				receiverId: stuId,
				memberName: memberName,
			};
			return await RequestApi({
				method: 'PUT',
				url: StuInfoController.updateStuName(role),
				data: data,
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 409') {
				return;
			} else throw Error(e);
		}
	}
	async updateStuRole(role: string | null, stuId: number, stuRole: string) {
		try {
			const data = {
				receiverId: stuId,
				roles: [stuRole],
			};
			return await RequestApi({
				method: 'PUT',
				url: StuInfoController.updateStuRole(role),
				data: data,
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 409') {
				return;
			} else throw Error(e);
		}
	}
	async banSelfStudy(role: string | null, stuId: number) {
		try {
			return await RequestApi({
				method: 'PUT',
				url: StuInfoController.banSelfStudy(role, stuId),
			});
		} catch (e: any) {
			throw Error(e);
		}
	}
	async banCancelSelfStudy(role: string | null, stuId: number) {
		try {
			return await RequestApi({
				method: 'PUT',
				url: StuInfoController.banCancelSelfStudy(role, stuId),
			});
		} catch (e: any) {
			throw Error(e);
		}
	}
	async searchName(role: string | null, memberName: string) {
		try {
			if (memberName === '') {
				return await this.getStuInfo(role);
			}
			return await RequestApi({
				method: 'GET',
				url: StuInfoController.searchName(role, memberName),
			});
		} catch (e: any) {
			if (e.message === 'Request failed with status code 404') {
				alert('해당하는 학생이 없어요');
			} else throw Error(e);
		}
	}
}

export default new stuInfo();
