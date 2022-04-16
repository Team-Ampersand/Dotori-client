import { PenaltyController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';
import { toast } from 'react-toastify';

export const getStuInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(PenaltyController.getStuInfo(role));
		return { data };
	} catch (e: any) {
		if (
			e.message === 'Request failed with status code 401' ||
			e.message === 'Request failed with status code 403'
		) {
			toast.info('로그아웃 되었어요');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			window.location.replace('/');
		}
	}
};

export const getClassStuInfo = async (role: string | null, classId: number) => {
	try {
		const { data } = await apiClient.get(
			PenaltyController.getClassStuInfo(role, classId)
		);
		return { data };
	} catch (e: any) {}
};

export const getPenaltyInfo = async (role: string, stuNum: string) => {
	try {
		const { data } = await apiClient.get(
			PenaltyController.getPenaltyInfo(role, stuNum)
		);
		return { data };
	} catch (e: any) {}
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
		if (e.message === 'Request failed with status code 404') {
			toast.warning('해당 학생을 찾을 수 없어요');
		}
	}
};

export const getModifyPenaltyInfo = async (role: string, stuNum: string) => {
	try {
		const { data } = await apiClient.get(
			PenaltyController.getModifyPenaltyInfo(role, stuNum)
		);
		return { data };
	} catch (e: any) {}
};

export const deletePenaltyInfo = async (role: string, PenaltyId: number) => {
	try {
		const { data } = await apiClient.delete(
			PenaltyController.deletePenaltyInfo(role, PenaltyId)
		);
		return { data };
	} catch (e: any) {}
};

export const searchName = async (role: string, name: string) => {
	try {
		if (name === '') {
			toast.warning('이름을 입력해주세요');
			return null;
		}
		const { data } = await apiClient.get(
			PenaltyController.searchName(role, name)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			toast.warning('해당하는 학생이 없어요');
		}
	}
};

export const getPenaltyMainInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(
			PenaltyController.getPenaltyMainInfo(role)
		);
		return { data };
	} catch (e: any) {}
};
