import { apiClient } from 'Utils/Libs/apiClient';
import { SelfstudyController } from '../Utils/Libs/requestUrls';

export const selfStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.selfStudy(role));
		return { data };
	} catch (e) {
		alert(e);
	}
};

export const lookupStudy = async (role: string) => {
	try {
		const { data } = await apiClient.get(SelfstudyController.studyLookup(role));
		return { data };
	} catch (e) {
		alert(e);
	}
};

export const cancelStudy = async (role: string) => {
	try {
		const { data } = await apiClient.put(SelfstudyController.cancelStudy(role));
		return { data };
	} catch (e) {
		alert(e);
	}
};

export const classLookup = async (classID: string, role: string) => {
	try {
		const { data } = await apiClient.get(
			SelfstudyController.classLookup(parseInt(classID), role)
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};

export const studyInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(SelfstudyController.studyInfo(role));
		return { data };
	} catch (e) {
		alert(e);
	}
};

export const studyRank = async (role: string) => {
	try {
		const { data } = await apiClient.get(SelfstudyController.studyRank(role));
		return { data };
	} catch (e) {
		alert(e);
	}
};
