import { MyPageController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';

export const mypage = async () => {
	try {
		const { data } = await apiClient.get(MyPageController.home());
		return { data };
	} catch (e) {
		alert(e);
	}
};
