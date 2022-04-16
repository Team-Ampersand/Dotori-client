import { StuInfoController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';
import { toast } from 'react-toastify';

export const getStuInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(StuInfoController.getStuInfo(role));
		return { data };
	} catch (e: any) {
		if (
			e.message === 'Request failed with status code 401' ||
			e.message === 'Request failed with status code 403'
		) {
			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			window.location.replace('/');
			toast.info('로그아웃 되었어요');
		}
	}
};

export const getClassStuInfo = async (role: string, classId: number) => {
	try {
		const { data } = await apiClient.get(
			StuInfoController.getClassStuInfo(role, classId)
		);
		return { data };
	} catch (e: any) {}
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
			toast.warning('이미 등록된 학번이에요');
		}
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
	} catch (e: any) {}
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
	} catch (e: any) {}
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
	} catch (e: any) {}
};

export const banSelfStudy = async (role: string, stuId: number) => {
	try {
		const { data } = await apiClient.put(
			StuInfoController.banSelfStudy(role, stuId)
		);
		return { data };
	} catch (e: any) {
		toast.info(e);
	}
};

export const banCancelSelfStudy = async (role: string, stuId: number) => {
	try {
		const { data } = await apiClient.put(
			StuInfoController.banCancelSelfStudy(role, stuId)
		);
		return { data };
	} catch (e: any) {
		toast.info(e);
	}
};

export const searchName = async (role: string, memberName: string, e?: any) => {
	try {
		if (memberName === '') {
			toast.warning('이름을 입력해주세요');
			return null;
		}
		const { data } = await apiClient.get(
			StuInfoController.searchName(role, memberName)
		);
		return { data };
	} catch (e: any) {}
};
