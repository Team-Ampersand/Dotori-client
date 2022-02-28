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
				memberName: name,
				stuNum: stuId,
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
				method: 'PUT',
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
	findPassword(newPassword: string, emailCode: string) {
		const data = {
			key: emailCode,
			newPassword: newPassword,
		};
		return RequestApi({
			method: 'POST',
			url: MemberController.findPassword(),
			data: data,
		});
	}
	auth(email: string) {
		try {
			const data = {
				email: email,
			};
			return RequestApi({
				method: 'POST',
				url: MemberController.auth(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}

	authCheck(emailCode: string) {
		try {
			const data = {
				key: emailCode,
			};
			return RequestApi({
				method: 'POST',
				url: MemberController.authcheck(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Member();
