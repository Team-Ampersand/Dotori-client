import { useDecode } from './useDecode';

export const useRole = () => {
	const user = useDecode();
	if (user.auth[0] === 'ROLE_MEMBER') return 'member';
	else if (user.auth[0] === 'ROLE_ADMIN') return 'admin';
	else if (user.auth[0] === 'ROLE_DEVELOPER') return 'developer';
	else if (user.auth[0] === 'ROLE_COUNCILLOR') return 'councillor';
	else return '';
};
