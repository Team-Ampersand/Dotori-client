import RequestApi from '../Utils/Libs/requestApi';
import { EmailController } from '../Utils/Libs/requestUrls';

class Email {
	async auth(email: string) {
		try {
			const data = {
				email: email,
			};
			return await RequestApi({
				method: 'POST',
				url: EmailController.auth(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}

	async authCheck(emailCode: string) {
		try {
			const data = {
				key: emailCode,
			};
			return await RequestApi({
				method: 'POST',
				url: EmailController.authcheck(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Email();
