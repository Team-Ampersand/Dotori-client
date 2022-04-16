import { MassageController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';

export const massage = async (role: string) => {
	try {
		const { data } = await apiClient.put(MassageController.massage(role));
		return { data };
	} catch (e) {}
};

export const massageLookup = async (role: string) => {
	try {
		const { data } = await apiClient.get(MassageController.massage(role));
		return { data };
	} catch (e) {}
};

export const massageInfo = async (role: string) => {
	try {
		const { data } = await apiClient.get(MassageController.massageInfo(role));
		return { data };
	} catch (e) {}
};

export const cancelMassage = async (role: string) => {
	try {
		const { data } = await apiClient.put(MassageController.cancelMassage(role));
		return { data };
	} catch (e) {}
};
