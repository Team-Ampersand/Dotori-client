import { PenaltyController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';

export const getStuInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(PenaltyController.getStuInfo(role));
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			alert('등록된 학생 정보가 없어요');
		} else if (e.message === 'Request failed with status code 401') {
			alert('로그아웃 되었어요');
			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');
			window.location.replace('/');
		} else alert(e);
	}
};

export const getClassStuInfo = async (role: string | null, classId: number) => {
	try {
		const { data } = await apiClient.get(
			PenaltyController.getClassStuInfo(role, classId)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			alert('해당 반에 등록된 학생 정보가 없어요');
		} else alert(e);
	}
};

export const getPenaltyInfo = async (role: string, stuNum: string) => {
	try {
		const { data } = await apiClient.get(
			PenaltyController.getPenaltyInfo(role, stuNum)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			alert('등록된 학생 규정위반 정보가 없어요');
		} else alert(e);
	}
};

export const updatePenaltyInfo = async (
	role: string,
	date: string,
	rule: Array<string>,
	stuNum: Array<string>
) => {
	try {
		const { data } = await apiClient.post(
			PenaltyController.updatePenaltyInfo(role),
			{ date: date, rule: rule, stuNum: stuNum }
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};

export const getModifyPenaltyInfo = async (role: string, stuNum: string) => {
	try {
		const { data } = await apiClient.get(
			PenaltyController.getModifyPenaltyInfo(role, stuNum)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			alert('등록된 학생 규정위반 정보가 없어요');
		} else alert(e);
	}
};

export const deletePenaltyInfo = async (role: string, PenaltyId: number) => {
	try {
		const { data } = await apiClient.delete(
			PenaltyController.deletePenaltyInfo(role, PenaltyId)
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};

export const searchName = async (role: string, name: string) => {
	try {
		if (name === '') {
			return await getStuInfo(role);
		}
		const { data } = await apiClient.get(
			PenaltyController.searchName(role, name)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			alert('해당하는 학생이 없어요');
		} else alert(e);
	}
};

export const getPenaltyMainInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(
			PenaltyController.getPenaltyMainInfo(role)
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};
