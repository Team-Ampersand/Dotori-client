import React, { useMemo, useState } from 'react';
import * as S from './Style';
import SidebarList from '../SidebarList/SidebarList';
import Logo from '../../Assets/logo.png';

const sidebarMenuData = [
	{
		menuName: 'mainMenu',
		menuLists: [
			{
				router: '/',
				menuIcon: 'Home',
				menuTitle: '홈',
			},
			{
				router: '/notice',
				menuIcon: 'Notice',
				menuTitle: '공지사항',
			},
			{
				router: '/selfstudy',
				menuIcon: 'Selfstudy',
				menuTitle: '자습신청',
			},
			{
				router: '/song',
				menuIcon: 'Song',
				menuTitle: '기상음악',
			},
			{
				router: '/point',
				menuIcon: 'Point',
				menuTitle: '상벌점',
			},
		],
	},
];

const Sidebar: React.FC = () => {
	const [currentRouter, setCurrentRouter] = useState(window.location.pathname);
	const mappingSidebarMenu = useMemo(() => {
		return sidebarMenuData.map((menuData) => (
			<SidebarList
				menuDataLists={menuData.menuLists}
				menuName={menuData.menuName}
				currentRouter={currentRouter}
				setCurrnentRouter={setCurrentRouter}
				key={`sidebar-${menuData.menuName}`}
			/>
		));
	}, [currentRouter]);

	return (
		<S.Postioner>
			<S.LogoWrapper>
				<S.Logo src={Logo} />
			</S.LogoWrapper>
			{mappingSidebarMenu}
		</S.Postioner>
	);
};

export default Sidebar;
