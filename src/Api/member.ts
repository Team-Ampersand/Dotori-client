import { MemberController } from '../Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';
import { toast } from 'react-toastify';

export const signin = async (id: string, password: string) => {
	try {
		const { data } = await apiClient.post(MemberController.signin(), {
			email: id,
			password: password,
		});
		apiClient.defaults.headers.common['authorization'] = data.data.accessToken;
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			toast.warning('해당 유저가 없어요');
		} else if (e.message === 'Request failed with status code 400') {
			toast.info('비밀번호가 올바르지 않아요');
		}
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
		if (e.message === 'Request failed with status code 409') {
			toast.warning('이미 가입된 유저에요');
		}
	}
};

export const logout = async () => {
	try {
		const { data } = await apiClient.delete(MemberController.logout());
		return { data };
	} catch (e: any) {}
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
	newPassword: string,
	navigate
) => {
	try {
		const { data } = await apiClient.put(MemberController.change(), {
			currentPassword: currentPassword,
			newPassword: newPassword,
		});
		toast.success('비밀번호가 변경되었어요');
		navigate('/home');
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 400') {
			toast.warning('입력해주신 정보를 다시 확인해주세요');
		}
	}
};

export const authPassword = async (email: string, setDisplayed) => {
	try {
		const { data } = await apiClient.post(MemberController.authPassword(), {
			email: email,
		});
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 400') {
			toast.warning('이메일 형식이 잘못 되었어요');
		} else if (e.message === 'Request failed with status code 404') {
			toast.info('존재하지 않는 회원 정보에요');
			setDisplayed(false);
		}
	}
};

export const findPassword = async (newPassword: string, emailCode: string) => {
	try {
		const { data } = await apiClient.post(MemberController.findPassword(), {
			key: emailCode,
			newPassword: newPassword,
		});
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 400') {
			toast.warning('입력해주신 정보를 다시 확인해주세요');
		}
	}
};

export const auth = async (email: string) => {
	try {
		await apiClient.post(MemberController.auth(), {
			email: email,
		});
		toast.success('인증번호가 위의 이메일로 전송 되었어요');
		return true;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 409') {
			toast.warning('이미 가입된 유저에요');
		}
		return false;
	}
};

export const authCheck = async (emailCode: string) => {
	try {
		await apiClient.post(MemberController.authcheck(), {
			emailCode: emailCode,
		});
		return true;
	} catch (e: any) {
		if (e.message === 'Request failed with status code 400') {
			toast.warning('인증 키가 일치하지 않아요');
		}
		return false;
	}
};

export const changeGender = async (gender: string, email: string) => {
	try {
		const { data } = await apiClient.put(MemberController.gender(), {
			gender: gender,
			email: email,
		});
		return { data };
	} catch (e) {}
};
