import RequestApi from '../Utils/Libs/requestApi';
import { EmailController } from '../Utils/Libs/requestUrls';

class Email {
	auth(email: string) {
		try {
			const data = {
				email: email,
			};
			return RequestApi({
				method: 'POST',
				url: EmailController.auth(),
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
				url: EmailController.authcheck(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new Email();
