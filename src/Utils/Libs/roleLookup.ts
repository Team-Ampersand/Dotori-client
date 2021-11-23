import role from 'Api/role';

export const rolelookup = async () => {
	let Role: string = (await role.role()).data.data[0];
	if (Role === 'ROLE_MEMBER') Role = 'member';
	if (Role === 'ROLE_ADMIN') Role = 'admin';
	if (Role === 'ROLE_DEVELOPER') Role = 'developer';
	if (Role === 'ROLE_COUNCILLOR') Role = 'councillor';
	return Role;
};
