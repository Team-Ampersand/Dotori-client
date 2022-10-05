import { toast } from 'react-toastify';
import { apiClient } from 'Utils/Libs/apiClient';
import { SelfstudyController } from '../Utils/Libs/requestUrls';

export const selfStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.selfStudy(role));
		toast.success('자습 신청이 완료 되었어요');
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409')
			toast.warning('자습 신청 인원이 50명이 넘어 신청하실 수 없어요');
		else toast.warning('자습 신청을 할 수 없는 상태에요');
	}
};

export const lookupStudy = async (role: string) => {
	try {
		const { data } = await apiClient.get(SelfstudyController.studyLookup(role));
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

export const cancelStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.cancelStudy(role));
		toast.success('자습 신청이 취소 되었어요');
		return { data };
	} catch (e) {}
};

export const classLookup = async (classID: string, role: string) => {
	try {
		const { data } = await apiClient.get(
			SelfstudyController.classLookup(parseInt(classID), role)
		);
		return { data };
	} catch (e: any) {}
};

export const studyInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(SelfstudyController.studyInfo(role));
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 403') {
			toast.info('로그아웃 되었어요');

			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			window.location.replace('/');
		}
	}
};

export const studyRank = async (role: string) => {
	try {
		const { data } = await apiClient.get(SelfstudyController.studyRank(role));
		return { data };
	} catch (e) {}
};

export const studySearch = async (role: string, stuName: string) => {
	try {
		const { data } = await apiClient.get(
			SelfstudyController.studySearch(role, stuName)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			toast.warning('해당 학생을 찾을 수 없어요');
		}
	}
};

export const studyCheck = async (
	role: string,
	memberId: number,
	check: boolean
) => {
	try {
		const { data } = await apiClient.patch(
			SelfstudyController.studyCheck(role, memberId),
			{
				selfStudyCheck: check,
			}
		);
		return { data };
	} catch (e: any) {}
};
