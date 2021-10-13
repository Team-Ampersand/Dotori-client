import { MemberController } from '../Utils/Libs/requestUrls';
import RequestApi from '../Utils/Libs/requestApi';

class Member {
	async signin(id: string, password: string) {
		try {
			const data = {
				email: id,
				password: password,
			};
			return await RequestApi({
				method: 'POST',
				url: MemberController.signin(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	async signup(email: string, password: string, name: string, stuId: number) {
		try {
			const data = {
				email: email,
				password: password,
				username: name,
				stdNum: stuId,
			};
			return await RequestApi({
				method: 'POST',
				url: MemberController.signup(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Member();
