import React, { useEffect } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import * as S from './Style';

interface SidebarItemArrayProps {
	router: string;
	menuIcon: string;
	menuTitle: string;
}

//** Props */
interface SidebarListProps {
	menuName: string;
	menuDataLists: SidebarItemArrayProps[];
	currentRouter: string;
	setCurrnentRouter: (currentRouter: string) => void;
}



const returnSidebarColor = (router : string) => {
	if(window.location.pathname === router) return true;
	else return false;
}


const SidebarList: React.FC<SidebarListProps> = ({
	menuName,
	menuDataLists,
	currentRouter,
	setCurrnentRouter,
}) => {
	
	useEffect(() => {
		console.log(window.location.pathname);
		window.onpopstate = () => {
			setCurrnentRouter(window.location.pathname);
		}
	},[window.location.pathname])

	const MappingSidebarItem = menuDataLists.map((item) => (
		<SidebarItem
			router={item.router}
			menuIcon={item.menuIcon}
			menuTitle={item.menuTitle}
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
