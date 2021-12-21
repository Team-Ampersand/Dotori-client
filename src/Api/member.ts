import { MemberController } from '../Utils/Libs/requestUrls';
import RequestApi from '../Utils/Libs/requestApi';

class Member {
	signin(id: string, password: string) {
		try {
			const data = {
				email: id,
				password: password,
			};
			return RequestApi({
				method: 'POST',
				url: MemberController.signin(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	signup(email: string, password: string, name: string, stuId: string) {
		try {
			const data = {
				email: email,
				password: password,
				username: name,
				stdNum: stuId,
			};
			return RequestApi({
				method: 'POST',
				url: MemberController.signup(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	logout() {
		try {
			return RequestApi({
				method: 'DELETE',
				url: MemberController.logout(),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	delete(email: string, password: string) {
		try {
			const data = {
				email: email,
				password: password,
			};
			return RequestApi({
				method: 'POST',
				url: MemberController.delete(),
				data: data,
			});
		} catch (e) {}
	}
	passwordChange(currentPassword: string, newPassword: string) {
		try {
			const data = {
				currentPassword: currentPassword,
				newPassword: newPassword,
			};
			return RequestApi({
				method: 'POST',
				url: MemberController.change(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	authPassword(email: string) {
		try {
			const data = {
				email: email,
			};
			return RequestApi({
				method: 'POST',
				url: MemberController.authPassword(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	findPassword(newPassword: string) {
		const data = {
			newPassword: newPassword,
		};
		return RequestApi({
			method: 'POST',
			url: MemberController.findPassword(),
			data: data,
		});
	}
}

export default new Member();
