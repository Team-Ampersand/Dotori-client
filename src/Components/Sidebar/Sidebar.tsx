import React, { useMemo, useState } from 'react';
import * as S from './Style';
import SidebarList from '../SidebarList/SidebarList';
import Logo from 'Assets/Svg/Logo';
import { getCookie } from 'Utils/Cookie';
import { useHistory } from 'react-router';

const returnShow = () => {
	return localStorage.getItem('role');
};

const sidebarMenuData = [
	{
		menuName: 'mainMenu',
		menuLists: [
			{
				router: '/home',
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
				show:
					returnShow() === 'admin' || returnShow() === 'developer'
						? true
						: false,
			},
		],
	},
];

const Sidebar: React.FC = () => {
	const history = useHistory();
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
			<S.LogoWrapper
				onClick={() => {
					history.push('/home');
				}}
			>
				{/* <S.Logo> */}
				<Logo />
				{/* </S.Logo> */}
			</S.LogoWrapper>
			{sidebarMenuData.map((menuData) => (
				<SidebarList
					menuDataLists={menuData.menuLists}
					menuName={menuData.menuName}
					currentRouter={currentRouter}
					setCurrnentRouter={setCurrentRouter}
					key={`sidebar-${menuData.menuName}`}
				/>
			))}
		</S.Postioner>
	);
};

export default Sidebar;
