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
}

export default new Member();
