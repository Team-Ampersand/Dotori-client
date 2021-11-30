import { RoleController } from '../Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class Role {
	role() {
		return RequestApi({
			method: 'GET',
			url: RoleController.role(),
		});
	}
}

export default new Role();
