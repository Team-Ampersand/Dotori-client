import { MemberController } from '../Utils/Libs/requestUrls';
import RequestApi from '../Utils/Libs/requestApi';
import { apiClient } from 'Utils/Libs/apiClient';

export const signin = async (id: string, password: string) => {
	try {
		const { data } = await apiClient.post(MemberController.signin(), {
			email: id,
			password: password,
		});
		return { data };
	} catch (e: any) {
		throw new Error(e);
	}
};

export const signup = async (
	email: string,
	password: string,
	name: string,
	stuNum: string
) => {
	try {
		const { data } = await apiClient.post(MemberController.signup(), {
			email: email,
			password: password,
			memberName: name,
			stuNum: stuNum,
		});
		return { data };
	} catch (e: any) {
		throw new Error(e);
	}
};

export const logout = async () => {
	try {
		const { data } = await apiClient.delete(MemberController.logout());
		return { data };
	} catch (e) {}
};

export const withdrawal = async (email: string, password: string) => {
	try {
		const { data } = await apiClient.post(MemberController.withdrawal(), {
			email: email,
			password: password,
		});
		return { data };
	} catch (e) {}
};

export const passwordChange = async (
	currentPassword: string,
	newPassword: string
) => {
	try {
		const { data } = await apiClient.put(MemberController.change(), {
			currentPassword: currentPassword,
			newPassword: newPassword,
		});
		return { data };
	} catch (e) {}
};

export const authPassword = async (email: string) => {
	const { data } = await apiClient.post(MemberController.authPassword(), {
		email: email,
	});
	return { data };
};

export const findPassword = async (newPassword: string, emailCode: string) => {
	const { data } = await apiClient.post(MemberController.findPassword(), {
		key: emailCode,
		newPassword: newPassword,
	});
	return { data };
};

export const auth = async (email: string) => {
	const { data } = await apiClient.post(MemberController.auth(), {
		email: email,
	});
	return { data };
};

export const authCheck = async (emailCode: string) => {
	try {
		const { data } = await apiClient.post(MemberController.authcheck(), {
			emailCode: emailCode,
		});
		return { data };
	} catch (e) {}
};
