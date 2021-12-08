import React from 'react';
import * as S from './Style';
import { useRouterNameChangeMenuImage } from '../../Utils/ChangeImage';

interface SidebarItemProps {
	router: string;
	menuIcon: string;
	menuTitle: string;
	show: boolean;
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
	return (
		<S.LinkWrapper
			to={router}
			onClick={() => setCurrnentRouter(router)}
			sidebarColor={currentRouter === router}
			show={show}
		>
			{useRouterNameChangeMenuImage(menuIcon)}
			<S.MenuTitle>{menuTitle}</S.MenuTitle>
		</S.LinkWrapper>
	);
};

export default SidebarItem;
