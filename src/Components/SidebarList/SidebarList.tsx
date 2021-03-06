import React, { useEffect } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import * as S from './Style';

interface SidebarItemArrayProps {
	router: string;
	menuIcon: string;
	menuTitle: string;
	show: string[];
}

//** Props */
interface SidebarListProps {
	menuName: string;
	menuDataLists: SidebarItemArrayProps[];
	currentRouter: string;
	setCurrnentRouter: (currentRouter: string) => void;
}

const SidebarList: React.FC<SidebarListProps> = ({
	menuName,
	menuDataLists,
	currentRouter,
	setCurrnentRouter,
}) => {
	useEffect(() => {
		window.onpopstate = () => {
			setCurrnentRouter(window.location.pathname);
		};
	}, [currentRouter, setCurrnentRouter]);

	const MappingSidebarItem = menuDataLists.map((item) => (
		<SidebarItem
			router={item.router}
			menuIcon={item.menuIcon}
			menuTitle={item.menuTitle}
			show={item.show}
			currentRouter={currentRouter}
			setCurrnentRouter={setCurrnentRouter}
			key={`sidebar-item-${item.menuIcon}`}
		/>
	));

	return (
		<S.MenuWrapper isMainMenu={menuName === 'mainMenu'}>
			{MappingSidebarItem}
		</S.MenuWrapper>
	);
};

export default SidebarList;
