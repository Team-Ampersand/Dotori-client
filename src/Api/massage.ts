import { MassageController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';
import { toast } from 'react-toastify';

export const massage = async (role: string) => {
	try {
		const { data } = await apiClient.put(MassageController.massage(role));
		toast.success('안마의자 신청이 완료되었어요');
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409')
			toast.warning('안마의자 신청 인원이 5명을 넘어 신청할 수 없어요');
		else toast.warning('안마의자 신청을 할 수 없는 상태에요');
	}
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
		toast.success(
			'안마의자 신청이 취소 되었어요. 오늘 하루 동안 다시 신청이 불가능 해요'
		);
		return { data };
	} catch (e) {}
};
