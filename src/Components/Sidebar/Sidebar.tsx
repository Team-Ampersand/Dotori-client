import React, { useMemo, useState } from 'react';
import * as S from './Style';
import SidebarList from '../SidebarList/SidebarList';
import Logo from 'Assets/Svg/Logo';
import { getCookie } from 'Utils/Cookie';

const sidebarMenuData = [
	{
		menuName: 'mainMenu',
		menuLists: [
			{
				router: '/',
				menuIcon: 'Home',
				menuTitle: '홈',
				show: true,
			},
			{
				router: '/notice',
				menuIcon: 'Notice',
				menuTitle: '공지사항',
				show: true,
			},
			{
				router: '/selfstudy',
				menuIcon: 'Selfstudy',
				menuTitle: '자습신청',
				show: true,
			},
			{
				router: '/song',
				menuIcon: 'Song',
				menuTitle: '기상음악',
				show: true,
			},
			{
				router: '/authorization',
				menuIcon: 'More',
				menuTitle: '학생 정보',
				show: getCookie('role') === 'admin' ? true : false,
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
				{/* <S.Logo> */}
				<Logo />
				{/* </S.Logo> */}
			</S.LogoWrapper>
			{mappingSidebarMenu}
		</S.Postioner>
	);
};

export default Sidebar;
