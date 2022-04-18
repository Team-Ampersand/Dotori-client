import React from 'react';
import * as S from './Style';
import { useRouterNameChangeMenuImage } from '../../Utils/ChangeImage';
import { useRole } from 'Hooks/useRole';

interface SidebarItemProps {
	router: string;
	menuIcon: string;
	menuTitle: string;
	show: string[];
	currentRouter: string;
	setCurrnentRouter: (currentRouter: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	router,
	menuIcon,
	menuTitle,
	show,
	currentRouter,
	setCurrnentRouter,
}) => {
	const role = useRole();
	return (
		<S.LinkWrapper
			to={router}
			onClick={() => setCurrnentRouter(router)}
			sidebarColor={currentRouter.includes(router)}
			show={show.includes(role)}
		>
			{useRouterNameChangeMenuImage(menuIcon)}
			<S.MenuTitle>{menuTitle}</S.MenuTitle>
		</S.LinkWrapper>
	);
};

export default SidebarItem;
