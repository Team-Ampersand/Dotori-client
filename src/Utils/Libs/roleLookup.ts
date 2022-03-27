export const rolelookup = async (role: string) => {
	let Role = '';
	if (role === 'ROLE_MEMBER') Role = 'member';
	if (role === 'ROLE_ADMIN') Role = 'admin';
	if (role === 'ROLE_DEVELOPER') Role = 'developer';
	if (role === 'ROLE_COUNCILLOR') Role = 'councillor';
	return Role;
};
