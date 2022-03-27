import { RefreshTokenController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';

export const refresh = async () => {
	try {
		const { data } = await apiClient.get(RefreshTokenController.refresh());
		return { data };
	} catch (e) {
		alert(e);
	}
};
