import { StuInfoController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';

export const getStuInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(StuInfoController.getStuInfo(role));
		return { data };
	} catch (e: any) {
		if (e.massage === 'Request failed with status code 404') {
			alert('등록된 학생 정보가 없어요');
		} else if (e.massage === 'Request failed with status code 401') {
			alert('로그아웃 되었어요. 다시 로그인 해주세요');
			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');
		} else alert(e);
	}
};

export const getClassStuInfo = async (role: string, classId: number) => {
	try {
		const { data } = await apiClient.get(
			StuInfoController.getClassStuInfo(role, classId)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			alert('해당 반에 등록된 학생 정보가 없어요');
		} else alert(e);
	}
};

export const updateStuNum = async (
	role: string,
	stuId: number,
	stuNum: string
) => {
	try {
		const { data } = await apiClient.put(StuInfoController.updateStuNum(role), {
			receiverId: stuId,
			stuNum: stuNum,
		});
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			return;
		} else alert(e);
	}
};

export const updateStuName = async (
	role: string,
	stuId: number,
	memberName: string
) => {
	try {
		const { data } = await apiClient.put(
			StuInfoController.updateStuName(role),
			{
				receiverId: stuId,
				memberName: memberName,
			}
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			return;
		} else alert(e);
	}
};

export const updateStuRole = async (
	role: string,
	stuId: number,
	stuRole: string
) => {
	try {
		const { data } = await apiClient.put(
			StuInfoController.updateStuRole(role),
			{
				receiverId: stuId,
				roles: [stuRole],
			}
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			return;
		} else alert(e);
	}
};

export const updateStuGender = async (
	role: string,
	stuId: number,
	gender: string
) => {
	try {
		const { data } = await apiClient.put(StuInfoController.updateGender(role), {
			receiverId: stuId,
			gender: gender,
		});
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			return;
		} else alert(e);
	}
};

export const banSelfStudy = async (role: string, stuId: number) => {
	try {
		const { data } = await apiClient.put(
			StuInfoController.banSelfStudy(role, stuId)
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};

export const banCancelSelfStudy = async (role: string, stuId: number) => {
	try {
		const { data } = await apiClient.put(
			StuInfoController.banCancelSelfStudy(role, stuId)
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};

export const searchName = async (role: string, memberName: string, e?: any) => {
	try {
		if (memberName === '') {
			alert('이름을 입력해주세요');
			return null;
		}
		const { data } = await apiClient.get(
			StuInfoController.searchName(role, memberName)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			alert('해당하는 학생이 없어요');
		} else alert(e);
	}
};
