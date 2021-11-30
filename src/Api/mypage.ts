import { MyPageController } from 'Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class MyPage {
	mypage() {
		try {
			return RequestApi({
				method: 'GET',
				url: MyPageController.home(),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new MyPage();
