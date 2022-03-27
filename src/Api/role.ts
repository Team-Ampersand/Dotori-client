import { RoleController } from '../Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';

export const role = async () => {
	try {
		const { data } = await apiClient.get(RoleController.role());
		return { data };
	} catch (e) {
		alert(e);
	}
};
