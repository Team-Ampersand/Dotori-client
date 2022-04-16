import { toast } from 'react-toastify';
import { apiClient } from 'Utils/Libs/apiClient';
import { SelfstudyController } from '../Utils/Libs/requestUrls';

export const selfStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.selfStudy(role));
		return { data };
	} catch (e) {}
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
