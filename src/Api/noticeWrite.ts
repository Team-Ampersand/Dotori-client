import { noticeController } from 'Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class notice {
	async adminWrite(title: string, content: string) {
		try {
			const data = {
				title: title,
				content: content,
			};
			return await RequestApi({
				method: 'POST',
				url: noticeController.adminWrite(),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new notice();
